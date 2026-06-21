// projectId & dataset are PUBLIC identifiers (they ship in the browser bundle),
// so we hardcode them as fallbacks. This is required by the hosted Sanity Studio
// build (`sanity deploy`), whose bundler does not read NEXT_PUBLIC_* env vars —
// without a fallback the deployed studio errors with "must contain projectId".
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "opjqkdpi";

/** A Sanity project is always configured (constant fallback above), so the site
 *  reads from the CMS; the data layer still falls back to local content on any
 *  fetch error. */
export const hasSanity = projectId.length > 0;
