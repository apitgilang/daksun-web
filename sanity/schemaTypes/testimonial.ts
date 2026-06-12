import { defineField, defineType } from "sanity";
import { CommentIcon } from "@sanity/icons";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimoni",
  type: "document",
  icon: CommentIcon,
  fields: [
    defineField({ name: "name", title: "Nama", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Peran / Asal", type: "string" }),
    defineField({ name: "avatar", title: "Foto", type: "image", options: { hotspot: true } }),
    defineField({ name: "quote", title: "Kutipan", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      initialValue: 5,
      validation: (r) => r.required().min(1).max(5),
    }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Urutan", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "role", media: "avatar" } },
});
