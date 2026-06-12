import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
import { toneField } from "./tone";

export const newsPost = defineType({
  name: "newsPost",
  title: "Berita",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: "title", title: "Judul", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "date", title: "Tanggal", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Kategori", type: "string" }),
    defineField({ name: "excerpt", title: "Ringkasan", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "coverImage", title: "Gambar Sampul", type: "image", options: { hotspot: true } }),
    defineField({
      name: "body",
      title: "Isi Artikel",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({ name: "author", title: "Penulis", type: "string" }),
    toneField,
  ],
  orderings: [{ title: "Terbaru", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
});
