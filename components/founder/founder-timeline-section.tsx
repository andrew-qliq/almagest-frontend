import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const MILESTONES = ["Early career", "Entrepreneurship", "Education and research", "Almagest Academy"];

export function FounderTimelineSection() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <SectionContainer>
        <Subtitle tone="white-muted" size="md" className="mb-7">Career timeline</Subtitle>
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Milestones pending verification.</h2>
        <div className="mt-14 grid border-y border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {MILESTONES.map((milestone, index) => (
            <article key={milestone} className="min-h-[190px] border-b border-white/20 px-7 py-9 last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0">
              <p className="font-secondary text-2xl text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-9 text-base font-semibold">{milestone}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">[Verified dates and details pending]</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
