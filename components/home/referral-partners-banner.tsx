import Link from "next/link";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

export function ReferralPartnersBanner() {
  return (
    <section className="bg-[linear-gradient(105deg,#d1aa31_0%,#dfc36f_54%,#f4ebca_100%)] py-16 sm:py-20 lg:py-24">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <Subtitle
              size="sm"
              tone="navy"
              tracking="wider"
              weight="bold"
              className="opacity-65"
            >
              Referral Partners
            </Subtitle>
            <h2 className="mt-7 max-w-2xl font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
              Have an audience?
              <br />
              Build a valuable introduction.
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-[15px] leading-7 text-navy/85 sm:text-base">
              A premium B2B proposition for educators, creators and community
              owners. UAE advertiser permit verification is required before any
              commission relationship begins.
            </p>
            <Link
              href="/referral-partners"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-[4px] border border-navy px-7 text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-[color,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-navy hover:text-white hover:shadow-[0_10px_26px_rgba(13,27,42,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-gold"
            >
              Become a Referral Partner
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
