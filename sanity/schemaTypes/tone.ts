import { defineField } from "sanity";

/** Shared "tone" field — drives the warm gradient placeholder when no photo is set. */
export const toneField = defineField({
  name: "tone",
  title: "Tone Warna (untuk placeholder)",
  type: "string",
  description: "Dipakai untuk gradien placeholder bila foto belum diunggah.",
  initialValue: "default",
  options: {
    list: [
      { title: "Ayam (amber)", value: "ayam" },
      { title: "Ikan (cokelat)", value: "ikan" },
      { title: "Sayur (hijau)", value: "sayur" },
      { title: "Nasi (emas)", value: "nasi" },
      { title: "Sambal (merah)", value: "sambal" },
      { title: "Minuman (toska)", value: "minuman" },
      { title: "Daging (cokelat tua)", value: "daging" },
      { title: "Tahu/Tempe (kuning)", value: "tahu" },
      { title: "Default", value: "default" },
    ],
    layout: "dropdown",
  },
});

export const menuTagOptions = [
  { title: "Favorit", value: "favorit" },
  { title: "Rekomendasi", value: "rekomendasi" },
  { title: "Pedas", value: "pedas" },
  { title: "Halal", value: "halal" },
  { title: "Baru", value: "baru" },
];
