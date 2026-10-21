import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { InsightCard } from "@/components/shared/insight-card";
import { Subtitle } from "@/components/shared/subtitle";
import { LATEST_INSIGHTS } from "@/lib/constants/insights";

export function LatestInsightsSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <div className="flex flex-col gap-8 border-b border-navy pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
              Latest Insights
            </Subtitle>
            <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
              Ideas for long-term thinkers.
            </h2>
          </div>
          <Link
            href="/insights"
            className="group inline-flex shrink-0 items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 transition-colors hover:text-gold"
          >
            All Insights
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {LATEST_INSIGHTS.map((insight) => (
            <InsightCard
              key={insight.href}
              insight={insight}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
