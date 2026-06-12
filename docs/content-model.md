# Content Model

Content is managed in **Sanity** (hosted headless CMS). The restaurant owner edits everything
— menu, branches, promos, news, testimonials, events, partners, and global settings — from an
embedded **Sanity Studio at `/studio`**. The Next.js app reads content via **GROQ** queries in
Server Components. No custom backend or database that we operate.

## Where things live

```
sanity/
└── schemaTypes/           # document & object schemas (one file per type)
    ├── index.ts           # exports all schema types
    ├── siteSettings.ts    # singleton
    ├── branch.ts
    ├── menuCategory.ts
    ├── menuItem.ts
    ├── testimonial.ts
    ├── promo.ts
    ├── newsPost.ts
    ├── eventSpace.ts
    └── partner.ts
sanity.config.ts           # Studio config (project id, dataset, plugins, structure)
sanity.cli.ts              # CLI config
src/
├── sanity/
│   └── lib/
│       ├── client.ts      # next-sanity client (projectId, dataset, apiVersion, useCdn)
│       ├── queries.ts     # GROQ queries (centralized)
│       ├── fetch.ts       # sanityFetch wrapper with cache tags for revalidation
│       └── image.ts       # urlFor() image-url builder
├── lib/                   # render helpers: formatRupiah, waLink, message builders, isPromoActive
└── app/
    └── studio/[[...tool]]/page.tsx   # embedded Studio at /studio
```

**Env vars** (`.env.local`):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=          # for drafts/preview (server-only)
SANITY_REVALIDATE_SECRET=       # shared secret for the revalidation webhook
```

## Schema types

Defined with Sanity's `defineType` / `defineField`. Field types below use Sanity primitives:
`string`, `text`, `slug`, `number`, `image` (with hotspot), `datetime`, `boolean`, `array`,
`reference`, and **Portable Text** (`array` of `block`) for rich text.

### `siteSettings` (singleton)
| Field | Type | Notes |
|-------|------|-------|
| `name` | string | "Dadakan Sunda" |
| `tagline` | string | e.g. "Masakan Sunda, Dadakan & Fresh" |
| `description` | text | SEO/meta default |
| `defaultWhatsApp` | string | E.164 digits only, e.g. `6281234567890` |
| `email` | string | |
| `instagram` / `tiktok` / `facebook` | url | optional |
| `hours` | string | global fallback, e.g. "08.00–22.00 WIB" |
| `ogImage` | image | default social share image |

### `branch`
| Field | Type | Notes |
|-------|------|-------|
| `name` | string | "Dadakan Sunda Bandung" |
| `slug` | slug | source: `name`; used in `/cabang/[slug]` |
| `address` | text | |
| `hours` | string | "08.00–22.00 WIB" |
| `phone` | string | display + `tel:` |
| `whatsapp` | string | E.164 digits only (per-branch) |
| `mapsUrl` | url | Google Maps link |
| `coords` | object `{lat, lng}` | optional, for JSON-LD |
| `image` | image | storefront photo |
| `isPrimary` | boolean | default-selected branch |

### `menuCategory`
| Field | Type | Notes |
|-------|------|-------|
| `name` | string | "Bakakak", "Ikan", "Sayur & Lalapan", … |
| `slug` | slug | |
| `description` | text | optional |
| `order` | number | sort order |

### `menuItem`
| Field | Type | Notes |
|-------|------|-------|
| `name` | string | "Bakakak Ayam Kampung" |
| `slug` | slug | |
| `category` | reference → `menuCategory` | |
| `description` | text | optional |
| `price` | number | IDR integer → rendered `Rp 45.000` |
| `image` | image | hotspot enabled |
| `tags` | array of string | `favorit`, `pedas`, `halal`, `baru`, `rekomendasi` |
| `availableAt` | array of reference → `branch` | empty = all branches |
| `order` | number | sort within category |

### `testimonial`
| Field | Type | Notes |
|-------|------|-------|
| `name` | string | |
| `role` | string | optional ("Pelanggan", handle, title) |
| `avatar` | image | optional |
| `quote` | text | |
| `rating` | number | 1–5 |

### `promo`
| Field | Type | Notes |
|-------|------|-------|
| `title` | string | |
| `slug` | slug | |
| `description` | text | |
| `image` | image | |
| `startsAt` | datetime | optional |
| `endsAt` | datetime | optional; used by `isPromoActive` |
| `terms` | array of string | optional |
| `branches` | array of reference → `branch` | empty = all |

### `newsPost`
| Field | Type | Notes |
|-------|------|-------|
| `title` | string | |
| `slug` | slug | `/berita/[slug]` |
| `date` | datetime | |
| `excerpt` | text | |
| `coverImage` | image | |
| `body` | Portable Text | rich text, rendered with `@portabletext/react` |
| `author` | string | optional |

### `eventSpace`
| Field | Type | Notes |
|-------|------|-------|
| `name` | string | "Saung Keluarga", "Aula Sampurasun" |
| `capacity` | number | pax |
| `suitableFor` | array of string | ["Ulang Tahun", "Arisan", "Gathering Kantor"] |
| `description` | text | optional |
| `images` | array of image | |
| `packageSummary` | text | optional |
| `branch` | reference → `branch` | which branch hosts it |

### `partner`
| Field | Type | Notes |
|-------|------|-------|
| `name` | string | |
| `logo` | image | optional |
| `url` | url | optional |

## Data fetching & revalidation

- Server Components fetch via a `sanityFetch` wrapper (`src/sanity/lib/fetch.ts`) that attaches
  **cache tags** (e.g. `branch`, `menuItem`, `promo`).
- A **Sanity webhook** hits an API route (`/api/revalidate`) on publish; the route verifies
  `SANITY_REVALIDATE_SECRET` and calls `revalidateTag(...)` → near-instant updates, no redeploy.
- Time-based `revalidate` (e.g. 60s) as a fallback.
- **Images**: build URLs with `urlFor(source)` (from `src/sanity/lib/image.ts`) and render via
  `next/image`; hotspot/crop respected.

## Render helpers (in `src/lib`, operate on Sanity-fetched data)

- `formatRupiah(n: number): string` → `"Rp 45.000"` (Indonesian locale, dot separators).
- `waLink(number: string, message: string): string` → `https://wa.me/...?text=...` via `encodeURIComponent`.
- `orderMessage(item, branch)` / `reservationMessage(branch, opts)` → prefilled WhatsApp texts (see `PRD.md §6`).
- `isPromoActive(promo, now): boolean` → uses `startsAt`/`endsAt` to show/hide promos.

## Seeding & placeholders

Seed initial content **through Studio** (or an optional one-off import script using
`@sanity/client`). Until the owner provides real data, create **clearly-labeled placeholder**
documents (e.g. branch named "Cabang Contoh (placeholder)", dummy WhatsApp `6280000000000`) so
pages render without presenting fake data as real. Drafts stay unpublished until ready.
