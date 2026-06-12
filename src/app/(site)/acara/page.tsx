import type { Metadata } from "next";
import { Users, PartyPopper, UtensilsCrossed, Music } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { DishImage } from "@/components/ui/DishImage";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getEvents } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Acara & Sewa Tempat",
  description:
    "Rayakan momen spesial Anda di Dadakan Sunda — saung keluarga, aula, hingga pelataran botram untuk acara besar.",
};

const perks = [
  { icon: UtensilsCrossed, title: "Katering Sunda", desc: "Paket prasmanan & nasi box dengan cita rasa dadakan." },
  { icon: Users, title: "Kapasitas Fleksibel", desc: "Dari arisan intim hingga resepsi 150 tamu." },
  { icon: Music, title: "Fasilitas Lengkap", desc: "Sound system, panggung, dan area parkir luas." },
  { icon: PartyPopper, title: "Dekorasi Tematik", desc: "Nuansa saung & pesawahan yang autentik dan hangat." },
];

export default async function AcaraPage() {
  const eventSpaces = await getEvents();
  return (
    <>
      <PageHero
        crumb="Acara"
        eyebrow="Sewa Tempat & Katering"
        title="Rayakan momen di saung kami"
        intro="Ulang tahun, arisan, gathering kantor, hingga resepsi — kami siapkan tempat, hidangan, dan kehangatan khas Sunda."
      />

      {/* perks */}
      <Section className="pb-0">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-kanvas-300/70 bg-white/70 p-6 text-center shadow-soft">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-kencana/15 text-kencana-700">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* spaces */}
      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Pilihan Ruang"
            title={<>Tempat untuk setiap perayaan</>}
            intro="Pilih ruang yang paling pas dengan acara dan jumlah tamu Anda."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {eventSpaces.map((space, i) => (
              <Reveal key={space.id} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-kanvas-300/70 bg-white/75 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted">
                  <div className="relative">
                    <DishImage tone={space.tone} src={space.image} alt={space.name} emblem className="aspect-[16/10]" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 text-xs font-bold text-kencana backdrop-blur">
                      <Users className="h-3.5 w-3.5" /> s/d {space.capacity} tamu
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl text-ink">{space.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink-soft">{space.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(space.suitableFor ?? []).map((s) => (
                        <span key={s} className="rounded-full bg-kanvas-200 px-3 py-1 text-xs font-semibold text-ink-soft">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5">
                      <WhatsAppButton kind="event" label="Tanya Ketersediaan" fullWidth variant="whatsapp" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-ink py-16 text-kanvas">
        <div className="container-x relative flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-2xl font-display text-3xl sm:text-4xl">
            Punya tanggal acara? Mari kita siapkan bersama.
          </h2>
          <p className="max-w-md text-kanvas/70">
            Tim kami akan membantu merancang menu dan tata ruang sesuai kebutuhan Anda.
          </p>
          <WhatsAppButton kind="event" label="Konsultasi Acara via WhatsApp" size="lg" variant="whatsapp" />
        </div>
      </section>
    </>
  );
}
