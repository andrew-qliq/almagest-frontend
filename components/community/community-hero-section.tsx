import { PageHero } from "@/components/shared/page-hero";

export function CommunityHeroSection() {
  return (
    <PageHero
      size="compact"
      subtitle="The Community"
      heading={
        <>
          Serious learning should
          <br />
          not happen in isolation.
        </>
      }
      description="A thoughtful global member experience, grounded in education and brought together in Dubai."
      imageSrc="/images/insights/hero-banner.jpg"
      ctas={[
        {
          label: "Join the Broadcast",
          href: "#whatsapp-broadcast",
          variant: "primary",
        },
      ]}
      className="md:min-h-[560px] lg:min-h-[590px]"
    />
  );
}
