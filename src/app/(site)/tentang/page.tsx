import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { DishImage } from "@/components/ui/DishImage";
import { Ornament, BatikField } from "@/components/brand/motifs";
import { CTASection } from "@/components/home/CTASection";
import { stats, whyPoints } from "@/content/why";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kisah Dadakan Sunda — restoran Sunda yang menolak memanaskan ulang. Semua dimasak dadakan demi rasa rumah yang autentik.",
};

const steps = [
  {
    no: "01",
    title: "Dipilih Segar",
    desc: "Ayam kampung, ikan, dan sayuran dipilih segar setiap pagi dari pasar lokal.",
  },
  {
    no: "02",
    title: "Diolah Dadakan",
    desc: "Begitu pesanan masuk, dapur mulai memasak. Sambal diulek di cobek batu, bukan blender.",
  },
  {
    no: "03",
    title: "Disajikan Haneut",
    desc: "Hidangan tiba di meja Anda dalam keadaan hangat mengepul — seperti baru matang.",
  },
];

export default function TentangPage() {
  return (
    <>
      <PageHero
        crumb="Tentang"
        eyebrow="Carita Urang"
        title="Menjaga rasa asli Tatar Sunda"
        intro="Sebuah cerita tentang dapur kampung, resep warisan, dan janji untuk tidak pernah berkompromi pada kesegaran."
      />

      {/* intro */}
      <Section>
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={32}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] border border-kanvas-300 shadow-lifted">
                <DishImage tone="ayam" steam emblem caption="Dapur dadakan kami" className="aspect-[4/5]" />
              </div>
              <div className="absolute -bottom-6 -left-4 w-44 -rotate-2 rounded-3xl border border-kanvas-300 bg-white p-5 text-center shadow-lifted">
                <p className="font-display text-4xl text-merah">2014</p>
                <p className="text-xs text-ink-muted">Tahun kami mulai memasak</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-current" /> Awal Mula
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Berawal dari satu warung lesehan kecil
            </h2>
            <Ornament className="mt-5 justify-start" />
            <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
              <p>
                Dadakan Sunda dimulai dari sebuah warung lesehan sederhana di Bandung, dengan satu
                tekad: menyajikan masakan Sunda sebagaimana ia seharusnya — segar, hangat, dan jujur.
              </p>
              <p>
                Kami percaya rasa terbaik tidak bisa diburu-buru. Maka kami memasak dadakan, saat
                dipesan, supaya setiap hidangan sampai ke meja Anda dengan aroma dan tekstur terbaik.
              </p>
              <p>
                Kini, dengan beberapa cabang, prinsip itu tidak pernah berubah. Setiap saung adalah
                perpanjangan dapur rumah kami untuk keluarga Anda.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* proses dadakan */}
      <Section className="relative bg-ink text-kanvas">
        <BatikField color="#E8B23C" opacity={0.06} />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Proses Dadakan"
            title={<>Tiga langkah menuju rasa rumah</>}
            intro="Inilah ritual yang kami jaga di setiap pesanan."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-kanvas/12 bg-kanvas/5 p-8 backdrop-blur-sm">
                  <span className="font-display text-5xl text-kencana">{s.no}</span>
                  <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-kanvas/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* values */}
      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Nilai Kami"
            title={<>Yang kami pegang teguh</>}
            intro="Prinsip sederhana yang membuat setiap kunjungan terasa istimewa."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-3xl border border-kanvas-300/70 bg-white/70 p-6 shadow-soft">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-kencana" />
                  <div>
                    <h3 className="font-display text-lg text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-soft">{p.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 grid grid-cols-2 gap-8 rounded-[2rem] border border-kencana/20 bg-gradient-to-br from-white/80 to-kanvas-200/60 px-6 py-12 sm:grid-cols-4">
              {stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
