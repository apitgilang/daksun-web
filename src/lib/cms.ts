import { cache } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import * as Q from "@/sanity/lib/queries";

import { site as localSettings } from "@/content/site";
import { branches as localBranches } from "@/content/branches";
import { menu as localMenu, signatureItems as localSignature } from "@/content/menu";
import { testimonials as localTestimonials } from "@/content/testimonials";
import { promos as localPromos } from "@/content/promos";
import { news as localNews } from "@/content/news";
import { eventSpaces as localEvents } from "@/content/events";
import { gallery as localGallery } from "@/content/gallery";

import type {
  Branch,
  EventSpace,
  GalleryItem,
  MenuCategory,
  MenuItem,
  NewsPost,
  Promo,
  SiteConfig,
  Testimonial,
} from "@/types/content";

const has = (arr: unknown): boolean => Array.isArray(arr) && arr.length > 0;

export const getSettings = cache(async (): Promise<SiteConfig> => {
  const data = await sanityFetch<SiteConfig>({ query: Q.settingsQuery, tags: ["siteSettings"] });
  return data?.name ? data : localSettings;
});

export const getBranches = cache(async (): Promise<Branch[]> => {
  const data = await sanityFetch<Branch[]>({ query: Q.branchesQuery, tags: ["branch"] });
  return has(data) ? (data as Branch[]) : localBranches;
});

export const getPrimaryBranch = cache(async (): Promise<Branch> => {
  const list = await getBranches();
  return list.find((b) => b.isPrimary) ?? list[0];
});

export const getBranch = cache(async (slug: string): Promise<Branch | null> => {
  const data = await sanityFetch<Branch>({
    query: Q.branchBySlugQuery,
    params: { slug },
    tags: ["branch"],
  });
  if (data?.id) return data;
  return localBranches.find((b) => b.id === slug) ?? null;
});

export const getBranchSlugs = cache(async (): Promise<string[]> => {
  const data = await sanityFetch<string[]>({ query: Q.branchSlugsQuery, tags: ["branch"] });
  return has(data) ? (data as string[]) : localBranches.map((b) => b.id);
});

export const getMenu = cache(async (): Promise<MenuCategory[]> => {
  const data = await sanityFetch<MenuCategory[]>({ query: Q.menuQuery, tags: ["menuCategory", "menuItem"] });
  return has(data) ? (data as MenuCategory[]) : localMenu;
});

export const getSignatureItems = cache(async (): Promise<MenuItem[]> => {
  const data = await sanityFetch<MenuItem[]>({ query: Q.signatureQuery, tags: ["menuItem"] });
  return has(data) ? (data as MenuItem[]) : localSignature;
});

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  const data = await sanityFetch<Testimonial[]>({ query: Q.testimonialsQuery, tags: ["testimonial"] });
  return has(data) ? (data as Testimonial[]) : localTestimonials;
});

export const getPromos = cache(async (): Promise<Promo[]> => {
  const data = await sanityFetch<Promo[]>({ query: Q.promosQuery, tags: ["promo"] });
  return has(data) ? (data as Promo[]) : localPromos;
});

export const getNews = cache(async (): Promise<NewsPost[]> => {
  const data = await sanityFetch<NewsPost[]>({ query: Q.newsQuery, tags: ["newsPost"] });
  return has(data) ? (data as NewsPost[]) : localNews;
});

export const getPost = cache(async (slug: string): Promise<NewsPost | null> => {
  const data = await sanityFetch<NewsPost>({
    query: Q.newsBySlugQuery,
    params: { slug },
    tags: ["newsPost"],
  });
  if (data?.id) return data;
  return localNews.find((p) => p.id === slug) ?? null;
});

export const getNewsSlugs = cache(async (): Promise<string[]> => {
  const data = await sanityFetch<string[]>({ query: Q.newsSlugsQuery, tags: ["newsPost"] });
  return has(data) ? (data as string[]) : localNews.map((p) => p.id);
});

export const getEvents = cache(async (): Promise<EventSpace[]> => {
  const data = await sanityFetch<EventSpace[]>({ query: Q.eventsQuery, tags: ["eventSpace"] });
  return has(data) ? (data as EventSpace[]) : localEvents;
});

export const getGallery = cache(async (): Promise<GalleryItem[]> => {
  const data = await sanityFetch<GalleryItem[]>({ query: Q.galleryQuery, tags: ["galleryItem"] });
  return has(data) ? (data as GalleryItem[]) : localGallery;
});
