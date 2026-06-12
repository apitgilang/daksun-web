import { hasSanity } from "@/sanity/env";
import { StudioOrSetup } from "./studio-client";

export const dynamic = "force-static";

export const metadata = {
  title: "Dadakan Sunda — Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  if (!hasSanity) {
    return (
      <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16 text-ink">
        <h1 className="font-display text-3xl">Sanity Studio belum dikonfigurasi</h1>
        <p className="mt-4 text-ink-soft">
          Buat project Sanity gratis, lalu isi variabel berikut di <code>.env.local</code>:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-2xl bg-ink p-5 text-sm text-kanvas">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=...
SANITY_REVALIDATE_SECRET=...`}
        </pre>
        <p className="mt-4 text-sm text-ink-muted">
          Langkah lengkap ada di <code>README.md</code> bagian “Menghubungkan Sanity”. Sampai itu
          diisi, situs tetap berjalan memakai konten placeholder.
        </p>
      </div>
    );
  }
  return <StudioOrSetup />;
}
