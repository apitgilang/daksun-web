import type { Branch } from "@/types/content";

// NOTE: placeholder branches — replace with real data via Sanity.
export const branches: Branch[] = [
  {
    id: "bandung-soreang",
    name: "Bandung — Soreang",
    city: "Bandung",
    address: "Jl. Tol Soroja, Parungserab, Kec. Soreang, Kabupaten Bandung, Jawa Barat 40921",
    hours: "10.00 – 22.00 WIB",
    phone: "+62 813-2066-4905",
    whatsapp: "6281320664905",
    mapsUrl: "https://maps.app.goo.gl/2zJZCfki8TvjVhdK6",
    tone: "ayam",
    isPrimary: true,
  },
  {
    id: "bandung-ciwidey",
    name: "Bandung — Ciwidey",
    city: "Bandung",
    address: "Jl. Raya Soreang-Ciwidey No.321, Sadu, Kec. Soreang, Kabupaten Bandung, Jawa Barat 40913",
    hours: "10.00 – 19.00 WIB",
    phone: "+62 821-1169-4780",
    whatsapp: "6282111694780",
    mapsUrl: "https://maps.app.goo.gl/2t1ArxCkHcZX2wHBA",
    tone: "ikan",
  },
];

export const primaryBranch = branches.find((b) => b.isPrimary) ?? branches[0];

export function getBranch(id: string): Branch | undefined {
  return branches.find((b) => b.id === id);
}
