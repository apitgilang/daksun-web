import type { Metadata } from "next";
import { Mail, Clock, Instagram, Music2, Facebook, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BranchCard } from "@/components/branch/BranchCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getBranches, getSettings } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Dadakan Sunda — WhatsApp, email, dan media sosial. Temukan juga semua cabang kami.",
};

export default async function KontakPage() {
  const [branches, site] = await Promise.all([getBranches(), getSettings()]);
  return (
    <>
      <PageHero
        crumb="Kontak"
        eyebrow="Sumping ka Abdi"
        title="Mari terhubung"
        intro="Punya pertanyaan, ingin pesan, atau sekadar menyapa? Kami senang mendengar dari Anda."
      />

      <Section>
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {/* WhatsApp primary */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-[2rem] bg-ink p-8 text-kanvas shadow-lifted sm:p-10">
              <div>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1FA855]/20 text-[#43d07f]">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-3xl">Cara tercepat: WhatsApp</h2>
                <p className="mt-3 max-w-md text-kanvas/70">
                  Pesan, reservasi, atau tanya apa saja langsung ke cabang pilihan Anda. Pilih
                  cabang di pojok kanan atas, lalu ketuk tombol di bawah.
                </p>
              </div>
              <WhatsAppButton kind="generic" label="Mulai Chat WhatsApp" size="lg" variant="whatsapp" />
            </div>
          </Reveal>

          {/* other channels */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4 rounded-[2rem] border border-kanvas-300/70 bg-white/75 p-8 shadow-soft">
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-merah/10 text-merah">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-ink-muted">Email</span>
                  <span className="font-medium text-ink group-hover:text-merah">{site.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-merah/10 text-merah">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-ink-muted">Jam Buka</span>
                  <span className="font-medium text-ink">Setiap hari · {site.hours}</span>
                </span>
              </div>
              <div className="mt-2 border-t border-kanvas-300/70 pt-5">
                <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">Media Sosial</p>
                <div className="mt-3 flex gap-3">
                  {[
                    { href: site.socials.instagram, icon: Instagram, label: "Instagram" },
                    { href: site.socials.tiktok, icon: Music2, label: "TikTok" },
                    { href: site.socials.facebook, icon: Facebook, label: "Facebook" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors hover:border-merah hover:bg-merah hover:text-kanvas"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container-x">
          <SectionHeading
            eyebrow="Kunjungi Kami"
            title={<>Semua cabang Dadakan Sunda</>}
            intro="Datang langsung dan rasakan kehangatan saung kami. Klik untuk arah lokasi."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.06} className="h-full">
                <BranchCard branch={b} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
