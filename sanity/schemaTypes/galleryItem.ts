import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";
import { toneField } from "./tone";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Galeri",
  type: "document",
  icon: ImagesIcon,
  fields: [
    defineField({ name: "caption", title: "Keterangan", type: "string", validation: (r) => r.required() }),
    defineField({ name: "image", title: "Foto", type: "image", options: { hotspot: true } }),
    defineField({
      name: "span",
      title: "Ukuran di Grid",
      type: "string",
      initialValue: "normal",
      options: {
        list: [
          { title: "Normal", value: "normal" },
          { title: "Tinggi", value: "tall" },
          { title: "Lebar", value: "wide" },
        ],
      },
    }),
    toneField,
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Urutan", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "caption", media: "image" } },
});
