import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Globe2, Users } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const GATHERING_DETAILS = [
  { icon: CalendarDays, text: "Next gathering: Date pending" },
  { icon: Globe2, text: "Venue: Dubai venue pending" },
  { icon: Users, text: "Format: Talk, discussion and networking" },
] as const;

export function GatheringsSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_46%,rgba(31,73,111,0.45),transparent_48%)]"
      />
      <SectionContainer>
        <div className="relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="order-2 max-w-xl lg:order-1">
            <Subtitle
              size="md"
              tone="white-muted"
              tracking="wider"
              weight="bold"
            >
              Dubai Gatherings
            </Subtitle>
            <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[40px]">
              Ideas become stronger
              <br /> in the same room.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/55 sm:text-base">
              Small, private, educational gatherings in Dubai for members and
              invited guests: structured talks, open discussion and time to meet
              people who think carefully.
            </p>
            <ul className="mt-8 space-y-5">
              {GATHERING_DETAILS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4 text-white/65">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    strokeWidth={1.8}
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-10 inline-flex h-12 items-center justify-center border border-white/45 px-7 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Register Interest
            </Link>
          </div>

          <div className="relative order-1 min-h-[340px] overflow-hidden sm:min-h-[460px] lg:order-2 lg:min-h-[540px]">
            <Image
              src="/images/home/community-banner.jpg"
              alt="Audience at a private educational gathering"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-navy/10" />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
