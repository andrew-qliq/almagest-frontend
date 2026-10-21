import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const METRICS = [["Clicks", "1,248"], ["Attributed sales", "[Sample]"], ["Payout status", "Pending"]];

export function PartnerDashboardPreviewSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <Subtitle size="md" className="mb-7">Dashboard preview</Subtitle>
        <h2 className="text-3xl font-medium tracking-tight text-navy sm:text-4xl">See your performance clearly.</h2>
        <p className="mt-5 text-base text-slate-500">Illustrative preview with sample figures.</p>
        <div className="mt-14 grid border border-slate-200 md:grid-cols-3">
          {METRICS.map(([label, value]) => (
            <article key={label} className="min-h-[210px] border-b border-slate-200 px-8 py-10 md:border-b-0 md:border-r md:last:border-r-0">
              <h3 className="text-xl font-medium text-navy">{label}</h3>
              <p className="mt-3 text-3xl font-light text-slate-500">{value}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
