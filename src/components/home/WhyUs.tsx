import { Flame, ScrollText, CookingPot, Leaf, MessageCircleMore, Home } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { BatikField } from "@/components/brand/motifs";
import { whyPoints, stats } from "@/content/why";

const icons = {
  flame: Flame,
  scroll: ScrollText,
  mortar: CookingPot,
  leaf: Leaf,
  chat: MessageCircleMore,
  home: Home,
} as const;

export function WhyUs() {
  return (
    <Section className="relative">
      <BatikField color="#C8902A" opacity={0.04} />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Kenapa Dadakan Sunda"
          title={<>Bukan sekadar nama — sebuah janji rasa</>}
          intro="Dalam bahasa Sunda, dadakan berarti dibuat saat itu juga. Itulah cara kami memasak: segar, hangat, tanpa kompromi."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point, i) => {
            const Icon = icons[point.icon as keyof typeof icons] ?? Flame;
            return (
              <Reveal key={point.title} delay={i * 0.06}>
                <article className="group h-full rounded-3xl border border-kanvas-300/70 bg-white/70 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-merah/30 hover:shadow-lifted">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-merah/10 text-merah transition-colors duration-300 group-hover:bg-merah group-hover:text-kanvas">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* stats */}
        <Reveal>
          <div className="mt-16 grid grid-cols-2 gap-8 rounded-[2rem] border border-kencana/20 bg-gradient-to-br from-white/80 to-kanvas-200/60 px-6 py-12 shadow-soft sm:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
