"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import { HOME_FAQS } from "@/lib/constants/faqs";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
              Frequently Asked
            </Subtitle>
            <h2 className="mt-7 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
              Start with clarity.
            </h2>
          </div>
          <Link
            href="/faq"
            className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 transition-colors hover:text-gold"
          >
            View All Questions
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 border-t border-slate-200 sm:mt-16">
          {HOME_FAQS.map((item, index) => {
            const isOpen = openItem === index;
            const panelId = `home-faq-panel-${index}`;

            return (
              <div key={item.question} className="border-b border-slate-200">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-6 py-7 text-left text-base font-semibold text-navy transition-colors hover:text-gold sm:py-8 sm:text-lg"
                >
                  {item.question}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 transition-[color,transform] duration-300",
                      isOpen ? "rotate-180 text-gold" : "text-navy",
                    )}
                  />
                </button>
                <div
                  id={panelId}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-4xl pb-8 pr-10 text-[15px] leading-7 text-slate-500 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
