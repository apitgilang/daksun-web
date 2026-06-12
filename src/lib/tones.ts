// Warm, appetizing gradients used for art-directed placeholder imagery,
// keyed by dish/category "tone". Replace placeholders with real photos via Sanity.

export interface Tone {
  from: string;
  to: string;
  ring: string;
}

export const tones: Record<string, Tone> = {
  ayam: { from: "#E8A23C", to: "#9E5118", ring: "#FBE2B0" },
  ikan: { from: "#C39A5E", to: "#5E4632", ring: "#EBD9BC" },
  sayur: { from: "#6FA368", to: "#2F4A3A", ring: "#CDE3C2" },
  nasi: { from: "#E9CE8E", to: "#B07F2E", ring: "#F6E9C4" },
  sambal: { from: "#E0552E", to: "#9E1410", ring: "#F6C0A6" },
  minuman: { from: "#5FAE9E", to: "#23564E", ring: "#BEE6DC" },
  daging: { from: "#A85E33", to: "#5A2E18", ring: "#E5C2A6" },
  tahu: { from: "#E6C77A", to: "#9E6F2A", ring: "#F4E3B6" },
  default: { from: "#D8A24A", to: "#8A5A24", ring: "#F2DCAE" },
};

export function getTone(key?: string): Tone {
  return tones[key ?? "default"] ?? tones.default;
}
