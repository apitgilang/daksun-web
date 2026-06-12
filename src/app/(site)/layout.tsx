import { BranchProvider } from "@/context/BranchContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { getBranches, getPrimaryBranch, getSettings } from "@/lib/cms";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [branches, primary, settings] = await Promise.all([
    getBranches(),
    getPrimaryBranch(),
    getSettings(),
  ]);

  return (
    <BranchProvider branches={branches} primaryId={primary.id}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-merah focus:px-4 focus:py-2 focus:text-kanvas"
      >
        Lewati ke konten
      </a>
      <Header settings={settings} />
      <main id="main">{children}</main>
      <Footer settings={settings} branches={branches} />
      <MobileCTABar />
    </BranchProvider>
  );
}
