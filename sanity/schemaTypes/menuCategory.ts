import { defineField, defineType } from "sanity";
import { TagsIcon } from "@sanity/icons";

export const menuCategory = defineType({
  name: "menuCategory",
  title: "Kategori Menu",
  type: "document",
  icon: TagsIcon,
  fields: [
    defineField({ name: "name", title: "Nama Kategori", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "sundanese", title: "Istilah Sunda", type: "string" }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 2 }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Urutan", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "sundanese" } },
});
