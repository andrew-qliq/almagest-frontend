import Link from "next/link";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8f5ef]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-3.5 text-navy">
            <span className="flex h-10 w-10 items-center justify-center border border-gold font-secondary text-lg text-gold">
              A
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-[0.2em]">
                Almagest
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.28em] text-slate-500">
                Academy
              </span>
            </span>
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
