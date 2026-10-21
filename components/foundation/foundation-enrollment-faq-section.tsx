"use client";

import { useState } from "react";
import { ChevronDown, LockKeyhole, ShieldCheck } from "lucide-react";
import { ActionButton } from "@/components/shared/action-button";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface PricingState {
  id: string;
  label: string;
  price: string;
  description: string;
}

interface CourseEnrollmentFaqSectionProps {
  faqs: FaqItem[];
  pricingStates: PricingState[];
  checkoutHref: string;
  title?: string;
  eyebrow?: string;
}

export function CourseEnrollmentFaqSection({
  faqs,
  pricingStates,
  checkoutHref,
  title = "Ready when the final details are.",
  eyebrow = "Enrolment",
}: CourseEnrollmentFaqSectionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [pricingState, setPricingState] = useState(pricingStates[0]?.id ?? "");
  const activePricingState =
    pricingStates.find((state) => state.id === pricingState) ?? pricingStates[0];

  if (!activePricingState) return null;

  return (
    <section className="bg-[#f8f5ef] py-16 sm:py-20">
      <SectionContainer>
        <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
          {eyebrow}
        </Subtitle>
        <h2 className="mt-5 font-heading text-[32px] font-medium leading-[1.08] tracking-[-0.04em] text-navy sm:text-[38px] lg:text-[40px]">
          {title}
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <div className="border-t-[3px] border-gold bg-white p-6 shadow-[0_14px_32px_rgba(13,27,42,0.05)] sm:p-7">
              <Subtitle size="sm" tone="gold" tracking="wider" weight="bold">
                Enrolment
              </Subtitle>
              <h3
                aria-live="polite"
                className="mt-5 min-h-7 font-heading text-[21px] font-semibold text-navy transition-opacity duration-300"
              >
                {activePricingState.price}
              </h3>
              <p className="mt-3 min-h-12 text-[13px] leading-6 text-slate-500">
                {activePricingState.description}
              </p>
              <ActionButton
                href={checkoutHref}
                variant="primary"
                size="hero"
                className="mt-5 min-h-11 w-full"
              >
                Enrol Now
              </ActionButton>
              <p className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
                <LockKeyhole className="h-3.5 w-3.5" strokeWidth={1.6} />
                Secure checkout prototype · No payment is processed
              </p>
            </div>
            <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Prototype · Preview Pricing State
            </p>
            <div
              className="mt-2 grid grid-cols-2 border border-slate-200 text-center text-xs text-slate-500"
              role="group"
              aria-label="Preview pricing state"
            >
              {pricingStates.map((state, index) => {
                const isActive = pricingState === state.id;

                return (
                  <button
                    key={state.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setPricingState(state.id)}
                    className={cn(
                      "min-h-10 border-slate-200 px-3 py-2 text-[11px] transition-[color,background-color,box-shadow] duration-300 focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold",
                      index % 2 === 1 && "border-l",
                      index >= 2 && "border-t",
                      isActive
                        ? "bg-navy text-gold shadow-[inset_0_0_0_1px_rgba(201,168,76,0.08)]"
                        : "bg-white text-slate-500 hover:bg-slate-50 hover:text-navy",
                    )}
                  >
                    {state.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex gap-3 border-l-2 border-gold bg-white px-5 py-4">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                strokeWidth={1.7}
              />
              <div>
                <h3 className="text-[13px] font-semibold text-navy">
                  Refund summary
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Approved refund terms are pending. They will be shown here,
                  and again before any payment is accepted.
                </p>
              </div>
            </div>
            <p className="mt-4 text-[11px] italic leading-5 text-slate-500">
              No payment will be taken in this prototype. The layout is ready to
              receive approved pricing, instalment and refund information.
            </p>

            <div className="mt-6 border-t border-slate-200">
              {faqs.map((item, index) => {
                const isOpen = openItem === index;
                return (
                  <div
                    key={item.question}
                    className="border-b border-slate-200"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenItem(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left text-navy transition-colors hover:text-gold"
                    >
                      <span className="text-sm font-semibold">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform duration-300",
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
                        <p className="max-w-2xl pb-5 pr-8 text-[13px] leading-6 text-slate-500">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
