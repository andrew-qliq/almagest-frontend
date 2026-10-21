"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import type { CurriculumModule } from "@/lib/constants/curricula";
import { cn } from "@/lib/utils";

interface CurriculumSectionProps {
  modules: CurriculumModule[];
  title?: ReactNode;
  description?: string;
  eyebrow?: string;
}

export function CurriculumSection({
  modules,
  title = (
    <>
      A structured progression,
      <br /> not a content library.
    </>
  ),
  description =
    "Module names, runtimes and lesson counts remain pending academic approval.",
  eyebrow = "Curriculum",
}: CurriculumSectionProps) {
  const [openModule, setOpenModule] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(31,73,111,0.42),transparent_50%)]"
      />
      <SectionContainer className="relative">
        <div className="max-w-3xl">
          <Subtitle size="md" tone="white-muted" tracking="wider" weight="bold">
            {eyebrow}
          </Subtitle>
          <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[40px]">
            {title}
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-white/55 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-14 border-t border-white/15">
          {modules.map((module, index) => {
            const isOpen = openModule === index;

            return (
              <div key={module.number} className="border-b border-white/15">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenModule(isOpen ? null : index)}
                  className="group flex w-full items-center gap-5 py-6 text-left sm:gap-10"
                >
                  <span className="font-secondary text-[19px] text-gold">
                    {module.number}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-white transition-colors group-hover:text-gold sm:text-base">
                    {module.title}
                  </span>
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 shrink-0 text-white transition-transform duration-300",
                      isOpen && "rotate-90",
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
                    <p className="max-w-3xl pb-6 pl-12 text-sm leading-7 text-white/55 sm:pl-[68px]">
                      {module.description}
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
