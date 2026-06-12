import { client } from "./client";

/**
 * Thin GROQ fetch wrapper. Attaches Next cache tags so the /api/revalidate
 * webhook can invalidate specific content on publish. Returns null when Sanity
 * is not configured (callers fall back to local placeholder data).
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  revalidate = 30,
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
  revalidate?: number;
}): Promise<T | null> {
  if (!client) return null;
  try {
    // Time-based revalidate (fallback) + cache tags (instant on-demand via the
    // webhook in production). Both are honored — never cache indefinitely, or
    // edits never appear without a webhook.
    return await client.fetch<T>(query, params, {
      next: { revalidate, tags },
    });
  } catch (err) {
    console.error("[sanityFetch] failed:", err);
    return null;
  }
}
