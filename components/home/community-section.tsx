import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const COMMUNITY_BENEFITS = [
  "WhatsApp member community",
  "Private educational gatherings",
  "A global, ambitious peer group",
] as const;

export function CommunitySection() {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="relative min-h-[400px] overflow-hidden sm:min-h-[520px] lg:min-h-[600px]">
            <Image
              src="/images/home/community-banner.jpg"
              alt="Members gathering for an educational event"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-center brightness-75"
            />
            <div className="absolute inset-0 bg-navy/15" />
          </div>

          <div className="max-w-xl">
            <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
              Beyond the Lessons
            </Subtitle>
            <h2 className="mt-7 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
              Learning becomes more valuable in conversation.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-slate-500 sm:text-base">
              Join a thoughtful international community through WhatsApp, member
              experiences and in-person Dubai gatherings.
            </p>

            <ul className="mt-8 space-y-5">
              {COMMUNITY_BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-4 text-navy/85"
                >
                  <Check
                    className="h-5 w-5 shrink-0 text-emerald-700"
                    strokeWidth={1.8}
                  />
                  <span className="text-base">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/community"
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-[4px] border border-blue-700 bg-blue-700 px-7 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-blue-800 hover:bg-blue-800 hover:shadow-[0_10px_28px_rgba(29,93,165,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
