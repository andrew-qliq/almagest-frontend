import { Earth, ShieldCheck, BookOpen, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  label: string;
  description: string;
}

const ITEMS: TrustItem[] = [
  {
    icon: Earth,
    label: "Dubai-Based",
    description: "Teaching from the UAE",
  },
  {
    icon: ShieldCheck,
    label: "Education Only",
    description: "No investment advice",
  },
  {
    icon: BookOpen,
    label: "Self-Paced Video",
    description: "Learn on your own schedule",
  },
  {
    icon: UsersRound,
    label: "In-Person Community",
    description: "Learn alongside peers",
  },
];

/**
 * Four-column trust / credential strip that sits directly below the hero.
 * Reusable: pass custom items if needed on other pages.
 */
export function TrustBar({ items = ITEMS }: { items?: TrustItem[] }) {
  return (
    <div className="border-t-1 border-gold bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="group flex items-center gap-4 border-b border-white/10 px-4 py-6 transition-colors duration-300 ease-out last:border-b-0 hover:bg-white/[0.045] sm:px-5 md:border-b-0 md:border-l md:first:border-l-0 lg:min-h-[116px] lg:px-7"
            >
              {/* Icon ring */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-out group-hover:scale-105 group-hover:border-gold group-hover:bg-gold group-hover:text-navy group-hover:shadow-[0_8px_24px_rgba(201,168,76,0.18)] lg:h-12 lg:w-12">
                <item.icon className="h-[19px] w-[19px]" strokeWidth={1.6} />
              </div>

              {/* Text */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 group-hover:text-gold lg:text-xs">
                  {item.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/45 transition-colors duration-300 group-hover:text-white/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
