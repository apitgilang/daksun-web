import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const partner = defineType({
  name: "partner",
  title: "Mitra",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({ name: "name", title: "Nama Mitra", type: "string", validation: (r) => r.required() }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Urutan", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", media: "logo" } },
});
