"use client";

import { useMemo, useState } from "react";
import { SectionContainer } from "@/components/shared/section-container";
import { InsightCard } from "@/components/shared/insight-card";
import { INSIGHTS, INSIGHT_CATEGORIES } from "@/lib/constants/insights";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 9;

export function InsightsGridSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof INSIGHT_CATEGORIES)[number]>("All");
  const [page, setPage] = useState(1);
  const filteredInsights = useMemo(
    () => activeCategory === "All" ? INSIGHTS : INSIGHTS.filter((insight) => insight.category === activeCategory),
    [activeCategory],
  );
  const pageCount = Math.max(1, Math.ceil(filteredInsights.length / PAGE_SIZE));
  const visibleInsights = filteredInsights.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="bg-[#f8f5ef] py-16 sm:py-20 lg:py-24">
      <SectionContainer>
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter insights by category">
          {INSIGHT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button key={category} type="button" aria-pressed={isActive} onClick={() => { setActiveCategory(category); setPage(1); }} className={cn("border px-5 py-3 text-sm transition-[background-color,border-color,color] duration-300 sm:px-6", isActive ? "border-navy bg-navy text-white" : "border-slate-200 bg-transparent text-slate-500 hover:border-gold hover:text-navy")}>
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {visibleInsights.map((insight) => (
            <InsightCard key={insight.href} insight={insight} />
          ))}
        </div>

        <nav className="mt-14 flex items-center justify-center gap-6" aria-label="Insights pagination">
          <button type="button" disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))} className="border border-slate-200 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:border-gold disabled:cursor-not-allowed disabled:text-slate-300">Previous</button>
          <span className="text-sm text-slate-500">Page {page} of {pageCount}</span>
          <button type="button" disabled={page === pageCount} onClick={() => setPage((current) => Math.min(pageCount, current + 1))} className="border border-slate-200 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:border-gold disabled:cursor-not-allowed disabled:text-slate-300">Next</button>
        </nav>
      </SectionContainer>
    </section>
  );
}
