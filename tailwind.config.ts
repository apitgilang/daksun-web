import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm paper canvas — rooted in bamboo, rattan & banana-leaf tones
        kanvas: {
          DEFAULT: "#FBF6EC",
          50: "#FDFBF5",
          100: "#FBF6EC",
          200: "#F4E9D4",
          300: "#EBD9BC",
          400: "#DFC79E",
        },
        // Deep cocoa ink
        ink: {
          DEFAULT: "#241712",
          soft: "#5A4636",
          muted: "#8A7460",
        },
        // Brand crimson (the DS monogram red)
        merah: {
          50: "#FDF2F2",
          100: "#FCE3E3",
          200: "#F7C2C3",
          300: "#EE9092",
          400: "#DF4B4F",
          500: "#C8161D",
          600: "#A8121A",
          700: "#860E15",
          800: "#5F0B10",
          900: "#43090C",
          DEFAULT: "#C8161D",
        },
        // Saung-roof gold
        kencana: {
          50: "#FCF6E7",
          100: "#F8EBC4",
          200: "#F0D589",
          300: "#E6BC4E",
          400: "#DCA62F",
          500: "#C8902A",
          600: "#A6741F",
          700: "#7F571A",
          800: "#5B3F14",
          DEFAULT: "#C8902A",
          bright: "#E8B23C",
        },
        // Lalapan green — freshness accents
        daun: {
          DEFAULT: "#2F4A3A",
          soft: "#496B53",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-karla)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(36,23,18,0.08), 0 8px 24px -6px rgba(36,23,18,0.10)",
        lifted: "0 8px 24px -8px rgba(36,23,18,0.18), 0 24px 64px -24px rgba(36,23,18,0.20)",
        glow: "0 10px 40px -10px rgba(200,22,29,0.45)",
        gold: "0 10px 40px -12px rgba(200,144,42,0.55)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        brand: "0.28em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        steam: {
          "0%": { opacity: "0", transform: "translateY(0) scaleX(1)" },
          "50%": { opacity: "0.6" },
          "100%": { opacity: "0", transform: "translateY(-28px) scaleX(1.6)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2.2s infinite",
        steam: "steam 3.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
