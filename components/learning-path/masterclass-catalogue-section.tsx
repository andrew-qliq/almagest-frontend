import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import { cn } from "@/lib/utils";

const CATALOGUE = [
  { number: "01", title: "Foundation", kind: "Foundation", available: true },
  {
    number: "02",
    title: "Bitcoin & Monetary Systems",
    kind: "Master Class",
    available: true,
  },
  {
    number: "03",
    title: "Frontier Tech & Economic Singularity",
    kind: "Master Class",
    available: false,
  },
  {
    number: "04",
    title: "Future Master Class",
    kind: "[Topic to be announced]",
    available: false,
  },
  {
    number: "05",
    title: "Future Master Class",
    kind: "[Topic to be announced]",
    available: false,
  },
] as const;

export function MasterclassCatalogueSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(31,73,111,0.55),transparent_48%)]"
      />
      <SectionContainer className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-24">
          <div className="max-w-md">
            <Subtitle
              size="md"
              tone="white-muted"
              tracking="wider"
              weight="bold"
            >
              A Growing Catalogue
            </Subtitle>
            <h2 className="mt-5 font-heading text-[38px] font-medium leading-[1.1] tracking-[-0.045em] sm:text-[48px] lg:text-[40px]">
              More Master Classes will follow.
            </h2>
            <p className="mt-7 text-[15px] leading-8 text-white/50 sm:text-base">
              New specialisations will be added to the path over time. Subscribe
              to the briefing to hear first.
            </p>
            <Link
              href="/insights"
              className="group mt-9 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-400 transition-colors hover:text-gold"
            >
              Join the Briefing
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="border-t border-white/20">
            {CATALOGUE.map((course) => (
              <div
                key={course.number}
                className={cn(
                  "grid grid-cols-[44px_1fr_auto] items-center gap-5 border-b border-white/20 py-7 sm:grid-cols-[58px_1fr_auto]",
                  !course.available && "opacity-40",
                )}
              >
                <span className="font-secondary text-[25px] text-gold">
                  {course.number}
                </span>
                <div>
                  <h3
                    className={cn(
                      "font-secondary text-[20px] leading-tight sm:text-[23px]",
                      !course.available && "italic",
                    )}
                  >
                    {course.title}
                  </h3>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.1em] text-white/45">
                    {course.kind}
                  </p>
                </div>
                <span
                  className={cn(
                    "border px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em]",
                    course.available
                      ? "border-gold text-gold"
                      : "border-dashed border-white/45 text-white/60",
                  )}
                >
                  {course.available ? "Available" : "Coming"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
