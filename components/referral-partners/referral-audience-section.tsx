import { Check, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const REQUIREMENTS = [
  "A valid permit is uploaded during application.",
  "Staff verify the document before any link or code is issued.",
  "No promotion may start before verification is complete.",
  "Permit status is monitored; lapsed permits pause the relationship.",
];

const STEPS = [
  ["Apply", "Clear guidance is provided at each stage."],
  ["Permit verified", "Staff review submitted documentation."],
  ["Receive link and code", "Clear guidance is provided at each stage."],
  ["Earn on qualifying sales", "Clear guidance is provided at each stage."],
];

export function ReferralAudienceSection() {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24">
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <Subtitle size="md" className="mb-7">Who it is for</Subtitle>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-navy sm:text-4xl">
              Built for people with an audience worth respecting.
            </h2>
          </div>
          <div className="border-l border-gold pl-8 text-base leading-7 text-slate-500">
            <p>Creators, educators, community owners and professional networks who can introduce the Academy responsibly to people seeking serious education.</p>
            <p className="mt-6">Not intended for hype, signals or incentive-driven promotion.</p>
          </div>
        </div>

        <div className="mt-12 flex gap-5 border-l-4 border-amber-600 bg-amber-50 px-7 py-6 text-amber-950">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.7} />
          <div>
            <h3 className="font-semibold">UAE Advertiser Permit required</h3>
            <p className="mt-2 text-sm leading-6 text-amber-900/80">The relevant UAE advertiser permit must be verified before any commission relationship begins. Commission terms remain pending approval.</p>
          </div>
        </div>

        <ul className="mt-8 grid gap-5 text-sm text-navy sm:text-base">
          {REQUIREMENTS.map((item) => (
            <li key={item} className="flex items-start gap-4"><Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />{item}</li>
          ))}
        </ul>

        <div className="mt-14 grid border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([title, description], index) => (
            <article key={title} className="min-h-[190px] border-b border-slate-200 px-8 py-9 sm:border-r lg:border-b-0 lg:last:border-r-0">
              <p className="font-secondary text-2xl text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-10 text-lg font-medium text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
