import type { Promo } from "@/types/content";

// NOTE: placeholder promos — replace via Sanity.
export const promos: Promo[] = [
  {
    id: "paket-liwet-berdua",
    title: "Paket Liwet Berdua",
    description:
      "Nikmati Nasi Liwet Komplit untuk berdua plus dua es cincau, hemat sampai 20%. Pas untuk makan siang bareng.",
    badge: "Hemat 20%",
    endsAt: "2026-07-31",
    terms: ["Berlaku setiap hari", "Dine-in & takeaway", "Tidak digabung promo lain"],
    tone: "nasi",
  },
  {
    id: "jumat-bakakak",
    title: "Jumat Berkah Bakakak",
    description:
      "Setiap Jumat, Bakakak Ayam Kampung gratis es goyobod untuk dua orang. Berkah kebersamaan keluarga.",
    badge: "Setiap Jumat",
    endsAt: "2026-08-30",
    terms: ["Khusus hari Jumat", "Minimal 1 bakakak", "Dine-in"],
    tone: "ayam",
  },
  {
    id: "ulang-tahun",
    title: "Traktiran Ulang Tahun",
    description:
      "Rayakan ulang tahun di Dadakan Sunda — tunjukkan KTP saat hari-H dan dapatkan diskon 25% untuk satu meja.",
    badge: "Diskon 25%",
    endsAt: "2026-12-31",
    terms: ["Sesuai tanggal di KTP", "Maksimal 1 meja", "Reservasi disarankan"],
    tone: "sambal",
  },
];
