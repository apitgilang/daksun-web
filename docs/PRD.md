# PRD — Dadakan Sunda

**Status:** Draft v1 · Phase 0 (Docs Foundation) · 2026-06-11
**Owner:** apitgilang1994@gmail.com

---

## 1. Overview & Vision

**Dadakan Sunda** is the website for a Sundanese restaurant brand. In Sundanese/Indonesian,
*dadakan* means **"cooked fresh, on the spot / made-to-order"** — and that is the heart of the
brand: authentic Sundanese home cooking (masakan Sunda), prepared fresh, served with warm
hospitality (*"Sampurasun"*).

The website is a **mobile-first marketing & discovery site**. It showcases the food, tells the
brand story, lists locations, and converts visitors into orders and reservations — **all routed
through WhatsApp and Google Maps**, with no online payment, cart, or login.

> Reference for *features only* (not design): warungbakakaksampurasun.com

---

## 2. Goals & Success Metrics

| Goal | Metric |
|------|--------|
| Drive orders & reservations | # of WhatsApp click-throughs from CTAs |
| Showcase the menu | Menu page views, time on menu |
| Build trust & appetite | Scroll depth on home, gallery & testimonials views |
| Be findable locally | Local SEO rank for "masakan sunda <kota>", "restoran sunda <kota>" |
| Grow B2B (events, partnership) | Inquiry clicks on Acara & Kemitraan pages |

**Primary conversion event:** click a "Pesan via WhatsApp" / "Reservasi" / "Tanya" CTA.

---

## 3. Target Personas

1. **Keluarga lokal (local families)** — looking for a place to eat together or order delivery;
   want to see menu, prices, location, and hours fast on mobile.
2. **Grup kantor / acara (office & event groups)** — need catering, large tables, or venue
   rental; care about capacity, packages, and a quick way to inquire.
3. **Penjelajah kuliner (food explorers)** — discovering authentic Sundanese food; driven by
   photos, signature dishes, testimonials, and story.

---

## 4. Scope

### In scope (features)
- Home / landing (*Wilujeng Sumping*)
- Menu (categorized, browse-only, with prices & photos)
- Branch / locations with selector (multi-branch ready)
- About / brand story (*Tentang*)
- Gallery (*Galeri*)
- Testimonials
- Promos (*Promo*)
- News / blog (*Berita*)
- Event & venue rental (*Acara* / sewa tempat)
- Partnership / franchise (*Kemitraan*)
- Contact (*Kontak*) + social links
- WhatsApp ordering/reservation + Google Maps location deep-links

### Non-goals (explicitly out)
- ❌ Online payment / cart / checkout
- ❌ User login / accounts / auth (for the public site)
- ❌ Investment / investor portal ("peluang investasi")
- ❌ Real-time order tracking, delivery dispatch, or POS integration
- ❌ Custom app backend / database we operate

### Content management
- ✅ Content (menu, branches, promos, news, testimonials, events, partners, settings) is
  managed in **Sanity** (hosted headless CMS). The owner edits via an embedded **Studio at
  `/studio`**; updates appear without a redeploy. See `content-model.md` and `architecture.md`.

---

## 5. Feature List (high level)

See `features.md` for the full reference-mapping table and acceptance notes. Summary:

| Area | What it does |
|------|--------------|
| Home | Hero, signature dishes, why-us, featured promos, testimonials snippet, locations strip, CTAs |
| Menu | Categories (Bakakak, Ikan, Sayur/Lalapan, Nasi, Minuman, Paket, Anak), item cards, per-item WhatsApp order |
| Branches | Branch selector; each branch shows address, hours, phone, WA, map link, and its available menu |
| About | Brand story, *dadakan* philosophy, values |
| Gallery | Curated food & ambience photos |
| Testimonials | Customer/figure quotes with rating |
| Promo | Active promotions with validity & terms |
| Berita | News/articles (list + detail) |
| Acara | Event/venue rental info, capacity, packages, inquiry CTA |
| Kemitraan | Partnership/franchise info + inquiry CTA |
| Kontak | Address, hours, phone, WA, email, socials, map |

---

## 6. Ordering & Reservation Flow

There is **no backend**. All conversions are deep-links.

### WhatsApp
- Pattern: `https://wa.me/<E164_NUMBER>?text=<URL_ENCODED_MESSAGE>`
- Number format: international, no `+`/spaces (e.g. `6281234567890`).
- **Per-item order** — message prefilled, e.g.
  `Sampurasun! Saya mau pesan: Bakakak Ayam Kampung (1) dari Dadakan Sunda cabang <Nama Cabang>.`
- **Reservation** — e.g.
  `Sampurasun! Saya mau reservasi meja di Dadakan Sunda <Nama Cabang> untuk <jumlah> orang, tanggal <…>.`
- **Event/partnership inquiry** — context-specific prefilled text.
- Each branch has its **own** WhatsApp number; the active branch determines the target number.

### Google Maps
- Each branch stores a `mapsUrl` (share link or `https://www.google.com/maps/search/?api=1&query=<lat>,<lng>`).
- "Lihat Lokasi / Petunjuk Arah" buttons open Maps in a new tab.

### Optional niceties
- `tel:` links for direct call; `mailto:` for email; share buttons.

---

## 7. Content & Localization

- **Primary language:** Bahasa Indonesia.
- **Sundanese accents:** greetings & flavor phrases — *Sampurasun*, *Wilujeng Sumping*,
  *Hatur Nuhun* (thank you), *Mangga* (please/welcome). Use tastefully, not as full Sundanese.
- **Tone:** warm, homely, proud of tradition; appetizing and trustworthy.
- **Currency:** Rupiah, format `Rp 25.000` (dot thousand separator).
- All UI copy and content strings are Indonesian; code/docs are English.

---

## 8. Non-Functional Requirements

- **Mobile-first & responsive** — primary audience browses on phones.
- **Performance** — fast LCP; optimized images via `next/image`; lazy-load below the fold.
- **SEO** — per-page metadata, Open Graph, `LocalBusiness`/`Restaurant` JSON-LD, sitemap, semantic HTML.
- **Accessibility** — sufficient contrast, alt text, keyboard-navigable, focus states.
- **Hosting** — Vercel-friendly (static/SSG/ISR where possible).
- **Maintainability** — content lives in **Sanity**, so the non-technical owner can self-edit
  menu, promos, news, etc. from `/studio` with no developer or redeploy; updates revalidate
  near-instantly via webhook.

---

## 9. Assumptions & Open Questions (owner to provide)

- [ ] Real branch list: names, addresses, hours, phone & **WhatsApp** numbers, map links/coords.
- [ ] Final menu: items, descriptions, prices, photos, per-branch availability.
- [ ] Brand assets: logo, color preferences, food/ambience photography.
- [ ] Social handles (Instagram, TikTok, etc.) and contact email.
- [ ] Event/venue packages & capacities; partnership/franchise terms.
- [ ] Domain name.
- [ ] Sanity account/project (free tier) + which team members get Studio editor access.

This content is entered through **Sanity Studio (`/studio`)**, not code. Until provided, the
build uses **clearly-marked placeholder** documents (kept as drafts where possible).

---

## 10. References

- Feature mapping & acceptance: `docs/features.md`
- Data shapes: `docs/content-model.md`
- Tech & routing: `docs/architecture.md`
- Build phases: `docs/roadmap.md`
- Working guidance for Claude Code: `CLAUDE.md`
