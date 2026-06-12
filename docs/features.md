# Features — Reference Mapping & Acceptance Notes

This maps every feature observed on the reference site (warungbakakaksampurasun.com) to a
**decision** for Dadakan Sunda. Reference is used for *features only*, not design/UI.

Legend: ✅ In · 🔁 Modified · ❌ Out

## Reference → Decision

| # | Reference feature | Decision | Adaptation for Dadakan Sunda |
|---|-------------------|----------|------------------------------|
| 1 | Homepage / *Wilujeng Sumping* hero | ✅ In | Hero with signature dish, brand tagline, primary CTAs |
| 2 | Background music player | 🔁 Modified | Optional, **muted by default**, user-toggle only; nice-to-have, low priority |
| 3 | Branch-specific menu ("Pilih menu cabang") | ✅ In | Branch selector drives which menu/prices/WA number show |
| 4 | Menu — mains, fish, sides, kids, beverages, condiments | ✅ In | Categorized menu, browse-only, per-item WhatsApp order |
| 5 | "Special qualities" showcase (10 points) | 🔁 Modified | "Kenapa Dadakan Sunda" — a focused set (e.g. 4–6) of selling points |
| 6 | Testimonials (figures/celebrities) | ✅ In | Customer/figure quotes + rating; start with real-or-placeholder |
| 7 | Location directory (6 branches: address, hours, phone, link) | ✅ In | Branches page + per-branch detail; Google Maps deep-links |
| 8 | Event venue rental ("Sewa Tempat Acara") | ✅ In | *Acara* page: capacity, packages, WhatsApp inquiry |
| 9 | Delivery service | 🔁 Modified | Surfaced as WhatsApp order + links to external delivery apps if any |
| 10 | Partnership program | ✅ In | *Kemitraan* page: franchise/partner info + inquiry CTA |
| 11 | Investment opportunities | ❌ Out | Excluded per scope decision |
| 12 | Job listings | 🔁 Modified | Optional: small "Karir" block/section, WhatsApp/email inquiry (low priority) |
| 13 | Promo Spesial | ✅ In | *Promo* page: active promos with validity & terms |
| 14 | Berita / news / articles | ✅ In | *Berita* list + detail pages |
| 15 | Login section | ❌ Out | No auth/accounts |
| 16 | Contact (email, phone, hours) | ✅ In | *Kontak* page with WA, tel, email, map, socials |
| 17 | Social media (Instagram, TikTok) | ✅ In | Footer + contact links |
| 18 | Operating hours display | ✅ In | Per-branch hours; global hours in footer |

## Acceptance Notes (what "done" means)

- **Branch selector** — selecting a branch persists across menu/contact CTAs; the active
  branch's WhatsApp number and Maps link are used by all order/reservation buttons.
- **Menu** — items grouped by category; each card shows name, description, price (`Rp`),
  photo, optional tags (pedas, favorit, halal); "Pesan via WhatsApp" prefills item + branch.
- **Testimonials** — name, optional role/handle, quote, star rating; responsive carousel/grid.
- **Promo** — title, image, description, validity dates, terms; expired promos hidden or marked.
- **Berita** — list with thumbnail/date/excerpt; detail page with metadata & share.
- **Acara (event rental)** — spaces with capacity, suitable occasions, package summary,
  prominent "Tanya Ketersediaan via WhatsApp" CTA.
- **Kemitraan** — value proposition, what partners get, steps, inquiry CTA.
- **Background music** — off by default, accessible toggle, remembers user choice; never autoplays
  with sound. Ship only if it doesn't hurt performance/UX.
- **Contact/Locations** — every branch: address, hours, phone (`tel:`), WhatsApp, Maps link.

## Content management

All content (menu, branches, promos, news, testimonials, events, partners, site settings) is
edited by the owner in **Sanity Studio** at `/studio` — no developer or redeploy needed. See
`content-model.md` for schemas.

## Explicitly Out of Scope

- Online payment, cart, checkout
- User login / accounts (public site)
- Investment / investor portal
- Custom app backend / database (content is managed in Sanity, a hosted CMS)
