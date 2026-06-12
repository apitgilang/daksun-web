import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";
import { toneField } from "./tone";

export const eventSpace = defineType({
  name: "eventSpace",
  title: "Ruang Acara",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({ name: "name", title: "Nama Ruang", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "capacity",
      title: "Kapasitas (tamu)",
      type: "number",
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "suitableFor",
      title: "Cocok Untuk",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
    defineField({ name: "images", title: "Galeri Foto", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "packageSummary", title: "Ringkasan Paket", type: "text", rows: 2 }),
    defineField({ name: "branch", title: "Cabang Penyelenggara", type: "reference", to: [{ type: "branch" }], weak: true }),
    toneField,
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Kapasitas", name: "cap", by: [{ field: "capacity", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "capacity" }, prepare: ({ title, subtitle }) => ({ title, subtitle: `${subtitle} tamu` }) },
});
