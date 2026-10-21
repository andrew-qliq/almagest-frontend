import Image from "next/image";
import Link from "next/link";
import { Subtitle } from "@/components/shared/subtitle";
import type { InsightPreview } from "@/lib/constants/insights";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  insight: InsightPreview;
  className?: string;
}

export function InsightCard({ insight, className }: InsightCardProps) {
  return (
    <Link
      href={insight.href}
      className={cn(
        "group flex min-h-full transform-gpu flex-col border border-slate-200 bg-white shadow-[0_12px_34px_rgba(13,27,42,0.04)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2.5 hover:shadow-[0_28px_60px_rgba(13,27,42,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
        className,
      )}
    >
      <div className="relative aspect-[1.92/1] overflow-hidden bg-slate-100">
        <Image
          src={insight.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: insight.imagePosition }}
        />
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <Subtitle size="sm" tone="gold" tracking="wider" weight="bold">
          {insight.category}
        </Subtitle>
        <h2 className="mt-5 font-heading text-[24px] font-medium leading-[1.15] tracking-[-0.035em] text-navy transition-colors duration-300 group-hover:text-blue-700">
          {insight.title}
        </h2>
        <p className="mt-5 text-[15px] leading-7 text-slate-500">
          {insight.description}
        </p>
        <p className="mt-auto pt-6 text-xs text-slate-500">{insight.meta}</p>
      </div>
    </Link>
  );
}
