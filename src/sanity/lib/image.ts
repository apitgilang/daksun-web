import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, hasSanity, projectId } from "../env";

const builder = hasSanity ? imageUrlBuilder({ projectId, dataset }) : null;

/** Build an optimized image URL from a Sanity image source, or null if unset. */
export function urlForImage(source?: SanityImageSource | null): string | null {
  if (!builder || !source) return null;
  try {
    return builder.image(source).auto("format").fit("max").url();
  } catch {
    return null;
  }
}
