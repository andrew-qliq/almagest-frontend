import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

const actionButtonVariants = cva(
  "group inline-flex shrink-0 items-center justify-center rounded-[4px] border font-bold uppercase leading-none tracking-[0.16em] transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
  {
    variants: {
      variant: {
        primary:
          "border-gold bg-gold text-navy shadow-none hover:-translate-y-0.5 hover:bg-[#d6b75c] hover:shadow-[0_8px_22px_rgba(201,168,76,0.30)]",
        secondary:
          "border-white/55 bg-transparent text-white hover:-translate-y-0.5 hover:border-gold hover:text-gold",
      },
      size: {
        nav: "min-h-11 px-5 text-[10px]",
        hero: "min-h-12 px-6 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "hero",
    },
  },
);

interface ActionButtonProps
  extends
    Omit<ComponentProps<typeof Link>, "children" | "className">,
    VariantProps<typeof actionButtonVariants> {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
}

export function ActionButton({
  children,
  variant = "primary",
  size = "hero",
  showArrow = false,
  className,
  ...props
}: ActionButtonProps) {
  return (
    <Link
      data-slot="action-button"
      className={cn(actionButtonVariants({ variant, size }), className)}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <ArrowRightIcon size={"16"} className="ml-2" />}
    </Link>
  );
}

export { actionButtonVariants };
