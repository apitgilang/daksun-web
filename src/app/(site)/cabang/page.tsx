import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BranchCard } from "@/components/branch/BranchCard";
import { getBranches } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Cabang",
  description:
    "Temukan cabang Dadakan Sunda terdekat di Bandung, Jakarta, dan Bekasi. Lengkap dengan alamat, jam buka, dan kontak WhatsApp.",
};

export default async function CabangPage() {
  const branches = await getBranches();
  return (
    <>
      <PageHero
        crumb="Cabang"
        eyebrow="Lokasi Kami"
        title="Saung Dadakan Sunda"
        intro="Cabang kami siap menyambut Anda dengan hangat. Klik salah satu untuk melihat detail, menu, dan arah lokasi."
      />
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.06} className="h-full">
              <BranchCard branch={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
