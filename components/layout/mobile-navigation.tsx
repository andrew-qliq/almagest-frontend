"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { ActionButton } from "@/components/shared/action-button";
import { PUBLIC_NAV_LINKS } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="ml-auto lg:hidden">
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-sheet"
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/15 text-white transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <Menu className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 z-[60] bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      />

      <aside
        id="mobile-navigation-sheet"
        aria-hidden={!isOpen}
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[88vw] max-w-[380px] flex-col border-l border-white/10 bg-navy shadow-[-24px_0_60px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-end border-b border-white/10 px-6">
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto px-6 py-5"
          aria-label="Mobile navigation"
        >
          <ul className="divide-y divide-white/10">
            {PUBLIC_NAV_LINKS.map((item) => {
              const isExpanded = expandedSection === item.label;

              return (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setExpandedSection(isExpanded ? null : item.label)
                        }
                        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-white/85 transition-colors hover:text-gold"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-[color,transform] duration-300",
                            isExpanded
                              ? "rotate-180 text-gold"
                              : "text-white/45",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isExpanded
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="mb-4 border-l border-gold/50 pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMenu}
                                tabIndex={isExpanded && isOpen ? 0 : -1}
                                className="block py-2.5 text-[13px] text-white/60 transition-[color,padding] duration-200 hover:pl-1 hover:text-gold"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-4 text-sm font-medium text-white/85 transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-white/10 p-6">
          <ActionButton
            href="/courses/foundation"
            variant="primary"
            size="hero"
            onClick={closeMenu}
            className="w-full"
          >
            Start the Foundation
          </ActionButton>
        </div>
      </aside>
    </div>
  );
}
