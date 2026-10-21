import { Award, Play, UsersRound } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

type FeatureIcon = "award" | "play" | "users";

interface CourseFormatFeature {
  icon: FeatureIcon;
  title: string;
  description: string;
}

interface CourseFormatAccessSectionProps {
  features: CourseFormatFeature[];
  title?: string;
  eyebrow?: string;
}

const ICONS = { award: Award, play: Play, users: UsersRound };

export function CourseFormatAccessSection({
  features,
  title = "Designed to fit a serious schedule.",
  eyebrow = "Format & Access",
}: CourseFormatAccessSectionProps) {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24">
      <SectionContainer>
        <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
          {eyebrow}
        </Subtitle>
        <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
          {title}
        </h2>

        <div className="mt-12 grid border border-slate-200 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = ICONS[feature.icon];

            return (
              <article
                key={feature.title}
                className={`min-h-[250px] bg-white p-8 ${index > 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""}`}
              >
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.7} />
                <h3 className="mt-12 font-heading text-[22px] font-medium tracking-[-0.03em] text-navy">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[15px] leading-7 text-slate-500">
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
