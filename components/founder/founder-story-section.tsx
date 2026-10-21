import { ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

export function FounderStorySection() {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24">
      <SectionContainer className="max-w-4xl">
        <Subtitle size="md" className="mb-8">The personal story</Subtitle>
        <h2 className="text-3xl font-medium tracking-tight text-navy sm:text-4xl">Conviction built through study.</h2>
        <div className="mt-9 flex min-h-[220px] items-center justify-center border border-dashed border-slate-300 bg-white/80 px-8 py-12 text-center">
          <div>
            <ShieldCheck className="mx-auto h-7 w-7 text-gold" strokeWidth={1.7} />
            <p className="mt-5 text-base font-semibold text-navy">Approved long-form founder story pending</p>
            <p className="mt-3 text-sm leading-6 text-slate-500">This content remains intentionally unfilled until approved source material is supplied.</p>
          </div>
        </div>
        <p className="mt-5 text-base leading-7 text-slate-600">
          Almagest Academy is designed to transform a founder-led body of knowledge into an enduring educational institution. The final narrative will be placed here in a generous editorial format.
        </p>
        <blockquote className="my-16 border-l-4 border-gold py-5 pl-8 font-secondary text-3xl leading-tight text-navy sm:pl-12 sm:text-4xl">
          “The strongest decisions begin with the quality of the questions we ask.”
        </blockquote>
        <div>
          <h3 className="text-xl font-medium text-navy">Why he built the Academy</h3>
          <p className="mt-2 text-base leading-7 text-slate-600">To create a rigorous alternative to hype: education rooted in monetary history, entrepreneurship, technology and personal responsibility.</p>
        </div>
        <div className="mt-10 flex gap-5 border-l-4 border-blue-600 bg-blue-50 px-7 py-6 text-navy">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-blue-800" strokeWidth={1.7} />
          <div>
            <p className="font-semibold">Personal interest disclosure</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">[Approved virtual-asset holdings disclosure pending legal review]</p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
