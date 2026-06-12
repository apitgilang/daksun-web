# CLAUDE.md

Guidance for Claude Code working in this repository.

## Project

**Dadakan Sunda** — a mobile-first marketing & discovery website for a Sundanese restaurant.
*Dadakan* = "cooked fresh / made-to-order." Brand tone: warm, homely, proud of Sundanese
tradition (*Sampurasun*, *Wilujeng Sumping*, *Hatur Nuhun*), appetizing and trustworthy.

**Source of truth:** `docs/PRD.md` (requirements), `docs/features.md` (scope),
`docs/content-model.md` (data), `docs/architecture.md` (structure), `docs/roadmap.md` (phases).
Read these before making product decisions.

## Stack & conventions

- **Next.js (App Router) + TypeScript + Tailwind CSS**, deployed to Vercel. SSG/ISR-first.
- No custom backend/DB/auth that we operate. Content is managed in **Sanity** (hosted CMS):
  schemas in `sanity/schemaTypes/`, embedded Studio at **`/studio`**, read via **GROQ** in
  Server Components using the `sanityFetch` wrapper in `src/sanity/lib/`. Images via `urlFor()`
  + `next/image`; rich text (`newsPost.body`) is Portable Text.
- Components: `PascalCase.tsx`, one per file, in `src/components/{layout,home,menu,shared,...}`.
- Helpers/Sanity lib: `camelCase.ts` in `src/lib` / `src/sanity/lib`. Route folders use lowercase
  **Indonesian slugs** (`/menu`, `/cabang`, `/tentang`, `/galeri`, `/promo`, `/berita`,
  `/acara`, `/kemitraan`, `/kontak`). Fonts via `next/font`.
- **Env vars:** `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
  `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_API_READ_TOKEN`, `SANITY_REVALIDATE_SECRET`.

## Commands (after scaffold; not yet initialized)

```bash
npm run dev      # local dev server (app + Studio at /studio)
npm run build    # production build
npm run start    # serve production build
npm run lint     # lint
```

## Working rules

- **Mobile-first.** Design and test for phones first; the primary audience is on mobile.
- **Indonesian copy.** All user-facing strings in Bahasa Indonesia with tasteful Sundanese
  accents. Code, comments, and docs in English.
- **No backend conversions.** Orders/reservations/inquiries are **WhatsApp deep-links**
  (`https://wa.me/<E164>?text=<encoded>`); locations are **Google Maps** links. Never build a
  cart, checkout, payment, login, or investor portal — these are explicit non-goals.
- **Centralize deep-links.** Build WhatsApp/Maps URLs only through `src/lib` helpers
  (`waLink`, order/reservation message builders) — never hand-assemble URLs in components.
  Reuse the shared `WhatsAppButton` / `MapsButton` primitives.
- **Branch-aware.** A selected-branch context drives which menu, WhatsApp number, and Maps
  link are used. Each branch has its own WhatsApp number.
- **Prices** are integers (IDR), formatted at render via `formatRupiah` → `Rp 45.000`.
- **Content in Sanity, not code.** Menu, branches, promos, news, testimonials, events,
  gallery, and site settings are Sanity documents — don't hardcode them in components. Read via
  the data layer in `src/lib/cms.ts` (cached + Sanity-or-fallback); add new GROQ to
  `src/sanity/lib/queries.ts` with cache tags so `/api/revalidate` updates them. Schemas live in
  `sanity/schemaTypes/`. Studio is at `/studio`; site pages live in the `app/(site)` route group.
- **Local fallback.** `src/content/*` holds placeholder data used when Sanity isn't configured
  (or returns empty). `npm run seed` pushes it into Sanity. The site builds & runs with no env.
- **Images.** `DishImage` renders a Sanity photo when `src` is set, else a gradient placeholder —
  always pass `src={...image}` + `alt` where a photo could exist.
- **Placeholders, clearly labeled.** Until the owner supplies real data (branches, menu,
  photos, WhatsApp numbers, socials — see `PRD.md §9`), seed obviously-marked placeholder
  documents in Studio; never present fake data as real.
- **Reuse before adding.** Prefer existing components/helpers/patterns over new ones.
- **Design phase.** Use the `ui-ux-pro-max` skill for visual design during build phases; docs
  define IA/structure, not final UI.

## Status

Phase 0 (docs) complete. Next: Phase 1 scaffold (see `docs/roadmap.md`). Do not assume app
code exists yet — check the tree before referencing files outside `docs/`.
