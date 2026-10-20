import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ActionButton } from "@/components/shared/action-button";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { PUBLIC_NAV_LINKS } from "@/lib/constants/navigation";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-navy lg:absolute lg:inset-x-0 lg:bg-transparent">
      <nav className="mx-auto flex h-14 max-w-7xl items-center px-6 lg:h-[88px] lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-3.5">
          <div className="flex h-10 w-10 items-center justify-center border border-gold">
            <span className="text-[15px] font-bold leading-none tracking-tight text-gold">
              A
            </span>
          </div>
          <div className="leading-tight">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Almagest
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/55">
              Academy
            </p>
          </div>
        </Link>

        <div className="ml-auto hidden items-center gap-5 lg:flex xl:gap-7">
          <ul className="flex items-center">
            {PUBLIC_NAV_LINKS.map((item) => (
              <li key={item.label} className="group/menu relative">
                <Link
                  href={item.href}
                  aria-haspopup={item.children ? "menu" : undefined}
                  className="flex items-center gap-1.5 px-3 py-3 text-[13px] font-medium tracking-normal text-white/80 transition-colors duration-200 hover:text-gold group-hover/menu:text-gold group-focus-within/menu:text-gold xl:px-3.5"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className="h-3 w-3 text-white/50 transition-[color,transform] duration-300 group-hover/menu:rotate-180 group-hover/menu:text-gold group-focus-within/menu:rotate-180 group-focus-within/menu:text-gold"
                      strokeWidth={2}
                    />
                  )}
                </Link>

                {item.children && (
                  <div
                    className={`pointer-events-none absolute top-full z-50 w-[300px] translate-y-2 pt-3 opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/menu:pointer-events-auto group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:pointer-events-auto group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100 ${item.dropdownAlign === "right" ? "right-0" : "left-0"}`}
                  >
                    <div
                      role="menu"
                      aria-label={`${item.label} menu`}
                      className="border border-white/10 bg-[#071c32] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.30)]"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="block px-4 py-3.5 text-[13px] font-medium text-white/75 transition-[color,background-color,padding] duration-200 hover:bg-[#102b4b] hover:pl-5 hover:text-gold focus-visible:bg-[#102b4b] focus-visible:text-gold focus-visible:outline-none"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <ActionButton href="/courses/foundation" variant="primary" size="nav">
            Start the Foundation
          </ActionButton>
        </div>

        <MobileNavigation />
      </nav>
    </header>
  );
}
