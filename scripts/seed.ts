/**
 * Seed the Sanity dataset from the local content in `src/content/*` — the single
 * source of truth. Edit the TS content files, run this, and Studio reflects them.
 * Idempotent (createOrReplace with deterministic _ids). Run `npm run unseed` first
 * if you want stale documents (e.g. removed branches) cleared before seeding.
 *
 * Usage:
 *   1. Fill .env.local with NEXT_PUBLIC_SANITY_PROJECT_ID + NEXT_PUBLIC_SANITY_DATASET
 *   2. Create a write token (Sanity → Manage → API → Tokens, "Editor")
 *   3. npm run seed
 */
import { createClient } from "@sanity/client";

import { site } from "../src/content/site";
import { branches } from "../src/content/branches";
import { menu } from "../src/content/menu";
import { testimonials } from "../src/content/testimonials";
import { promos } from "../src/content/promos";
import { news } from "../src/content/news";
import { eventSpaces } from "../src/content/events";
import { gallery } from "../src/content/gallery";
import type { NewsBlock } from "../src/types/content";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing config. Need NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", token, useCdn: false });

const slug = (current: string) => ({ _type: "slug", current });
const ref = (id: string) => ({ _type: "reference", _ref: id });
const iso = (d: string) => new Date(d).toISOString();

/** String paragraphs → Portable Text blocks; pass-through anything already a block. */
function toBlocks(body: NewsBlock[]) {
  return body.map((block, i) => {
    if (typeof block !== "string") return { _key: `b${i}`, ...block };
    return {
      _type: "block",
      _key: `b${i}`,
      style: "normal",
      markDefs: [],
      children: [{ _type: "span", _key: `s${i}`, text: block, marks: [] }],
    };
  });
}

async function run() {
  const docs: Record<string, unknown>[] = [];

  docs.push({
    _id: "siteSettings",
    _type: "siteSettings",
    name: site.name,
    tagline: site.tagline,
    description: site.description,
    defaultWhatsApp: site.defaultWhatsApp,
    email: site.email,
    hours: site.hours,
    instagram: site.socials.instagram,
    tiktok: site.socials.tiktok,
    facebook: site.socials.facebook,
  });

  branches.forEach((b, i) =>
    docs.push({ _id: `branch-${b.id}`, _type: "branch", ...b, slug: slug(b.id), order: i, isPrimary: !!b.isPrimary }),
  );

  // Menu is nested categories → items in the content file; flatten to docs + refs.
  let itemOrder = 0;
  menu.forEach((c, ci) => {
    docs.push({
      _id: `cat-${c.id}`,
      _type: "menuCategory",
      name: c.name,
      sundanese: c.sundanese,
      description: c.description,
      slug: slug(c.id),
      order: ci,
    });
    c.items.forEach((it) =>
      docs.push({
        _id: `item-${it.id}`,
        _type: "menuItem",
        name: it.name,
        slug: slug(it.id),
        category: ref(`cat-${c.id}`),
        description: it.description,
        price: it.price,
        tags: it.tags || [],
        availableAt: (it.availableAt || []).map((bid) => ref(`branch-${bid}`)),
        signature: !!it.signature,
        tone: it.tone,
        order: itemOrder++,
      }),
    );
  });

  testimonials.forEach((t, i) =>
    docs.push({ _id: `testimonial-${t.id}`, _type: "testimonial", name: t.name, role: t.role, quote: t.quote, rating: t.rating, order: i }),
  );

  promos.forEach((p, i) =>
    docs.push({
      _id: `promo-${p.id}`,
      _type: "promo",
      title: p.title,
      slug: slug(p.id),
      description: p.description,
      badge: p.badge,
      startsAt: p.startsAt ? iso(p.startsAt) : undefined,
      endsAt: p.endsAt ? iso(p.endsAt) : undefined,
      terms: p.terms,
      tone: p.tone,
      order: i,
    }),
  );

  news.forEach((n) =>
    docs.push({
      _id: `news-${n.id}`,
      _type: "newsPost",
      title: n.title,
      slug: slug(n.id),
      date: iso(n.date),
      category: n.category,
      excerpt: n.excerpt,
      body: toBlocks(n.body),
      author: n.author,
      tone: n.tone,
    }),
  );

  eventSpaces.forEach((e, i) =>
    docs.push({
      _id: `event-${e.id}`,
      _type: "eventSpace",
      name: e.name,
      capacity: e.capacity,
      suitableFor: e.suitableFor,
      description: e.description,
      packageSummary: e.packageSummary,
      tone: e.tone,
      order: i,
    }),
  );

  gallery.forEach((g, i) =>
    docs.push({ _id: `gallery-${g.id}`, _type: "galleryItem", caption: g.caption, tone: g.tone, span: g.span, order: i }),
  );

  // Prune: delete any managed docs whose _id is no longer produced from content
  // (e.g. a branch you renamed/removed). Makes `seed` a true sync, not just additive.
  const managedTypes = [
    "siteSettings", "branch", "menuCategory", "menuItem",
    "testimonial", "promo", "newsPost", "eventSpace", "galleryItem", "partner",
  ];
  const newIds = new Set(docs.map((d) => d._id as string));
  const existingIds: string[] = await client.fetch("*[_type in $t]._id", { t: managedTypes });
  const staleIds = existingIds.filter((id) => !newIds.has(id));

  let tx = client.transaction();
  docs.forEach((d) => (tx = tx.createOrReplace(d as { _id: string; _type: string })));
  staleIds.forEach((id) => (tx = tx.delete(id)));
  await tx.commit();
  console.log(
    `Seeded ${docs.length} documents` +
      (staleIds.length ? `, pruned ${staleIds.length} stale` : "") +
      ` into ${projectId}/${dataset}.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
