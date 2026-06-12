import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Pengaturan Situs",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({ name: "name", title: "Nama", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Deskripsi (SEO)", type: "text", rows: 3 }),
    defineField({
      name: "defaultWhatsApp",
      title: "WhatsApp Default (E.164)",
      type: "string",
      description: "Hanya angka, mis. 6281200000000",
      validation: (r) => r.regex(/^[0-9]{8,15}$/, { name: "nomor E.164" }),
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "hours", title: "Jam Buka (global)", type: "string" }),
    defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
    defineField({ name: "tiktok", title: "TikTok URL", type: "url" }),
    defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
    defineField({ name: "ogImage", title: "Gambar Share Default", type: "image" }),
  ],
  preview: { prepare: () => ({ title: "Pengaturan Situs" }) },
});
