import Link from "next/link";
import { Home, UtensilsCrossed } from "lucide-react";
import { SaungRoof, BatikField } from "@/components/brand/motifs";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink text-kanvas">
      <BatikField color="#E8B23C" opacity={0.06} />
      <div className="container-x relative text-center">
        <SaungRoof className="mx-auto h-16 w-72 text-kencana/40" />
        <p className="mt-6 font-display text-7xl text-kencana sm:text-8xl">404</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl">Aduh, halamanna teu kapendak</h1>
        <p className="mx-auto mt-4 max-w-md text-kanvas/70">
          Halaman yang Anda cari tidak ditemukan. Mungkin sudah pindah, atau salah ketik. Mangga,
          mari kembali ke beranda.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-kencana px-6 py-3 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-kencana-bright"
          >
            <Home className="h-4 w-4" /> Ka Beranda
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-kanvas/25 px-6 py-3 text-sm font-semibold text-kanvas transition-colors hover:border-kencana hover:text-kencana"
          >
            <UtensilsCrossed className="h-4 w-4" /> Lihat Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
