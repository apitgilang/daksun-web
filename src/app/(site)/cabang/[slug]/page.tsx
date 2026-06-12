import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, MapPin, Phone, ArrowLeft } from "lucide-react";
import { getBranch, getBranchSlugs, getSignatureItems } from "@/lib/cms";
import { DishImage } from "@/components/ui/DishImage";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { MapsButton } from "@/components/ui/MapsButton";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { Ornament } from "@/components/brand/motifs";

export async function generateStaticParams() {
  const slugs = await getBranchSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const branch = await getBranch(params.slug);
  if (!branch) return { title: "Cabang tidak ditemukan" };
  return {
    title: branch.name,
    description: `Dadakan Sunda ${branch.name} — ${branch.address}. Buka ${branch.hours}. Pesan & reservasi via WhatsApp.`,
  };
}

export default async function BranchDetailPage({ params }: { params: { slug: string } }) {
  const [branch, signatureItems] = await Promise.all([getBranch(params.slug), getSignatureItems()]);
  if (!branch) notFound();

  const info = [
    { icon: MapPin, label: "Alamat", value: branch.address },
    { icon: Clock, label: "Jam Buka", value: branch.hours },
    { icon: Phone, label: "Telepon", value: branch.phone, href: `tel:${branch.phone.replace(/\s/g, "")}` },
  ];

  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-ink text-kanvas">
        <DishImage tone={branch.tone} src={branch.image} alt={branch.name} emblem className="absolute inset-0 h-full w-full opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div className="container-x relative pb-14 pt-14 sm:pb-16 sm:pt-20">
          <Link
            href="/cabang"
            className="inline-flex items-center gap-2 text-sm text-kanvas/70 transition-colors hover:text-kencana"
          >
            <ArrowLeft className="h-4 w-4" /> Semua Cabang
          </Link>
          <span className="mt-6 block text-xs font-bold uppercase tracking-brand text-kencana">
            Cabang {branch.city}
          </span>
          <h1 className="mt-2 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            {branch.name}
          </h1>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppButton kind="reservation" branchOverride={branch} label="Reservasi Meja" variant="whatsapp" />
            <MapsButton url={branch.mapsUrl} label="Petunjuk Arah" className="border-kanvas/25 bg-kanvas/5 text-kanvas hover:text-kencana" />
          </div>
        </div>
      </section>

      {/* info cards */}
      <div className="container-x py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {info.map((row, i) => (
            <Reveal key={row.label} delay={i * 0.06}>
              <div className="flex h-full gap-4 rounded-3xl border border-kanvas-300/70 bg-white/75 p-6 shadow-soft">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-merah/10 text-merah">
                  <row.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">{row.label}</p>
                  {row.href ? (
                    <a href={row.href} className="mt-1 block font-medium text-ink hover:text-merah">
                      {row.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium text-ink">{row.value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* signature at this branch */}
        <div className="mt-20">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-brand text-kencana">Wajib Dicoba</p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                Andalan di {branch.city}
              </h2>
              <Ornament className="mt-5" />
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {signatureItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06} className="h-full">
                <MenuItemCard item={item} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-merah hover:text-merah"
            >
              Lihat menu lengkap
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
