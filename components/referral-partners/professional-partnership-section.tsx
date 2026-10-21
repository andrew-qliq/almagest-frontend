import { CircleDollarSign, ShieldCheck, TrendingUp } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const FEATURES = [
  { title: "Commission", description: "[Approved rates and qualification rules pending]", icon: CircleDollarSign },
  { title: "Dashboard", description: "Track clicks, attributed sales and payout status.", icon: TrendingUp },
  { title: "Compliance", description: "Permit verification is built into the relationship.", icon: ShieldCheck },
];

export function ProfessionalPartnershipSection() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <SectionContainer>
        <Subtitle tone="white-muted" size="md" className="mb-7">A professional partnership</Subtitle>
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Built for trust, transparency and compliance.</h2>
        <div className="mt-14 grid md:grid-cols-3">
          {FEATURES.map(({ title, description, icon: Icon }) => (
            <article key={title} className="min-h-[230px] border border-white/20 p-8 md:border-r-0 md:last:border-r">
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.8} />
              <h3 className="mt-12 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{description}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
