import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";
import { toneField } from "./tone";

export const promo = defineType({
  name: "promo",
  title: "Promo",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({ name: "title", title: "Judul", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "badge", title: "Badge (mis. Hemat 20%)", type: "string" }),
    defineField({ name: "image", title: "Gambar", type: "image", options: { hotspot: true } }),
    defineField({ name: "startsAt", title: "Mulai", type: "datetime" }),
    defineField({ name: "endsAt", title: "Berakhir", type: "datetime" }),
    defineField({ name: "terms", title: "Syarat & Ketentuan", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "branches",
      title: "Khusus Cabang",
      type: "array",
      of: [{ type: "reference", to: [{ type: "branch" }], weak: true }],
      description: "Kosongkan untuk semua cabang.",
    }),
    toneField,
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Urutan", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "badge", media: "image" } },
});
