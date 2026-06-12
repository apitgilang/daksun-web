import type { SiteConfig } from "@/types/content";

// NOTE: placeholder values — replace with real data via Sanity (see docs/PRD.md §9).
export const site: SiteConfig = {
  name: "Dadakan Sunda",
  tagline: "Masakan Sunda, dimasak dadakan — sangu haneut, sambel ngageugeuh.",
  description:
    "Restoran Sunda autentik. Setiap hidangan dimasak dadakan — segar, hangat, dan penuh rasa. Pesan & reservasi mudah lewat WhatsApp.",
  defaultWhatsApp: "6281200000000",
  email: "halo@dadakansunda.id",
  hours: "10.00 – 22.00 WIB",
  socials: {
    instagram: "https://instagram.com/dadakansunda",
    tiktok: "https://tiktok.com/@dadakansunda",
    facebook: "https://facebook.com/dadakansunda",
  },
};

export const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/cabang", label: "Cabang" },
  { href: "/tentang", label: "Tentang" },
  { href: "/galeri", label: "Galeri" },
  { href: "/promo", label: "Promo" },
  { href: "/acara", label: "Acara" },
  { href: "/berita", label: "Berita" },
  { href: "/kemitraan", label: "Kemitraan" },
  { href: "/kontak", label: "Kontak" },
];
