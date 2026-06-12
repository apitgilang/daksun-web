import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/Section";
import { Stars } from "@/components/ui/Stars";
import { Marquee } from "@/components/ui/Marquee";
import { getTestimonials } from "@/lib/cms";
import type { Testimonial } from "@/types/content";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="mx-3 flex w-[330px] shrink-0 flex-col rounded-3xl border border-kanvas-300/70 bg-white/80 p-7 shadow-soft sm:w-[380px]">
      <div className="flex items-center justify-between">
        <Stars rating={t.rating} />
        <Quote className="h-7 w-7 text-kencana/40" />
      </div>
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-kanvas-300/70 pt-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-merah/10 font-display text-lg font-bold text-merah">
          {t.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-bold text-ink">{t.name}</span>
          {t.role && <span className="block text-xs text-ink-muted">{t.role}</span>}
        </span>
      </figcaption>
    </figure>
  );
}

export async function Testimonials() {
  const testimonials = await getTestimonials();
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Kata Mereka"
          title={<>Dipercaya ribuan keluarga Sunda</>}
          intro="Bukan kami yang bilang — dengarkan langsung dari tamu yang sudah mencicipi."
        />
      </div>
      <div className="mt-14 space-y-5">
        <Marquee>
          {testimonials.map((t) => (
            <Card key={t.id} t={t} />
          ))}
        </Marquee>
        <Marquee reverse>
          {[...testimonials].reverse().map((t) => (
            <Card key={t.id} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
