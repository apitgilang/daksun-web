import type { MenuCategory, MenuItem } from "@/types/content";

// NOTE: placeholder menu — replace with real data via Sanity.
export const menu: MenuCategory[] = [
  {
    id: "bakakar",
    name: "Bakakak & Ayam",
    sundanese: "Hayam",
    description: "Ayam kampung dibakar dadakan dengan bumbu kuning meresap.",
    items: [
      {
        id: "bakakak-ayam-kampung",
        name: "Bakakak Ayam Kampung",
        description: "Ayam kampung utuh, dibakar dengan bumbu kuning khas, disajikan dengan sambal dadakan.",
        price: 98000,
        tags: ["favorit", "rekomendasi"],
        signature: true,
        tone: "ayam",
      },
      {
        id: "ayam-bakar-madu",
        name: "Ayam Bakar Madu",
        description: "Ayam bakar olesan madu hutan, manis-gurih dengan aroma arang.",
        price: 42000,
        tags: ["favorit"],
        tone: "ayam",
      },
      {
        id: "ayam-goreng-lengkuas",
        name: "Ayam Goreng Lengkuas",
        description: "Ayam goreng kremes lengkuas yang renyah dan wangi.",
        price: 38000,
        tags: ["halal"],
        tone: "nasi",
      },
    ],
  },
  {
    id: "ikan",
    name: "Ikan & Laut",
    sundanese: "Lauk",
    description: "Ikan segar bakar & goreng, ditemani sambal dadakan.",
    items: [
      {
        id: "gurame-bakar",
        name: "Gurame Bakar Kecap",
        description: "Gurame segar dibakar dengan kecap & bumbu rempah, lembut di dalam.",
        price: 115000,
        tags: ["rekomendasi"],
        signature: true,
        tone: "ikan",
      },
      {
        id: "nila-goreng",
        name: "Nila Goreng Renyah",
        description: "Ikan nila digoreng garing, nikmat dengan sambal terasi.",
        price: 45000,
        tags: ["halal"],
        tone: "ikan",
      },
      {
        id: "pepes-ikan-mas",
        name: "Pepes Ikan Mas",
        description: "Ikan mas dibungkus daun pisang, dikukus dengan kemangi & rempah.",
        price: 52000,
        tags: ["baru"],
        tone: "sayur",
      },
    ],
  },
  {
    id: "sayur-lalapan",
    name: "Sayur & Lalapan",
    sundanese: "Sayuran",
    description: "Segarnya lalapan & sayur khas Sunda.",
    items: [
      {
        id: "karedok",
        name: "Karedok",
        description: "Sayuran mentah segar dengan bumbu kacang & kencur yang khas.",
        price: 25000,
        tags: ["rekomendasi", "halal"],
        signature: true,
        tone: "sayur",
      },
      {
        id: "sayur-asem",
        name: "Sayur Asem Sunda",
        description: "Kuah asem segar berisi melinjo, kacang, dan labu.",
        price: 22000,
        tone: "sayur",
      },
      {
        id: "lalapan-sambal",
        name: "Lalapan & Sambal Dadakan",
        description: "Lalapan segar dengan sambal terasi yang diulek dadakan.",
        price: 18000,
        tags: ["pedas"],
        tone: "sambal",
      },
    ],
  },
  {
    id: "nasi-pelengkap",
    name: "Nasi & Pelengkap",
    sundanese: "Sangu",
    description: "Sangu haneut & gorengan teman makan.",
    items: [
      {
        id: "nasi-timbel",
        name: "Nasi Timbel Komplit",
        description: "Nasi hangat dibungkus daun pisang, ayam goreng, tahu, tempe, lalapan, sambal.",
        price: 48000,
        tags: ["favorit", "rekomendasi"],
        signature: true,
        tone: "nasi",
      },
      {
        id: "nasi-liwet",
        name: "Nasi Liwet Komplit (2-3 org)",
        description: "Nasi liwet gurih untuk berbagi, lengkap dengan lauk & lalapan.",
        price: 95000,
        tags: ["rekomendasi"],
        tone: "nasi",
      },
      {
        id: "tahu-tempe",
        name: "Tahu & Tempe Goreng",
        description: "Tahu dan tempe goreng renyah, hangat dari penggorengan.",
        price: 15000,
        tone: "nasi",
      },
    ],
  },
  {
    id: "minuman",
    name: "Minuman",
    sundanese: "Inuman",
    description: "Pelepas dahaga tradisional & segar.",
    items: [
      {
        id: "es-cincau",
        name: "Es Cincau Hijau",
        description: "Cincau hijau segar dengan santan & gula aren.",
        price: 18000,
        tags: ["favorit"],
        tone: "minuman",
      },
      {
        id: "bandrek",
        name: "Bandrek Haneut",
        description: "Wedang jahe rempah hangat khas Sunda.",
        price: 16000,
        tone: "minuman",
      },
      {
        id: "es-goyobod",
        name: "Es Goyobod",
        description: "Es tradisional Bandung dengan santan, alpukat & roti.",
        price: 22000,
        tags: ["baru"],
        tone: "minuman",
      },
    ],
  },
];

export const allItems: MenuItem[] = menu.flatMap((c) => c.items);

export const signatureItems: MenuItem[] = allItems.filter((i) => i.signature);
