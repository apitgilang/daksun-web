import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BatikField, SaungRoof, Ornament } from "@/components/brand/motifs";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-kanvas">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% -10%, rgba(200,144,42,0.22), transparent 60%), linear-gradient(160deg, #2a1410, #241712)",
        }}
      />
      <BatikField color="#E8B23C" opacity={0.06} />
      <SaungRoof className="absolute left-1/2 top-4 h-12 w-[min(520px,70%)] -translate-x-1/2 text-kencana/25" />

      <div className="container-x relative pb-16 pt-14 text-center sm:pb-20 sm:pt-20">
        <Reveal>
          <nav className="mb-6 flex items-center justify-center gap-1.5 text-xs text-kanvas/55" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-kencana">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-kanvas/80">{crumb}</span>
          </nav>
          <span className="text-xs font-bold uppercase tracking-brand text-kencana">{eyebrow}</span>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
            {title}
          </h1>
          <Ornament className="mt-6" />
          {intro && <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-kanvas/70">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}
