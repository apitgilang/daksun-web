import type { Metadata, Viewport } from "next";
import { Playfair_Display, Karla } from "next/font/google";
import "./globals.css";
import { getSettings } from "@/lib/cms";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSettings();
  return {
    metadataBase: new URL("https://dadakansunda.id"),
    title: {
      default: `${s.name} — Masakan Sunda Dimasak Dadakan`,
      template: `%s · ${s.name}`,
    },
    description: s.description,
    keywords: ["restoran sunda", "masakan sunda", "rumah makan sunda", "nasi timbel", "bakakak ayam", "dadakan sunda"],
    openGraph: {
      title: `${s.name} — Masakan Sunda Dimasak Dadakan`,
      description: s.description,
      type: "website",
      locale: "id_ID",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#C8161D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${karla.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
