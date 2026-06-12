import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { getNews, getNewsSlugs, getPost } from "@/lib/cms";
import { DishImage } from "@/components/ui/DishImage";
import { NewsBody } from "@/components/ui/NewsBody";
import { Pill } from "@/components/ui/Badge";
import { Ornament } from "@/components/brand/motifs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { formatTanggal } from "@/lib/format";

export async function generateStaticParams() {
  const slugs = await getNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Berita tidak ditemukan" };
  return { title: post.title, description: post.excerpt };
}

export default async function BeritaDetailPage({ params }: { params: { slug: string } }) {
  const [post, allNews] = await Promise.all([getPost(params.slug), getNews()]);
  if (!post) notFound();

  const others = allNews.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <article className="pb-8">
      {/* hero */}
      <header className="relative overflow-hidden bg-ink text-kanvas">
        <DishImage tone={post.tone} src={post.image} alt={post.title} emblem className="absolute inset-0 h-full w-full opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />
        <div className="container-x relative max-w-3xl pb-14 pt-14 text-center sm:pb-16 sm:pt-20">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm text-kanvas/70 transition-colors hover:text-kencana"
          >
            <ArrowLeft className="h-4 w-4" /> Semua Berita
          </Link>
          <div className="mt-6 flex justify-center">
            <Pill className="border-kencana/40 bg-kencana/15 text-kencana">{post.category}</Pill>
          </div>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-kanvas/70">
            <CalendarDays className="h-4 w-4 text-kencana" /> {formatTanggal(post.date)}
          </p>
        </div>
      </header>

      {/* body */}
      <div className="container-x max-w-2xl py-14 sm:py-16">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p className="font-display text-2xl leading-snug text-ink">{post.excerpt}</p>
          <NewsBody body={post.body} />
        </div>

        <Ornament className="my-12" />

        <div className="flex flex-col items-center gap-4 rounded-3xl border border-kencana/20 bg-gradient-to-br from-white/80 to-kanvas-200/50 p-8 text-center">
          <h2 className="font-display text-2xl text-ink">Lapar setelah membaca?</h2>
          <WhatsAppButton kind="generic" label="Pesan via WhatsApp" variant="whatsapp" />
        </div>
      </div>

      {/* others */}
      <div className="container-x max-w-4xl">
        <h2 className="font-display text-2xl text-ink">Baca juga</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.id}
              href={`/berita/${p.id}`}
              className="group flex gap-4 rounded-3xl border border-kanvas-300/70 bg-white/75 p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted"
            >
              <DishImage tone={p.tone} src={p.image} alt={p.title} emblem={false} className="h-20 w-20 shrink-0 rounded-2xl" />
              <div>
                <Pill className="mb-1.5">{p.category}</Pill>
                <h3 className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-merah">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
