"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  {
    question: "Do I have to start with the Foundation?",
    answer:
      "The Foundation is the shared starting point and establishes the core concepts used throughout each Master Class.",
  },
  {
    question: "Can I take both Master Classes?",
    answer:
      "Yes. Learners can continue into either or both specialisations after completing the shared foundation.",
  },
  {
    question: "How do the Master Classes work?",
    answer:
      "Each Master Class is a focused, self-paced programme supported by the member community and structured learning materials.",
  },
] as const;

export function LearningPathFaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div className="max-w-sm">
            <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
              Frequently Asked
            </Subtitle>
            <h2 className="mt-5 font-heading text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
              Questions, <br /> answered plainly.
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-slate-500 sm:text-base">
              Still unsure where to begin? We are happy to talk it through.
            </p>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 transition-colors hover:text-gold"
            >
              Book a Call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="border-t border-navy/75">
            {QUESTIONS.map((item, index) => {
              const isOpen = openItem === index;
              return (
                <div key={item.question} className="border-b border-navy/75">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenItem(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-8 text-left text-navy transition-colors hover:text-gold"
                  >
                    <span className="font-secondary text-[19px] sm:text-[19px]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-8 pr-10 text-[15px] leading-7 text-slate-500">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
