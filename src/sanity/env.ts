export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/** True only when a Sanity project is configured. Used to gate CMS access and
 *  fall back to local placeholder content otherwise. */
export const hasSanity = projectId.length > 0;
