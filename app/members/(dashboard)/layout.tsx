import Link from "next/link";

const navItems = [
  { href: "/members/dashboard", label: "Dashboard" },
  { href: "/members/courses", label: "My Courses" },
  { href: "/members/resources", label: "Resources" },
  { href: "/members/progress", label: "Progress & Certificate" },
  { href: "/members/account", label: "Account" },
];

export default function MembersDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/" className="font-semibold text-sm">
            Almagest Academy
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-3 pb-4 border-t pt-4">
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 w-full text-left">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b flex items-center justify-between px-6 bg-white">
          <span className="text-sm text-zinc-500">Member Area</span>
          {/* TODO: user avatar / notification bell */}
        </header>
        <main className="flex-1 p-6 bg-zinc-50">{children}</main>
      </div>
    </div>
  );
}
