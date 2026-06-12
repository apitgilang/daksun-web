import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { DishImage } from "@/components/ui/DishImage";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getGallery } from "@/lib/cms";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Intip kelezatan hidangan dan kehangatan suasana saung Dadakan Sunda.",
};

const spanClass = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "sm:col-span-2 aspect-[16/9]",
  normal: "aspect-square",
} as const;

export default async function GaleriPage() {
  const gallery = await getGallery();
  return (
    <>
      <PageHero
        crumb="Galeri"
        eyebrow="Potret Rasa"
        title="Galeri Dadakan Sunda"
        intro="Setiap gambar adalah undangan. Cicipi dengan mata, lalu rasakan langsung di meja kami."
      />
      <div className="container-x py-16 sm:py-20">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal
              key={g.id}
              delay={(i % 3) * 0.06}
              className={cn("group overflow-hidden rounded-3xl", spanClass[g.span ?? "normal"])}
            >
              <div className="relative h-full w-full">
                <DishImage
                  tone={g.tone}
                  src={g.image}
                  alt={g.caption}
                  caption={g.caption}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="text-ink-soft">Tergoda? Pesan langsung dan rasakan sendiri.</p>
            <div className="mt-5 flex justify-center">
              <WhatsAppButton kind="generic" label="Pesan via WhatsApp" size="lg" variant="whatsapp" />
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
