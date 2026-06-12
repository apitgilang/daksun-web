import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Ornament } from "@/components/brand/motifs";
import { getMenu } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Jelajahi menu lengkap Dadakan Sunda — bakakak ayam kampung, gurame bakar, nasi timbel, karedok, dan banyak lagi. Semua dimasak dadakan.",
};

export default async function MenuPage() {
  const menu = await getMenu();
  return (
    <>
      <PageHero
        crumb="Menu"
        eyebrow="Daptar Tuangeun"
        title="Menu Dadakan Sunda"
        intro="Semua hidangan dimasak dadakan begitu Anda pesan. Harga dalam Rupiah, sudah termasuk kesegaran tanpa kompromi."
      />

      {/* category quick-nav */}
      <div className="sticky top-16 z-20 border-b border-kanvas-300/70 bg-kanvas/85 backdrop-blur-md sm:top-20">
        <div className="container-x flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menu.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="whitespace-nowrap rounded-full border border-ink/12 bg-white/70 px-4 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-merah hover:text-merah"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      <div className="container-x py-16 sm:py-20">
        <div className="space-y-20">
          {menu.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-32">
              <Reveal>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-brand text-kencana">
                      {cat.sundanese}
                    </p>
                    <h2 className="mt-1 font-display text-3xl text-ink sm:text-4xl">{cat.name}</h2>
                    {cat.description && (
                      <p className="mt-2 max-w-lg text-sm text-ink-soft">{cat.description}</p>
                    )}
                  </div>
                  <span className="hidden font-display text-5xl text-kanvas-300 sm:block">
                    {String(menu.indexOf(cat) + 1).padStart(2, "0")}
                  </span>
                </div>
                <Ornament className="mt-5 justify-start" />
              </Reveal>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item, i) => (
                  <Reveal key={item.id} delay={i * 0.05} className="h-full">
                    <MenuItemCard item={item} />
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* footer CTA */}
        <Reveal>
          <div className="mt-20 flex flex-col items-center gap-5 rounded-[2rem] border border-kencana/20 bg-gradient-to-br from-white/80 to-kanvas-200/50 p-10 text-center shadow-soft">
            <h3 className="font-display text-2xl text-ink sm:text-3xl">Sudah menentukan pilihan?</h3>
            <p className="max-w-md text-ink-soft">
              Pesan langsung lewat WhatsApp ke cabang pilihan Anda. Kami siapkan dadakan, hangat
              untuk Anda.
            </p>
            <WhatsAppButton kind="generic" label="Pesan via WhatsApp" size="lg" variant="whatsapp" />
          </div>
        </Reveal>
      </div>
    </>
  );
}
