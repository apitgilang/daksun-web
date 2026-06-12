# Roadmap

Phased build plan. Each phase is shippable/reviewable. Detailed UI design is produced during
the build phases via the `ui-ux-pro-max` skill.

## Phase 0 — Docs Foundation ✅ (current)
- PRD, features mapping, content model, architecture, roadmap, CLAUDE.md, README.
- Scope locked: Next.js + Tailwind + **Sanity CMS**, WhatsApp/Maps ordering, no
  payment/login/investment, Indonesian + Sundanese accents.

## Phase 1 — Scaffold, CMS & Home
- Initialize Next.js (App Router) + TypeScript + Tailwind.
- **Set up Sanity**: install `sanity`/`next-sanity`, create project, define all schemas
  (`siteSettings`, `branch`, `menuCategory`, `menuItem`, `testimonial`, `promo`, `newsPost`,
  `eventSpace`, `partner`), embed Studio at `/studio`, configure env vars.
- Sanity client + `sanityFetch` wrapper + `urlFor` + first GROQ queries; `/api/revalidate`
  webhook handler with `revalidateTag`.
- Set up fonts, design tokens, base layout (Header, Footer, Nav, MobileMenu, Container).
- Build shared primitives: `Button`, `Section`, `WhatsAppButton`, `MapsButton`, `Badge`,
  `Rating`, `PortableText`.
- `BranchContext` + selected-branch persistence.
- Seed placeholder content in Studio.
- **Home page**: hero, signature dishes, why-us, promo strip, testimonials snippet, locations strip, CTAs.

## Phase 2 — Menu & Branches
- `menuCategory`/`menuItem`/`branch` GROQ queries; `/menu` with categories and item cards;
  per-item WhatsApp order.
- `BranchSelector` wired to context (drives menu availability + WA number).
- `/cabang` list and `/cabang/[slug]` detail (info, hours, map, branch menu).
- `lib` helpers: `formatRupiah`, `waLink`, order/reservation message builders.

## Phase 3 — About, Gallery, Testimonials, Contact
- `/tentang` brand story (*dadakan* philosophy, values).
- `/galeri` responsive gallery.
- Full testimonials section/component.
- `/kontak` with WA, tel, email, map, socials.

## Phase 4 — Promo, Berita, Acara, Kemitraan
- `/promo` with active/expired handling (`isPromoActive`).
- `/berita` list + `/berita/[slug]` detail.
- `/acara` event/venue rental with inquiry CTA.
- `/kemitraan` partnership/franchise with inquiry CTA.
- Optional: background-music toggle, "Karir" block.

## Phase 5 — SEO, Performance, A11y, Deploy
- Per-page metadata, Open Graph, JSON-LD (`Restaurant`/`LocalBusiness`), `sitemap.ts`, `robots.ts`.
- Image optimization, lazy-loading, Lighthouse pass.
- Accessibility pass (contrast, alt text, keyboard/focus).
- Deploy to Vercel; connect domain.

## Cross-phase: Real content handoff
- Owner replaces placeholder branches, menu, photos, promos, social handles, and WhatsApp
  numbers with real data **in Sanity Studio** (`/studio`); grant editor access (see `PRD.md §9`).
- Configure the Sanity publish webhook → `/api/revalidate` in the Sanity project settings.
