import type { Metadata } from "next";
import { TrendingUp, HandHeart, BookOpenCheck, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BatikField } from "@/components/brand/motifs";

export const metadata: Metadata = {
  title: "Kemitraan",
  description:
    "Bergabunglah dengan kemitraan Dadakan Sunda. Bawa cita rasa Sunda autentik ke kota Anda bersama merek yang sudah dipercaya.",
};

const benefits = [
  { icon: TrendingUp, title: "Merek Bertumbuh", desc: "Bergabung dengan merek Sunda yang sudah dikenal dan dicintai pelanggan." },
  { icon: BookOpenCheck, title: "Resep & SOP Teruji", desc: "Akses penuh resep warisan, standar dapur, dan pelatihan menyeluruh." },
  { icon: HandHeart, title: "Pendampingan Penuh", desc: "Dukungan operasional, pemasaran, dan suplai bahan dari pusat." },
  { icon: ShieldCheck, title: "Model Terbukti", desc: "Sistem yang sudah berjalan di beberapa cabang dengan hasil konsisten." },
];

const steps = [
  { no: "01", title: "Kirim Minat", desc: "Hubungi kami via WhatsApp dan ceritakan rencana serta kota tujuan Anda." },
  { no: "02", title: "Diskusi & Survei", desc: "Kami diskusikan model kerja sama dan tinjau lokasi potensial bersama." },
  { no: "03", title: "Pelatihan & Buka", desc: "Tim Anda dilatih, dapur disiapkan, dan saung baru siap menyambut tamu." },
];

export default function KemitraanPage() {
  return (
    <>
      <PageHero
        crumb="Kemitraan"
        eyebrow="Tumbuh Bersama"
        title="Bawa Dadakan Sunda ke kota Anda"
        intro="Kami membuka peluang kemitraan bagi Anda yang ingin menghadirkan masakan Sunda autentik dengan dukungan penuh dari kami."
      />

      {/* benefits */}
      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Kenapa Bermitra"
            title={<>Anda tidak berjalan sendiri</>}
            intro="Kami berbagi resep, sistem, dan pengalaman supaya Anda fokus melayani pelanggan."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-kanvas-300/70 bg-white/70 p-6 shadow-soft">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-merah/10 text-merah">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* steps */}
      <Section className="relative bg-ink text-kanvas">
        <BatikField color="#E8B23C" opacity={0.06} />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Langkah Bermitra"
            title={<>Tiga langkah sederhana</>}
            intro="Dari minat hingga grand opening, kami dampingi di setiap tahap."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-kanvas/12 bg-kanvas/5 p-8">
                  <span className="font-display text-5xl text-kencana">{s.no}</span>
                  <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-kanvas/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* stats + CTA */}
      <Section>
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-8 rounded-[2rem] border border-kencana/20 bg-gradient-to-br from-white/80 to-kanvas-200/60 px-6 py-12 sm:grid-cols-4">
              <Stat value="12+" label="Tahun pengalaman" />
              <Stat value="4" label="Cabang berjalan" />
              <Stat value="250rb+" label="Pelanggan terlayani" />
              <Stat value="100" label="Persen pendampingan" />
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-14 flex flex-col items-center gap-5 text-center">
              <h2 className="max-w-2xl font-display text-3xl text-ink sm:text-4xl">
                Siap memulai perjalanan bersama kami?
              </h2>
              <p className="max-w-md text-ink-soft">
                Ceritakan rencana Anda. Tim kemitraan kami akan menghubungi Anda kembali.
              </p>
              <WhatsAppButton kind="partner" label="Ajukan Kemitraan via WhatsApp" size="lg" variant="whatsapp" />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
