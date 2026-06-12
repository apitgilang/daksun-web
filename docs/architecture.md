# Architecture

Static-first marketing site built with **Next.js (App Router) + TypeScript + Tailwind CSS**,
deployed to **Vercel**. No custom backend, database, or auth that we operate. Content is
managed in **Sanity** (hosted headless CMS) and read via GROQ (see `content-model.md`);
conversions are WhatsApp/Maps deep-links.

## Stack

| Concern | Choice |
|--------|--------|
| Framework | Next.js (App Router), SSG/ISR where possible |
| Language | TypeScript |
| Styling | Tailwind CSS + design tokens (CSS variables) |
| Content (CMS) | **Sanity** — `sanity`, `next-sanity`, `@sanity/image-url`, `@portabletext/react` |
| Images | Sanity image pipeline (`urlFor()`) rendered via `next/image` (optimized, lazy) |
| Fonts | `next/font` (one display + one body face) |
| Icons | lightweight set (e.g. lucide-react) |
| SEO | Next Metadata API, Open Graph, JSON-LD (`Restaurant`/`LocalBusiness`), sitemap, robots |
| Analytics | Vercel Analytics or lightweight (optional) |
| Hosting | Vercel (app + embedded Studio at `/studio`) |

> Final **visual design** (palette, type pairing, components) is produced in the build phase
> via the `ui-ux-pro-max` skill. This doc defines **structure & IA**, not the final UI.

## Route map (App Router)

```
/                       Home (Wilujeng Sumping)
/menu                   Full menu (respects selected branch)
/cabang                 Branch list / selector
/cabang/[slug]          Branch detail (info, hours, map, its menu)
/tentang                About / brand story
/galeri                 Gallery
/promo                  Promotions list
/berita                 News list
/berita/[slug]          News article
/acara                  Event & venue rental
/kemitraan              Partnership / franchise
/kontak                 Contact (WA, tel, email, map, socials)
/studio/[[...tool]]     Embedded Sanity Studio (content editing)
/api/revalidate         Sanity webhook → on-demand revalidation (route handler)
```

`sitemap.ts` and `robots.ts` at the app root.

## Folder structure

```
sanity.config.ts            # Studio config (projectId, dataset, plugins, desk structure)
sanity.cli.ts               # Sanity CLI config
sanity/
└── schemaTypes/            # document & object schemas (see content-model.md)
src/
├── app/
│   ├── layout.tsx          # root layout: fonts, header, footer, metadata
│   ├── page.tsx            # home
│   ├── menu/page.tsx
│   ├── cabang/page.tsx
│   ├── cabang/[slug]/page.tsx
│   ├── tentang/page.tsx
│   ├── galeri/page.tsx
│   ├── promo/page.tsx
│   ├── berita/page.tsx
│   ├── berita/[slug]/page.tsx
│   ├── acara/page.tsx
│   ├── kemitraan/page.tsx
│   ├── kontak/page.tsx
│   ├── studio/[[...tool]]/page.tsx   # embedded Sanity Studio
│   ├── api/revalidate/route.ts       # webhook → revalidateTag
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/             # Header, Footer, Nav, MobileMenu, Container
│   ├── home/               # Hero, SignatureDishes, WhyUs, PromoStrip, LocationsStrip
│   ├── menu/               # MenuCategory, MenuItemCard, BranchSelector
│   ├── shared/             # Button, Section, SectionTitle, Card, Badge, Rating,
│   │                       #   WhatsAppButton, MapsButton, SocialLinks, PortableText
│   └── ...
├── sanity/
│   └── lib/                # client.ts, fetch.ts (cache tags), queries.ts (GROQ), image.ts (urlFor)
├── lib/                    # formatRupiah, waLink, message builders, isPromoActive, seo helpers
├── context/                # BranchContext (selected branch, persisted to localStorage)
├── types/                  # content.ts (TS types for query results)
└── styles/                 # globals.css, tokens
public/
└── images/                 # static brand assets only (food/branch photos live in Sanity)
```

## Content data flow (Sanity)

- **Editing** — owner edits at `/studio` (embedded Studio). Documents follow the schemas in
  `sanity/schemaTypes/` (see `content-model.md`).
- **Reading** — Server Components call a `sanityFetch` wrapper (`src/sanity/lib/fetch.ts`) that
  runs GROQ queries (`src/sanity/lib/queries.ts`) and attaches **cache tags** (e.g. `branch`,
  `menuItem`, `promo`, `newsPost`).
- **Revalidation** — a Sanity webhook calls `/api/revalidate` on publish; the handler verifies
  `SANITY_REVALIDATE_SECRET` and calls `revalidateTag(...)` for near-instant updates with no
  redeploy. A time-based `revalidate` (e.g. 60s) is the fallback.
- **Images** — `urlFor(source)` from `src/sanity/lib/image.ts` builds optimized URLs (hotspot
  respected), rendered through `next/image`.
- **Rich text** — `newsPost.body` is Portable Text, rendered with a shared `PortableText` component.
- **Env vars** — `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
  `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_API_READ_TOKEN` (drafts/preview, server-only),
  `SANITY_REVALIDATE_SECRET` (webhook).

## Key cross-cutting concerns

- **Branch selection** — `BranchContext` holds the active branch (client), defaulting to the
  `isPrimary` branch (from Sanity), persisted in `localStorage`. Menu, order CTAs, and contact
  buttons read from it so the correct WhatsApp number/Maps link are used everywhere.
- **WhatsApp/Maps deep-links** — centralized in `lib` helpers (`waLink`, message builders);
  components never hand-build URLs.
- **Reusable UI** — `WhatsAppButton` and `MapsButton` are shared primitives reused across
  menu items, branch cards, event/partnership inquiries, and contact.
- **SEO** — each route exports `metadata`; branch/news detail pages use dynamic metadata derived
  from Sanity; home and branch pages emit `Restaurant`/`LocalBusiness` JSON-LD.
- **Mobile-first** — Tailwind breakpoints; sticky bottom CTA bar on mobile is a candidate.

## Conventions

- Components: `PascalCase.tsx`; one component per file; co-locate small subcomponents.
- Helpers & Sanity lib: `camelCase.ts`. Route folders: lowercase Indonesian slugs.
- Schema type names: `camelCase` document types in `sanity/schemaTypes/`.
- No magic strings for WhatsApp numbers/links — always via Sanity data + `lib` helpers.
- Prices stored as integers (IDR) in Sanity, formatted at render with `formatRupiah`.
