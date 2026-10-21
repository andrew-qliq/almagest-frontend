import { PageHero } from "@/components/shared/page-hero";

export function ReferralHeroSection() {
  return (
    <PageHero
      subtitle="Referral Partners"
      heading={
        <>
          Earn commission introducing
          <br />
          people to the Academy.
        </>
      }
      description="A premium B2B proposition for creators, educators and community owners."
      ctas={[
        {
          label: "Apply to Become a Partner",
          href: "/referral-partners/apply",
          variant: "primary",
        },
      ]}
      imageSrc="/images/home/hero-banner.jpg"
      size="full"
    />
  );
}
