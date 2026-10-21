import Image from "next/image";
import { cn } from "@/lib/utils";
import { Subtitle } from "@/components/shared/subtitle";
import { ActionButton } from "@/components/shared/action-button";

interface HeroCta {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

interface PageHeroProps {
  /** Small all-caps subtitle above the main heading. */
  subtitle: string;
  /** Main heading — pass a string or JSX with <br /> for line breaks */
  heading: React.ReactNode;
  /** Optional subtitle / description paragraph */
  description?: string;
  /** CTA buttons rendered below the description */
  ctas?: HeroCta[];
  /** Small separator-joined tags below the CTAs */
  tags?: string[];
  /**
   * Section indicator shown in the right gutter.
   * Home uses "01", inner pages use their section number.
   */
  sectionNumber?: string;
  /** Bottom-right location tag */
  location?: string;
  /**
   * Path to a background image placed in /public.
   * Falls back to a dark gradient placeholder when omitted.
   */
  imageSrc?: string;
  /**
   * "full"    → fills the viewport below the public header
   * "compact" → min-h-[480px]             (inner pages)
   */
  size?: "full" | "compact";
  className?: string;
}

/**
 * Reusable full-bleed hero used on every page.
 *
 * Home:        size="full"    + description + ctas + tags
 * Inner pages: size="compact" + subtitle + heading only
 */
export function PageHero({
  subtitle,
  heading,
  description,
  ctas,
  tags,
  sectionNumber,
  location = "Dubai · Global",
  imageSrc,
  size = "full",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col bg-navy overflow-hidden",
        size === "full"
          ? "min-h-[calc(90vh-3.5rem)] lg:min-h-[90vh]"
          : "min-h-[300px] md:min-h-[380px]",
        className,
      )}
    >
      {/* ── Background ─────────────────────────────────────────── */}
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        ) : (
          /* Placeholder gradient until real photo is supplied */
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,#1d3a5f_0%,#0d1b2a_65%)]" />
        )}
        {/* Strong on the copy side, fading into a localized image reveal at the top-right. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_82%_76%_at_100%_0%,transparent_0%,rgba(13,27,42,0.08)_22%,rgba(13,27,42,0.40)_50%,rgba(13,27,42,0.72)_76%,rgba(13,27,42,0.90)_100%)]" />
        {/* A localized lower-left fade anchors the copy without tinting the right edge. */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_bottom_left,rgba(13,27,42,0.72)_0%,rgba(13,27,42,0.34)_46%,transparent_74%)]" />
      </div>

      {/* ── Thin gold rule at the top ──────────────────────────── */}
      <div className="relative z-10 h-px bg-linear-to-r from-gold/60 via-gold/30 to-transparent" />

      {/* ── Main content ───────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-16 lg:py-20">
          <div className="max-w-[714px]">
            <Subtitle
              size="md"
              tone="gold"
              tracking="widest"
              className="mb-7"
              weight="bold"
            >
              {subtitle}
            </Subtitle>

            {/* Heading */}
            <h1
              className={cn(
                "font-medium text-white tracking-tight",
                size === "full"
                  ? "text-[32px] leading-[1.06] md:text-[46px] lg:text-[56px]"
                  : "text-3xl leading-[1.05] md:text-5xl lg:text-[52px]",
              )}
            >
              {heading}
            </h1>

            {/* Description */}
            {description && (
              <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-6xl">
                {description}
              </p>
            )}

            {/* CTA buttons */}
            {ctas && ctas.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {ctas.map((cta) => (
                  <ActionButton
                    key={cta.label}
                    href={cta.href}
                    variant={cta.variant}
                    size="hero"
                    showArrow={cta.variant === "primary"}
                  >
                    {cta.label}
                  </ActionButton>
                ))}
              </div>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1">
                {tags.map((tag, i) => (
                  <span key={tag} className="flex items-center gap-3">
                    <span className="text-white/70 text-xs">{tag}</span>
                    {i < tags.length - 1 && (
                      <span className="text-white/70 text-xs" aria-hidden>
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ── Right-side section number ─────────────────────── */}
          {/* {sectionNumber && (
            <div
              aria-hidden
              className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 text-right pointer-events-none select-none"
            >
              <p className="text-[72px] lg:text-[88px] font-light text-gold/25 leading-none">
                {sectionNumber}
              </p>
            </div>
          )} */}
        </div>
      </div>

      {/* ── Location tag — bottom right ────────────────────────── */}
      {/* {location && (
        <div
          aria-hidden
          className="relative z-10 pb-6 pr-6 lg:pr-10 text-right pointer-events-none select-none"
        >
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25">
            {location}
          </p>
        </div>
      )} */}
    </section>
  );
}
