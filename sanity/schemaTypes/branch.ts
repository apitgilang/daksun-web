import { defineField, defineType } from "sanity";
import { PinIcon } from "@sanity/icons";
import { toneField } from "./tone";

export const branch = defineType({
  name: "branch",
  title: "Cabang",
  type: "document",
  icon: PinIcon,
  fields: [
    defineField({ name: "name", title: "Nama Cabang", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "city", title: "Kota", type: "string", validation: (r) => r.required() }),
    defineField({ name: "address", title: "Alamat", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "hours", title: "Jam Buka", type: "string", initialValue: "10.00 – 22.00 WIB" }),
    defineField({ name: "phone", title: "Telepon", type: "string" }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp (E.164)",
      type: "string",
      description: "Hanya angka, mis. 6281200000001",
      validation: (r) => r.required().regex(/^[0-9]{8,15}$/, { name: "nomor E.164" }),
    }),
    defineField({ name: "mapsUrl", title: "Google Maps URL", type: "url", validation: (r) => r.required() }),
    defineField({
      name: "coords",
      title: "Koordinat",
      type: "object",
      fields: [
        defineField({ name: "lat", type: "number", title: "Latitude" }),
        defineField({ name: "lng", type: "number", title: "Longitude" }),
      ],
      options: { collapsible: true, collapsed: true },
    }),
    defineField({ name: "image", title: "Foto Cabang", type: "image", options: { hotspot: true } }),
    toneField,
    defineField({ name: "isPrimary", title: "Cabang Utama (default)", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Urutan", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "city", media: "image" },
  },
});
