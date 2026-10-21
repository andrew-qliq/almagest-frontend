import type { ReactNode } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import { FRAMEWORK_CARDS } from "@/lib/constants/frameworks";

interface FrameworksSectionProps {
  title: ReactNode;
  subtitle?: string;
  description?: string;
  background?: "white" | "cream";
}

export function FrameworksSection({
  title,
  subtitle = "The Six Pillars",
  description = "Each pillar develops a different dimension of financial and strategic intelligence.",
  background = "white",
}: FrameworksSectionProps) {
  return (
    <section
      className={`${background === "cream" ? "bg-[#f8f5ef]" : "bg-white"} py-20 sm:py-24 lg:py-28`}
    >
      <SectionContainer>
        <div className="max-w-5xl">
          <Subtitle tone="gold" tracking="wider" weight="bold" size="md">
            {subtitle}
          </Subtitle>
          <h2 className="mt-5 font-heading text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[44px] lg:text-[40px]">
            {title}
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-slate-500 sm:text-base">
            {description}
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {FRAMEWORK_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.number}
                href={card.href}
                className="group relative flex min-h-[300px] flex-col overflow-hidden border border-slate-200 border-t-[3px] border-t-gold bg-white p-7 transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-navy hover:border-t-gold hover:bg-navy hover:shadow-[0_20px_50px_rgba(13,27,42,0.16)] focus-visible:-translate-y-1 focus-visible:border-navy focus-visible:bg-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold text-gold transition-[color,background-color] duration-300 group-hover:bg-gold group-hover:text-navy group-focus-visible:bg-gold group-focus-visible:text-navy">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <span className="select-none font-heading text-[42px] font-semibold leading-none text-navy/[0.07] transition-colors duration-300 group-hover:text-gold/30 group-focus-visible:text-gold/30">
                    {card.number}
                  </span>
                </div>
                <div className="mt-9">
                  <h3 className="font-heading text-[22px] font-medium leading-tight tracking-[-0.025em] text-navy transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-6 text-slate-500 transition-colors duration-300 group-hover:text-white/60 group-focus-visible:text-white/60">
                    {card.description}
                  </p>
                </div>
                <div className="mt-auto pt-8">
                  <div className="h-px bg-slate-200 transition-colors duration-300 group-hover:bg-white/15 group-focus-visible:bg-white/15" />
                  <span className="mt-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 transition-colors duration-300 group-hover:text-gold group-focus-visible:text-gold">
                    Pillar {card.number}
                    <span
                      aria-hidden
                      className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
