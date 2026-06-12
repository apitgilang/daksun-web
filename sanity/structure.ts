import type { StructureResolver } from "sanity/structure";

const SINGLETONS = ["siteSettings"];

/** Custom desk: siteSettings is a single editable document, the rest are lists. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Konten Dadakan Sunda")
    .items([
      S.listItem()
        .title("Pengaturan Situs")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("branch").title("Cabang"),
      S.documentTypeListItem("menuCategory").title("Kategori Menu"),
      S.documentTypeListItem("menuItem").title("Item Menu"),
      S.documentTypeListItem("promo").title("Promo"),
      S.documentTypeListItem("newsPost").title("Berita"),
      S.documentTypeListItem("eventSpace").title("Ruang Acara"),
      S.documentTypeListItem("testimonial").title("Testimoni"),
      S.documentTypeListItem("galleryItem").title("Galeri"),
      S.documentTypeListItem("partner").title("Mitra"),
    ]);

export const singletonActions = new Set(["publish", "discardChanges", "restore"]);
export const singletonTypes = new Set(SINGLETONS);
