import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Badge";
import { DishImage } from "@/components/ui/DishImage";
import { BatikField } from "@/components/brand/motifs";
import { getPromos } from "@/lib/cms";

export async function PromoStrip() {
  const promos = await getPromos();
  if (promos.length === 0) return null;
  const featured = promos[0];
  const rest = promos.slice(1, 3);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-5">
          {/* featured */}
          <Reveal className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-ink p-8 text-kanvas shadow-lifted sm:p-10">
              <BatikField color="#E8B23C" opacity={0.08} />
              <div className="relative flex h-full flex-col">
                <Pill className="border-kencana/40 bg-kencana/15 text-kencana">
                  <Sparkles className="h-3.5 w-3.5" /> {featured.badge}
                </Pill>
                <h3 className="mt-5 max-w-md font-display text-3xl leading-tight sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-md text-kanvas/70">{featured.description}</p>
                <Link
                  href="/promo"
                  className="group mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-kencana px-6 py-3 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-kencana-bright"
                >
                  Lihat Semua Promo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="pointer-events-none absolute -bottom-10 -right-8 h-56 w-56 rotate-6 opacity-90">
                <DishImage tone={featured.tone} src={featured.image} alt={featured.title} emblem className="h-full w-full rounded-[2rem]" />
              </div>
            </div>
          </Reveal>

          {/* secondary */}
          <div className="grid gap-6 lg:col-span-2">
            {rest.map((p, i) => (
              <Reveal key={p.id} delay={0.1 + i * 0.08} className="h-full">
                <Link
                  href="/promo"
                  className="group flex h-full items-center gap-5 overflow-hidden rounded-[1.6rem] border border-kanvas-300/70 bg-white/75 p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted"
                >
                  <DishImage tone={p.tone} src={p.image} alt={p.title} emblem={false} className="h-20 w-20 shrink-0 rounded-2xl" />
                  <div>
                    <Pill className="mb-1.5">{p.badge}</Pill>
                    <h4 className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-merah">
                      {p.title}
                    </h4>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
