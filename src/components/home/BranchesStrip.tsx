import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BranchCard } from "@/components/branch/BranchCard";
import { getBranches } from "@/lib/cms";

export async function BranchesStrip() {
  const branches = await getBranches();
  return (
    <Section className="bg-kanvas-200/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Cabang Kami"
          title={<>Mampir ke saung terdekat</>}
          intro="Empat cabang dan terus bertumbuh. Pilih yang paling dekat — pesan & reservasi langsung ke cabang tersebut."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.06} className="h-full">
              <BranchCard branch={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
