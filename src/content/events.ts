import type { EventSpace } from "@/types/content";

// NOTE: placeholder event spaces — replace via Sanity.
export const eventSpaces: EventSpace[] = [
  {
    id: "saung-keluarga",
    name: "Saung Keluarga",
    capacity: 20,
    suitableFor: ["Arisan", "Ulang Tahun", "Syukuran"],
    description:
      "Saung lesehan yang hangat dan privat, cocok untuk acara keluarga kecil dengan suasana akrab khas Sunda.",
    tone: "sayur",
  },
  {
    id: "aula-sampurasun",
    name: "Aula Sampurasun",
    capacity: 80,
    suitableFor: ["Gathering Kantor", "Reuni", "Seminar"],
    description:
      "Ruang serbaguna ber-AC dengan kapasitas besar, lengkap dengan sound system dan area panggung.",
    tone: "ayam",
  },
  {
    id: "pelataran-botram",
    name: "Pelataran Botram",
    capacity: 150,
    suitableFor: ["Resepsi", "Festival", "Acara Komunitas"],
    description:
      "Area terbuka semi-outdoor yang luas dengan nuansa pesawahan, ideal untuk perayaan besar dan botram bareng.",
    tone: "nasi",
  },
];
