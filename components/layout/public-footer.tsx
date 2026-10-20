import Link from "next/link";
import { FOOTER_LINK_GROUPS } from "@/lib/constants/navigation";

export function PublicFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-[1.65fr_repeat(4,1fr)] lg:gap-10">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="mb-8 flex w-fit items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-gold">
                <span className="font-heading text-[15px] font-bold leading-none text-gold">
                  QL
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Quantum Leap
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/55">
                  Academy
                </p>
              </div>
            </Link>
            <p className="max-w-xs font-heading text-[24px] font-medium leading-[1.2] tracking-[-0.035em] text-white">
              Knowledge for the forces shaping tomorrow.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
              Premium education for financial intelligence, entrepreneurship,
              leadership and frontier technology.
            </p>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                {group.title}
              </p>
              <ul className="space-y-4 text-sm text-white/45">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-7 text-xs leading-5 text-white/35 lg:flex-row lg:items-center lg:justify-between">
          <p>
            Quantum Leap Academy provides education only. Nothing on this site is
            investment, legal or tax advice.
          </p>
          <nav aria-label="Social media" className="flex flex-wrap gap-x-2 gap-y-1">
            {[
              "Instagram",
              "TikTok",
              "YouTube",
              "X",
              "Facebook",
              "WhatsApp",
            ].map((platform, index, platforms) => (
              <span key={platform} className="flex items-center gap-2">
                <Link
                  href="#"
                  className="transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  {platform}
                </Link>
                {index < platforms.length - 1 && <span aria-hidden>·</span>}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
