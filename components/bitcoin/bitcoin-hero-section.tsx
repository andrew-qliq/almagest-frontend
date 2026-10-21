import { PageHero } from "@/components/shared/page-hero";

const EDUCATION_NOTICES = [
  "Education only.",
  "No investment advice.",
  "No trading signals.",
  "No financial products.",
] as const;

export function BitcoinHeroSection() {
  return (
    <>
      <PageHero
        subtitle="Master Class"
        heading="Bitcoin & Monetary Systems"
        description="Understand Bitcoin in its technological, monetary and macroeconomic context."
        ctas={[
          {
            label: "Enrol Now",
            href: "/checkout/master-class",
            variant: "primary",
          },
          {
            label: "Book a Discovery Call",
            href: "/book-a-call",
            variant: "secondary",
          },
        ]}
        size="full"
        imageSrc="/images/home/hero-banner.jpg"
      />

      <div className="border-b border-gold/45 bg-[#f4e9c6] px-6 py-5">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-[10px] font-medium uppercase tracking-[0.13em] text-navy sm:text-[11px]">
          {EDUCATION_NOTICES.map((notice, index) => (
            <span key={notice} className={index === 0 ? "font-bold" : undefined}>
              {notice}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
