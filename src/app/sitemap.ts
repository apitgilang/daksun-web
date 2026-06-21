import type { MetadataRoute } from "next";
import { getBranchSlugs, getNews } from "@/lib/cms";
import { siteUrl } from "@/lib/siteUrl";

/** Static top-level routes (lowercase Indonesian slugs). */
const STATIC_PATHS = [
  "", "menu", "cabang", "tentang", "galeri", "promo", "berita", "acara", "kemitraan", "kontak",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [branchSlugs, news] = await Promise.all([getBranchSlugs(), getNews()]);

  // trailingSlash:true is enabled, so canonical URLs end with "/".
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: path === "" ? `${siteUrl}/` : `${siteUrl}/${path}/`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const branchEntries: MetadataRoute.Sitemap = branchSlugs.map((slug) => ({
    url: `${siteUrl}/cabang/${slug}/`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const newsEntries: MetadataRoute.Sitemap = news.map((post) => ({
    url: `${siteUrl}/berita/${post.id}/`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...branchEntries, ...newsEntries];
}
