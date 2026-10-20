import { Earth, MessageCircle, UsersRound } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const COMMUNITY_FEATURES = [
  {
    icon: UsersRound,
    title: "Member discussion",
    description: "Considered conversation around each stage of the path.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp broadcasts",
    description: "Optional, editorial updates without the noise.",
  },
  {
    icon: Earth,
    title: "Dubai gatherings",
    description: "Future in-person sessions for members.",
  },
] as const;

export function CommunityExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_54%,rgba(20,58,97,0.58),transparent_52%)]"
      />
      <SectionContainer className="relative">
        <Subtitle size="md" tone="white-muted" tracking="widest" weight="bold">
          Community Experience
        </Subtitle>
        <h2 className="mt-5 max-w-5xl font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[40px]">
          Learn alongside people who think carefully.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:mt-16">
          {COMMUNITY_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="min-h-[280px] border border-white/15 bg-white/[0.018] p-8 transition-[background-color,border-color,transform] duration-500 ease-out hover:-translate-y-1 hover:border-gold/60 hover:bg-white/[0.04] sm:p-10"
              >
                <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                <h3 className="mt-14 font-heading text-[24px] font-medium tracking-[-0.025em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-sm text-[15px] leading-7 text-white/50">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
