// Shapes mirror the Sanity schemas in docs/content-model.md.
// For now these are fed by local placeholder data in src/content/*.
// Swapping to Sanity later means replacing the data source, not these types.

export type ID = string;

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  defaultWhatsApp: string; // E.164 digits only
  email: string;
  hours: string;
  socials: { instagram?: string; tiktok?: string; facebook?: string };
}

export interface Branch {
  id: ID;
  name: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
  whatsapp: string;
  mapsUrl: string;
  tone: string; // gradient key for placeholder imagery
  isPrimary?: boolean;
  image?: string | null; // Sanity photo URL (overrides placeholder)
}

export type MenuTag = "favorit" | "pedas" | "halal" | "baru" | "rekomendasi";

export interface MenuItem {
  id: ID;
  name: string;
  description?: string;
  price: number; // IDR
  tags?: MenuTag[];
  availableAt?: ID[]; // branch ids; empty = all
  signature?: boolean;
  tone: string;
  image?: string | null;
}

export interface MenuCategory {
  id: ID;
  name: string;
  sundanese?: string;
  description?: string;
  items: MenuItem[];
}

export interface Testimonial {
  id: ID;
  name: string;
  role?: string;
  quote: string;
  rating: number;
  image?: string | null;
}

export interface Promo {
  id: ID;
  title: string;
  description: string;
  badge?: string;
  startsAt?: string;
  endsAt?: string;
  terms?: string[];
  tone: string;
  image?: string | null;
}

/** Article body: local placeholder uses string paragraphs; Sanity uses Portable Text blocks. */
export type NewsBlock = string | { _type: string; [key: string]: unknown };

export interface NewsPost {
  id: ID;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  body: NewsBlock[];
  tone: string;
  author?: string;
  image?: string | null;
}

export interface EventSpace {
  id: ID;
  name: string;
  capacity: number;
  suitableFor: string[];
  description: string;
  tone: string;
  packageSummary?: string;
  image?: string | null;
}

export interface WhyPoint {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: ID;
  caption: string;
  tone: string;
  span?: "tall" | "wide" | "normal";
  image?: string | null;
}
