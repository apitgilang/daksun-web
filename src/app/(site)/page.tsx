import { Hero } from "@/components/home/Hero";
import { WhyUs } from "@/components/home/WhyUs";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { StorySection } from "@/components/home/StorySection";
import { PromoStrip } from "@/components/home/PromoStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { BranchesStrip } from "@/components/home/BranchesStrip";
import { CTASection } from "@/components/home/CTASection";
import { getSettings, getBranches } from "@/lib/cms";

export default async function HomePage() {
  const [site, branches] = await Promise.all([getSettings(), getBranches()]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    description: site.description,
    servesCuisine: "Sundanese",
    priceRange: "$$",
    url: "https://dadakansunda.id",
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
      <Hero />
      <WhyUs />
      <SignatureDishes />
      <StorySection />
      <PromoStrip />
      <Testimonials />
      <BranchesStrip />
      <CTASection />
    </>
  );
}
