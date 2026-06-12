import type { Metadata } from "next";
import { Check, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Badge";
import { DishImage } from "@/components/ui/DishImage";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { formatTanggal } from "@/lib/format";
import { getPromos } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Promo",
  description: "Promo spesial Dadakan Sunda — paket hemat, diskon ulang tahun, dan kejutan setiap minggu.",
};

export default async function PromoPage() {
  const promos = await getPromos();
  return (
    <>
      <PageHero
        crumb="Promo"
        eyebrow="Penawaran Spesial"
        title="Promo Dadakan Sunda"
        intro="Lebih hemat, lebih bahagia. Tunjukkan promo ini saat memesan lewat WhatsApp atau di kasir."
      />
      <div className="container-x py-16 sm:py-20">
        <div className="space-y-8">
          {promos.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <article className="grid overflow-hidden rounded-[2rem] border border-kanvas-300/70 bg-white/75 shadow-soft md:grid-cols-5">
                <div className="relative md:col-span-2">
                  <DishImage tone={p.tone} src={p.image} alt={p.title} emblem className="h-48 w-full md:h-full" />
                  {p.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1.5 text-xs font-bold text-kencana backdrop-blur">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-col p-7 md:col-span-3 sm:p-9">
                  <h2 className="font-display text-2xl text-ink sm:text-3xl">{p.title}</h2>
                  <p className="mt-3 text-ink-soft">{p.description}</p>

                  {p.terms && (
                    <ul className="mt-5 space-y-2">
                      {p.terms.map((t) => (
                        <li key={t} className="flex items-center gap-2 text-sm text-ink-soft">
                          <Check className="h-4 w-4 shrink-0 text-daun" /> {t}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-kanvas-300/70 pt-5">
                    {p.endsAt && (
                      <Pill>
                        <CalendarClock className="h-3.5 w-3.5" /> Berlaku s/d {formatTanggal(p.endsAt)}
                      </Pill>
                    )}
                    <WhatsAppButton kind="generic" label="Klaim via WhatsApp" variant="whatsapp" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
