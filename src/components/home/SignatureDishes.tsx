import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { getSignatureItems } from "@/lib/cms";

export async function SignatureDishes() {
  const signatureItems = await getSignatureItems();
  return (
    <Section className="bg-kanvas-200/40">
      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Hidangan Andalan"
            title={<>Yang paling dicari di meja kami</>}
            intro="Resep warisan yang membuat tamu kembali lagi dan lagi — dimasak dadakan, disajikan hangat."
            className="max-w-xl"
          />
          <Reveal>
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-merah hover:text-merah"
            >
              Lihat semua menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signatureItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} className="h-full">
              <MenuItemCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
