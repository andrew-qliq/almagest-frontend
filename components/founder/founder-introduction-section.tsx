import { ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

export function FounderIntroductionSection() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <SectionContainer className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div className="flex min-h-[250px] items-center justify-center border border-dashed border-slate-400/70 bg-white px-8 py-12 text-center text-navy sm:min-h-[290px]">
          <div>
            <ShieldCheck className="mx-auto h-7 w-7 text-gold" strokeWidth={1.7} />
            <p className="mt-5 text-base font-semibold">Founder portrait pending approved asset</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              This content remains intentionally unfilled until approved source material is supplied.
            </p>
          </div>
        </div>
        <div>
          <Subtitle tone="white-muted" size="md" className="mb-7">The person behind the Academy</Subtitle>
          <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            A teacher first, an institution builder second.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60">
            [Approved positioning statement and credentials pending final sign-off]
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
