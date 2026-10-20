import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Consistent max-width wrapper used by every page section.
 */
export function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}
