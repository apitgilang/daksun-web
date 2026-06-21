import { Hero } from "@/components/home/Hero";
import { WhyUs } from "@/components/home/WhyUs";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { StorySection } from "@/components/home/StorySection";
import { PromoStrip } from "@/components/home/PromoStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { BranchesStrip } from "@/components/home/BranchesStrip";
import { CTASection } from "@/components/home/CTASection";
import { getSettings, getBranches, getSignatureItems } from "@/lib/cms";
import { siteUrl } from "@/lib/siteUrl";
import type { MenuItem } from "@/types/content";

/** First items spanning distinct tones, so the hero cards look varied. */
function pickHeroDishes(items: MenuItem[], n = 3): MenuItem[] {
  const picked: MenuItem[] = [];
  const tones = new Set<string>();
  for (const it of items) {
    if (picked.length >= n) break;
    if (!tones.has(it.tone)) {
      picked.push(it);
      tones.add(it.tone);
    }
  }
  for (const it of items) {
    if (picked.length >= n) break;
    if (!picked.includes(it)) picked.push(it);
  }
  return picked;
}

export default async function HomePage() {
  const [site, branches, signatureItems] = await Promise.all([
    getSettings(),
    getBranches(),
    getSignatureItems(),
  ]);
  const heroDishes = pickHeroDishes(signatureItems);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    description: site.description,
    servesCuisine: "Sundanese",
    priceRange: "$$",
    url: siteUrl,
    email: site.email,
    openingHours: "Mo-Su 10:00-22:00",
    department: branches.map((b) => ({
      "@type": "Restaurant",
      name: b.name,
      address: b.address,
      telephone: b.phone,
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero dishes={heroDishes} />
      <WhyUs />
      <SignatureDishes />
      <StorySection />
      {/* <PromoStrip /> */}
      <Testimonials />
      <BranchesStrip />
      <CTASection />
    </>
  );
}
