import type { Branch } from "@/types/content";

// NOTE: placeholder branches — replace with real data via Sanity.
export const branches: Branch[] = [
  {
    id: "bandung-dago",
    name: "Bandung — Dago",
    city: "Bandung",
    address: "Jl. Ir. H. Juanda No. 162, Dago, Bandung, Jawa Barat 40135",
    hours: "10.00 – 22.00 WIB",
    phone: "+62 812-0000-0001",
    whatsapp: "6281200000001",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dago+Bandung",
    tone: "ayam",
    isPrimary: true,
  },
  {
    id: "bandung-buahbatu",
    name: "Bandung — Buahbatu",
    city: "Bandung",
    address: "Jl. Buahbatu No. 270, Turangga, Bandung, Jawa Barat 40264",
    hours: "10.00 – 22.00 WIB",
    phone: "+62 812-0000-0002",
    whatsapp: "6281200000002",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Buahbatu+Bandung",
    tone: "ikan",
  },
  {
    id: "jakarta-kemang",
    name: "Jakarta — Kemang",
    city: "Jakarta",
    address: "Jl. Kemang Raya No. 8, Bangka, Jakarta Selatan 12730",
    hours: "10.00 – 23.00 WIB",
    phone: "+62 812-0000-0003",
    whatsapp: "6281200000003",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kemang+Jakarta",
    tone: "sambal",
  },
  {
    id: "bekasi-summarecon",
    name: "Bekasi — Summarecon",
    city: "Bekasi",
    address: "Jl. Boulevard Selatan, Marga Mulya, Bekasi, Jawa Barat 17142",
    hours: "10.00 – 22.00 WIB",
    phone: "+62 812-0000-0004",
    whatsapp: "6281200000004",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Summarecon+Bekasi",
    tone: "nasi",
  },
];

export const primaryBranch = branches.find((b) => b.isPrimary) ?? branches[0];

export function getBranch(id: string): Branch | undefined {
  return branches.find((b) => b.id === id);
}
