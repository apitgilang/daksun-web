# Dadakan Sunda

Website for **Dadakan Sunda** — a Sundanese restaurant. *Dadakan* means "cooked fresh,
made-to-order"; the brand celebrates authentic Sundanese home cooking (masakan Sunda) served
with warm hospitality. *Sampurasun!* 🌿

**Status:** Phase 0 — Documentation foundation (no app code yet).

## Stack (planned)

Next.js (App Router) · TypeScript · Tailwind CSS · **Sanity CMS** · deployed on Vercel.
Mobile-first marketing site. Ordering & reservations go through **WhatsApp**; locations link
to **Google Maps**. No payment, cart, or login. Content is managed in **Sanity Studio**
(embedded at `/studio`) — the owner edits menu, promos, news, etc. with no redeploy.

## Documentation

Start here:

| Doc | Purpose |
|-----|---------|
| [`docs/PRD.md`](docs/PRD.md) | Product requirements — vision, goals, scope, flows |
| [`docs/features.md`](docs/features.md) | Reference-site feature mapping & acceptance notes |
| [`docs/content-model.md`](docs/content-model.md) | Typed data shapes for menu, branches, etc. |
| [`docs/architecture.md`](docs/architecture.md) | Stack, routes, folder structure |
| [`docs/roadmap.md`](docs/roadmap.md) | Phased build plan |
| [`CLAUDE.md`](CLAUDE.md) | Guidance for Claude Code in this repo |

## Getting started

```bash
npm install
npm run dev      # app at http://localhost:3000 · Studio at /studio
npm run build
npm run start
npm run lint
```

The site runs **immediately** with built-in placeholder content (in `src/content/*`). No
Sanity project is required to develop or build — content gracefully falls back to local data
until Sanity is connected.

## Connecting Sanity

Content (menu, branches, promos, news, testimonials, events, gallery, settings) is managed in
**Sanity**. To go live with editable content:

1. **Create a free project** at [sanity.io/manage](https://www.sanity.io/manage) → note the
   **Project ID**, and add `http://localhost:3000` + your production domain under
   **API → CORS origins** (allow credentials).
2. **Create `.env.local`** (copy `.env.example`) and fill in:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   SANITY_API_READ_TOKEN=            # optional, for drafts/preview
   SANITY_REVALIDATE_SECRET=any-long-random-string
   SANITY_API_WRITE_TOKEN=           # Editor token, only for seeding
   ```
3. **Seed the placeholder content** (optional but recommended) so you edit instead of retype:
   ```bash
   npm run seed
   ```
4. **Edit content** at `http://localhost:3000/studio`.
5. **Instant updates without redeploy** — in Sanity → **API → Webhooks**, add a webhook:
   - URL: `https://<your-domain>/api/revalidate`
   - Trigger: Create / Update / Delete · Secret: your `SANITY_REVALIDATE_SECRET`
   - Projection: `{ "_type": _type }`

Once `NEXT_PUBLIC_SANITY_PROJECT_ID` is set and content exists, every page reads from Sanity
(GROQ, cache-tagged). Real photos uploaded in Studio replace the gradient placeholders
automatically.

## Scope at a glance

- ✅ Menu, branches, about, gallery, testimonials, promos, news, events, partnership, contact
- ✅ WhatsApp ordering/reservation + Google Maps deep-links
- ✅ Content managed by the owner in Sanity Studio (`/studio`)
- ❌ No online payment, login/accounts, or investment portal
- 🗣️ Bahasa Indonesia with Sundanese accents
