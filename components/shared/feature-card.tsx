import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  /**
   * "light" — white card on cream background (Premise / Method sections)
   * "dark"  — dark card on navy background (Audience / Who-it's-for sections)
   */
  variant?: "light" | "dark";
  /** Draws a gold accent border on the top edge (used on the active/featured card) */
  highlighted?: boolean;
  /** Short landscape treatment used by cards inside wide inset panels. */
  compact?: boolean;
  className?: string;
}

/**
 * Reusable numbered feature card.
 * Used in PremiseSection (light) and AudienceSection (dark).
 * Also suitable for course benefit lists and about-page value cards.
 */
export function FeatureCard({
  icon: Icon,
  number,
  title,
  description,
  variant = "light",
  highlighted = false,
  compact = false,
  className,
}: FeatureCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden border transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out",
        compact
          ? "min-h-[150px] p-5 sm:min-h-[160px] sm:p-6"
          : "min-h-[280px] p-7 sm:p-8 lg:min-h-[310px] lg:p-9",
        isDark
          ? "border-white/15 bg-[linear-gradient(105deg,rgba(255,255,255,0.012)_0%,rgba(255,255,255,0.055)_100%)] text-white hover:border-gold"
          : "border-slate-200 bg-white text-navy hover:-translate-y-1 hover:border-gold hover:bg-[#fffdf7] hover:shadow-[0_18px_45px_rgba(13,27,42,0.08)]",
        highlighted
          ? "border-gold"
          : "",
        className,
      )}
    >
      {!isDark && (
        <span
          aria-hidden
          className={cn(
            "absolute left-0 top-0 h-[3px] bg-gold transition-[width] duration-300 ease-out group-hover:w-full",
            highlighted ? "w-full" : "w-24",
          )}
        />
      )}

      {/* Row: icon + number */}
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105",
            compact ? "h-9 w-9" : "h-12 w-12",
            isDark ? "bg-transparent" : "bg-navy",
          )}
        >
          <Icon className={cn("text-gold", compact ? "h-4 w-4" : "h-[18px] w-[18px]")} />
        </div>
        <span
          className={cn(
            "select-none font-heading font-semibold leading-none tabular-nums transition-colors duration-300",
            compact ? "text-lg" : "text-[42px]",
            isDark ? "text-gold/50 group-hover:text-gold/80" : "text-gold/30 group-hover:text-gold/65",
          )}
        >
          {number}
        </span>
      </div>

      {/* Text */}
      <div className={compact ? "pt-5" : "pt-12"}>
        <h3
          className={cn(
            "font-heading font-semibold leading-tight tracking-[-0.02em]",
            compact ? "mb-2 text-[17px]" : "mb-3 text-[22px]",
            isDark ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "max-w-xs",
            compact ? "text-[13px] leading-5" : "text-[15px] leading-6",
            isDark ? "text-white/55" : "text-slate-500",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
