/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` emits plain HTML/CSS/JS into ./out for upload to
  // any shared host (Rumahweb cPanel). No Node server runs in production.
  output: "export",
  // Each route becomes a folder + index.html so Apache resolves /menu/ → /menu/index.html.
  trailingSlash: true,
  compiler: { styledComponents: true },
  images: {
    // Static export has no Image Optimization server; load images directly.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
