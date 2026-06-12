import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Badge";
import { DishImage } from "@/components/ui/DishImage";
import { formatTanggal } from "@/lib/format";
import { getNews } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Berita",
  description: "Kabar terbaru dari Dadakan Sunda — pembukaan cabang, cerita dapur, dan budaya Sunda.",
};

export default async function BeritaPage() {
  const news = await getNews();
  const [featured, ...rest] = news;
  return (
    <>
      <PageHero
        crumb="Berita"
        eyebrow="Kabar & Cerita"
        title="Berita Dadakan Sunda"
        intro="Cerita dari dapur, kabar cabang baru, dan secuil budaya Sunda yang kami cintai."
      />
      <div className="container-x py-16 sm:py-20">
        {/* featured */}
        <Reveal>
          <Link
            href={`/berita/${featured.id}`}
            className="group grid overflow-hidden rounded-[2rem] border border-kanvas-300/70 bg-white/75 shadow-soft transition-all hover:shadow-lifted md:grid-cols-2"
          >
            <DishImage tone={featured.tone} src={featured.image} alt={featured.title} emblem className="h-56 w-full md:h-full" />
            <div className="flex flex-col p-8 sm:p-10">
              <Pill className="w-fit">{featured.category}</Pill>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink transition-colors group-hover:text-merah sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-3 flex-1 text-ink-soft">{featured.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm text-ink-muted">
                  <CalendarDays className="h-4 w-4" /> {formatTanggal(featured.date)}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-merah">
                  Baca <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* rest */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08} className="h-full">
              <Link
                href={`/berita/${post.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-kanvas-300/70 bg-white/75 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted"
              >
                <DishImage tone={post.tone} src={post.image} alt={post.title} emblem className="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-6">
                  <Pill className="w-fit">{post.category}</Pill>
                  <h3 className="mt-3 font-display text-xl leading-snug text-ink transition-colors group-hover:text-merah">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs text-ink-muted">
                    <CalendarDays className="h-3.5 w-3.5" /> {formatTanggal(post.date)}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
