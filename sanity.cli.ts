import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./src/sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  // Hosted studio at https://dadakansunda.sanity.studio — skips the hostname prompt.
  studioHost: "dadakansunda",
  // Pin the deployed studio to the version we build/test locally (v3) instead of
  // auto-serving the latest (v4) — stable, and avoids the version-mismatch prompt.
  autoUpdates: false,
});
