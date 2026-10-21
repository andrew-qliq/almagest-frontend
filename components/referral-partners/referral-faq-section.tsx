"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { ActionButton } from "@/components/shared/action-button";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import { cn } from "@/lib/utils";

const FAQS = [
  { question: "Who can apply?", answer: "Creators, educators, community owners and professional networks may apply. Every application is reviewed before acceptance." },
  { question: "When is commission paid?", answer: "Payment schedules, qualifying-sale rules and approved commission rates will be provided in the final partner terms." },
  { question: "Can I promote before I am verified?", answer: "No. Promotion may begin only after the required advertiser permit and partner application have been verified." },
  { question: "How are sales attributed?", answer: "Approved partners receive a unique referral link and code. The dashboard records eligible clicks, attributed sales and payout status." },
];

export function ReferralFaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24">
      <SectionContainer>
        <Subtitle size="md" className="mb-7">Partner questions</Subtitle>
        <h2 className="text-3xl font-medium tracking-tight text-navy sm:text-4xl">Understand the programme before you apply.</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">Clear answers about eligibility, verification, attribution and commission.</p>

        <div className="mt-12 flex min-h-[180px] items-center justify-center border border-dashed border-slate-300 bg-white/80 px-8 py-10 text-center">
          <div>
            <ShieldCheck className="mx-auto h-7 w-7 text-gold" strokeWidth={1.7} />
            <p className="mt-5 font-semibold text-navy">Commission structure pending commercial approval</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">This content remains intentionally unfilled until approved source material is supplied.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200">
          {FAQS.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <div key={item.question} className="border-b border-slate-200">
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenItem(isOpen ? null : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-semibold text-navy transition-colors hover:text-gold">
                  {item.question}
                  <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", isOpen && "rotate-180")} />
                </button>
                <div className={cn("grid transition-[grid-template-rows,opacity] duration-300", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden"><p className="max-w-3xl pb-7 text-sm leading-7 text-slate-500 sm:text-base">{item.answer}</p></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center"><ActionButton href="/referral-partners/apply" variant="primary">Begin Application</ActionButton></div>
      </SectionContainer>
    </section>
  );
}
