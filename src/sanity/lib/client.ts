import { createClient } from "@sanity/client";
import { apiVersion, dataset, hasSanity, projectId } from "../env";

/** Sanity read client — null until a project is configured (env-gated). */
export const client = hasSanity
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // Fresh reads from the API so published edits show up promptly. Flip to
      // `true` in production for CDN performance once the revalidate webhook is set.
      useCdn: false,
      perspective: "published",
    })
  : null;
