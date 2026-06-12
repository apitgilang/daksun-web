import type { SchemaTypeDefinition } from "sanity";

import { siteSettings } from "./siteSettings";
import { branch } from "./branch";
import { menuCategory } from "./menuCategory";
import { menuItem } from "./menuItem";
import { testimonial } from "./testimonial";
import { promo } from "./promo";
import { newsPost } from "./newsPost";
import { eventSpace } from "./eventSpace";
import { galleryItem } from "./galleryItem";
import { partner } from "./partner";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  branch,
  menuCategory,
  menuItem,
  testimonial,
  promo,
  newsPost,
  eventSpace,
  galleryItem,
  partner,
];
