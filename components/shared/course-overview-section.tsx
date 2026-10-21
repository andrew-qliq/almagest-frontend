import type { ReactNode } from "react";
import { Award, LockKeyhole, Play, UsersRound } from "lucide-react";
import { ActionButton } from "@/components/shared/action-button";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

interface CourseOverviewSectionProps {
  subtitle: string;
  title: ReactNode;
  description: string;
  checkoutHref: string;
  format: string;
  access: string;
  recognition: string;
  enrollmentLabel?: string;
  priceText?: string;
  pricingDescription?: string;
  ctaLabel?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  checkoutNote?: string;
}

export function CourseOverviewSection({
  subtitle,
  title,
  description,
  checkoutHref,
  format,
  access,
  recognition,
  enrollmentLabel = "Enrolment",
  priceText = "Price to be confirmed",
  pricingDescription = "Final price, instalment options and provider details are pending approval.",
  ctaLabel = "Enrol Now",
  secondaryCtaLabel,
  secondaryCtaHref,
  checkoutNote = "Secure checkout prototype · No payment is processed",
}: CourseOverviewSectionProps) {
  const courseDetails = [
    { icon: Play, label: "Format", value: format },
    { icon: UsersRound, label: "Access", value: access },
    { icon: Award, label: "Recognition", value: recognition },
  ] as const;

  return (
    <section className="bg-[#f8f5ef] py-16 sm:py-20 lg:py-24">
      <SectionContainer>
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div className="max-w-3xl">
            <span
              aria-hidden
              className="font-secondary text-[104px] leading-[0.42] text-gold/15 sm:text-[118px]"
            >
              “
            </span>
            <Subtitle
              size="md"
              tone="gold"
              tracking="wider"
              weight="bold"
              className="mt-5 border-l-2 border-gold pl-5"
            >
              {subtitle}
            </Subtitle>
            <h2 className="mt-3 max-w-2xl font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[44px]">
              {title}
            </h2>
            <p className="mt-7 max-w-2xl border-l-2 border-gold pl-5 text-[15px] leading-8 text-slate-500 sm:text-base">
              {description}
            </p>

            <div className="mt-10 grid border-t border-navy sm:grid-cols-3">
              {courseDetails.map(({ icon: Icon, label, value }, index) => (
                <div
                  key={label}
                  className={`py-5 sm:px-5 sm:first:pl-0 ${index > 0 ? "border-t border-slate-200 sm:border-l sm:border-t-0" : ""}`}
                >
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.7} />
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 font-secondary text-[16px] leading-tight text-navy sm:text-[17px]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative w-full max-w-[470px] justify-self-end overflow-hidden border-t-[3px] border-gold bg-[linear-gradient(130deg,#0D1B2A_0%,#10243a_72%,#1d354d_100%)] p-6 text-white shadow-[0_20px_48px_rgba(13,27,42,0.16)] sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_38%)]"
            />
            <div className="relative">
              <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
                {enrollmentLabel}
              </Subtitle>
              <h3 className="mt-6 font-secondary text-[25px] leading-tight text-white sm:text-[29px]">
                {priceText}
              </h3>
              <p className="mt-4 text-[13px] leading-6 text-white/55 sm:text-sm">
                {pricingDescription}
              </p>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <ActionButton
                  href={checkoutHref}
                  variant="primary"
                  size="hero"
                  className="min-h-11 flex-1 whitespace-nowrap px-4 text-[10px] tracking-[0.12em]"
                >
                  {ctaLabel}
                </ActionButton>
                {secondaryCtaLabel && secondaryCtaHref && (
                  <ActionButton
                    href={secondaryCtaHref}
                    variant="secondary"
                    size="hero"
                    className="min-h-11 flex-1 whitespace-nowrap px-3 text-[10px] tracking-[0.1em]"
                  >
                    {secondaryCtaLabel}
                  </ActionButton>
                )}
              </div>
              <p className="mt-4 flex items-center gap-2 text-[11px] text-white/45">
                <LockKeyhole className="h-3.5 w-3.5" strokeWidth={1.6} />
                {checkoutNote}
              </p>
            </div>
          </aside>
        </div>
      </SectionContainer>
    </section>
  );
}
