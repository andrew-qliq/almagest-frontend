import { cn } from "@/lib/utils";

export type SubtitleSize = "xs" | "sm" | "md" | "lg";
export type SubtitleTone =
  | "gold"
  | "white"
  | "white-muted"
  | "navy"
  | "muted"
  | "inherit";
export type SubtitleTracking = "normal" | "wide" | "wider" | "widest";
export type SubtitleWeight = "medium" | "semibold" | "bold";

interface SubtitleProps {
  children: React.ReactNode;
  /** Controls the label's type scale without one-off text-size utilities. */
  size?: SubtitleSize;
  /** Semantic brand color for light, dark, and image-backed sections. */
  tone?: SubtitleTone;
  /** Letter spacing can be tuned independently from size. */
  tracking?: SubtitleTracking;
  weight?: SubtitleWeight;
  uppercase?: boolean;
  as?: "p" | "span" | "div";
  className?: string;
}

const sizeClasses: Record<SubtitleSize, string> = {
  xs: "text-[10px]",
  sm: "text-[11px]",
  md: "text-xs",
  lg: "text-sm",
};

const toneClasses: Record<SubtitleTone, string> = {
  gold: "text-gold",
  white: "text-white",
  "white-muted": "text-white/65",
  navy: "text-navy",
  muted: "text-slate-500",
  inherit: "text-inherit",
};

const trackingClasses: Record<SubtitleTracking, string> = {
  normal: "tracking-normal",
  wide: "tracking-[0.18em]",
  wider: "tracking-[0.25em]",
  widest: "tracking-[0.3em]",
};

const weightClasses: Record<SubtitleWeight, string> = {
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

/** Reusable section subtitle with explicit typography and color variants. */
export function Subtitle({
  children,
  size = "sm",
  tone = "gold",
  tracking = "wider",
  weight = "semibold",
  uppercase = true,
  as: Component = "p",
  className,
}: SubtitleProps) {
  return (
    <Component
      data-slot="subtitle"
      className={cn(
        "leading-none",
        sizeClasses[size],
        toneClasses[tone],
        trackingClasses[tracking],
        weightClasses[weight],
        uppercase && "uppercase",
        className,
      )}
    >
      {children}
    </Component>
  );
}
