import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { DishImage } from "@/components/ui/DishImage";
import { Ornament, SaungRoof } from "@/components/brand/motifs";

export function StorySection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* visual */}
        <Reveal y={32}>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border border-kanvas-300 shadow-lifted">
              <DishImage tone="nasi" emblem caption="Botram — makan bersama di atas daun pisang" className="aspect-[4/5]" />
            </div>
            <div className="absolute -bottom-6 -right-4 w-44 rotate-2 rounded-3xl border border-kanvas-300 bg-white p-4 shadow-lifted sm:-right-8 sm:w-52">
              <SaungRoof className="h-8 w-full text-kencana" />
              <p className="mt-2 text-center font-display text-lg text-ink">Sejak 2014</p>
              <p className="text-center text-xs text-ink-muted">Menjaga rasa asli Sunda</p>
            </div>
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-merah/10 blur-2xl" />
          </div>
        </Reveal>

        {/* text */}
        <Reveal delay={0.1}>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Carita Urang · Cerita Kami
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Dari dapur kampung, untuk meja keluarga Anda
          </h2>
          <Ornament className="mt-5 justify-start" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              Dadakan Sunda lahir dari kerinduan akan masakan rumah — sambal yang diulek di cobek
              batu, nasi yang mengepul hangat, dan lalapan yang dipetik segar.
            </p>
            <p>
              Kami menolak memanaskan ulang. Semuanya dimasak dadakan, saat Anda memesan, supaya
              setiap suapan terasa seperti baru matang dari dapur nenek.
            </p>
          </div>

          <blockquote className="mt-7 border-l-2 border-kencana pl-5 font-display text-lg italic text-ink">
            “Sangu haneut, sambel ngageugeuh.”
            <span className="mt-1 block text-sm not-italic text-ink-muted">
              — Nasi hangat, sambal yang menggugah selera.
            </span>
          </blockquote>

          <ButtonLink href="/tentang" variant="dark" className="mt-8">
            Kenali Kami Lebih Dekat
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
