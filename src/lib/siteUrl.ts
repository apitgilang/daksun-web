/**
 * Canonical public site URL, used for metadataBase, sitemap, robots, and OG tags.
 * Override per-environment with NEXT_PUBLIC_SITE_URL (no trailing slash); falls
 * back to the production domain so builds work with no env configured.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://dadakansunda.net"
).replace(/\/$/, "");
