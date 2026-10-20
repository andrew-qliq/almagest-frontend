export const metadata = {
  title: "Partner Dashboard | Almagest Academy",
};

export default function PartnerDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Partner Dashboard</h1>
        <p className="text-sm text-zinc-500 mt-1">
          Figures update on a schedule, not in real time.
        </p>
      </div>

      {/* Stats placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-xl p-5">
          <p className="text-xs text-zinc-400 uppercase tracking-wide">Sales This Month</p>
          <p className="mt-2 text-3xl font-semibold">—</p>
        </div>
        <div className="bg-white border rounded-xl p-5">
          <p className="text-xs text-zinc-400 uppercase tracking-wide">Commission Earned</p>
          <p className="mt-2 text-3xl font-semibold">—</p>
        </div>
        <div className="bg-white border rounded-xl p-5">
          <p className="text-xs text-zinc-400 uppercase tracking-wide">All-Time Sales</p>
          <p className="mt-2 text-3xl font-semibold">—</p>
        </div>
      </div>

      {/* Month comparison chart placeholder */}
      <div className="bg-white border rounded-xl p-5">
        <p className="font-medium mb-3">Month-on-Month</p>
        <p className="text-sm text-zinc-400">Chart placeholder — to be connected.</p>
      </div>
    </div>
  );
}
