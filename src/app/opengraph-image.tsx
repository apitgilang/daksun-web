import { ImageResponse } from "next/og";
import { getSettings } from "@/lib/cms";

export const alt = "Dadakan Sunda — Masakan Sunda Dimasak Dadakan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded fallback share image used for link previews across the site. */
export default async function OgImage() {
  const s = await getSettings();
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "#F7F1E6",
          background:
            "radial-gradient(80% 60% at 80% 0%, rgba(200,144,42,0.30), transparent 55%), radial-gradient(70% 60% at 0% 100%, rgba(200,22,29,0.35), transparent 55%), linear-gradient(160deg, #2a1410, #241712 55%, #1a0f0c)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#E8B23C",
            fontWeight: 700,
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#E8B23C" }} />
          Wilujeng Sumping
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, lineHeight: 1.05, marginTop: 28 }}>
          {s.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "rgba(247,241,230,0.8)", marginTop: 24, maxWidth: 900 }}>
          {s.tagline || "Masakan Sunda, dimasak dadakan — segar & hangat."}
        </div>
      </div>
    ),
    { ...size },
  );
}
