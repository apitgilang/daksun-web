import { defineField, defineType } from "sanity";
import { BookmarkIcon } from "@sanity/icons";
import { toneField, menuTagOptions } from "./tone";

export const menuItem = defineType({
  name: "menuItem",
  title: "Item Menu",
  type: "document",
  icon: BookmarkIcon,
  fields: [
    defineField({ name: "name", title: "Nama Hidangan", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "reference",
      to: [{ type: "menuCategory" }],
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 2 }),
    defineField({
      name: "price",
      title: "Harga (Rupiah)",
      type: "number",
      description: "Angka saja, mis. 45000",
      validation: (r) => r.required().min(0),
    }),
    defineField({ name: "image", title: "Foto", type: "image", options: { hotspot: true } }),
    defineField({
      name: "tags",
      title: "Label",
      type: "array",
      of: [{ type: "string" }],
      options: { list: menuTagOptions },
    }),
    defineField({
      name: "availableAt",
      title: "Tersedia di Cabang",
      type: "array",
      of: [{ type: "reference", to: [{ type: "branch" }], weak: true }],
      description: "Kosongkan jika tersedia di semua cabang.",
    }),
    defineField({ name: "signature", title: "Hidangan Andalan?", type: "boolean", initialValue: false }),
    toneField,
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Urutan", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "category.name", media: "image" },
  },
});
