import { BookOpen, Globe2, UsersRound } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const PILLARS = [
  {
    icon: BookOpen,
    title: "Education",
    description: "Structured, deliberate and self-paced.",
  },
  {
    icon: UsersRound,
    title: "Community",
    description: "High-quality discussion and connection.",
  },
  {
    icon: Globe2,
    title: "Global outlook",
    description: "UAE rooted, internationally relevant.",
  },
] as const;

export function AcademyPillarsSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_48%,rgba(31,73,111,0.46),transparent_54%)]"
      />
      <SectionContainer className="relative">
        <div className="max-w-3xl">
          <Subtitle size="md" tone="white-muted" tracking="wider" weight="bold">
            What Defines Us
          </Subtitle>
          <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[40px]">
            Built for serious learning.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex min-h-[250px] transform-gpu flex-col border border-white/15 p-8 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-gold/45 hover:bg-white/[0.035]"
            >
              <Icon className="h-7 w-7 text-gold" strokeWidth={1.7} />
              <div className="mt-auto">
                <h3 className="font-heading text-[22px] font-medium tracking-[-0.03em] text-white">
                  {title}
                </h3>
                <p className="mt-1 text-[15px] leading-7 text-white/50">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
