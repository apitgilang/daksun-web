import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ButtonLink } from "@/components/ui/Button";
import { SaungRoof, BatikField } from "@/components/brand/motifs";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-merah text-kanvas">
      <BatikField color="#FBF6EC" opacity={0.08} />
      <div className="absolute inset-0 bg-gradient-to-br from-merah-700/40 via-transparent to-merah-800/60" />
      <div className="container-x relative py-20 text-center sm:py-28">
        <Reveal>
          <SaungRoof className="mx-auto h-14 w-64 text-kencana" />
          <span className="mt-6 inline-block text-sm font-bold uppercase tracking-brand text-kanvas/80">
            Sampurasun
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Lapar masakan Sunda yang dimasak dadakan?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-kanvas/80">
            Pesan sekarang atau pesankan meja untuk keluarga. Cukup satu ketukan ke WhatsApp —
            tanpa aplikasi, tanpa ribet.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <WhatsAppButton kind="reservation" label="Reservasi via WhatsApp" size="lg" variant="whatsapp" />
            <ButtonLink href="/menu" variant="gold" size="lg">
              Jelajahi Menu
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
