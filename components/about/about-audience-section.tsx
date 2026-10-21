import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

export function AboutAudienceSection() {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-24">
          <div>
            <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
              Who It Is For
            </Subtitle>
            <h2 className="mt-6 max-w-3xl font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
              Rooted in the UAE, relevant worldwide.
            </h2>
          </div>

          <div className="border-l-2 border-gold pl-7">
            <p className="text-[15px] leading-8 text-slate-500 sm:text-base">
              Built for professionals, entrepreneurs, executives and thoughtful
              investors across the UAE and GCC, with a global outlook for
              learners wherever they are.
            </p>
            <Link
              href="/founder"
              className="group mt-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700 transition-colors hover:text-gold"
            >
              Meet the Founder, Marco Teora
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
