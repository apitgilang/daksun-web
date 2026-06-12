/**
 * Delete all managed content from the Sanity dataset (placeholder cleanup).
 * Deletes in dependency order so referenced docs go last — no "document in use".
 *
 * Usage:
 *   SANITY_API_WRITE_TOKEN=sk... node --env-file=.env.local scripts/unseed.mjs
 *
 * Add --yes to skip the confirmation countdown.
 */
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID and/or SANITY_API_WRITE_TOKEN.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", token, useCdn: false });

// Order matters: things that reference others are deleted first.
const order = [
  "menuItem", // references menuCategory + branch
  "promo", // references branch
  "eventSpace", // references branch
  "menuCategory",
  "branch",
  "testimonial",
  "newsPost",
  "galleryItem",
  "partner",
  "siteSettings",
];

async function run() {
  if (!process.argv.includes("--yes")) {
    console.log(`About to DELETE all content in ${projectId}/${dataset}. Ctrl-C to abort.`);
    for (let i = 5; i > 0; i--) {
      process.stdout.write(`  ${i}... `);
      await new Promise((r) => setTimeout(r, 1000));
    }
    console.log();
  }

  for (const type of order) {
    const res = await client.delete({ query: `*[_type == "${type}"]` });
    console.log(`Deleted ${res?.results?.length ?? 0} × ${type}`);
  }
  console.log("Done. Dataset cleared.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
