export const metadata = {
  title: "Dashboard | Almagest Academy",
};

export default function MemberDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-sm text-zinc-500 mt-1">Pick up where you left off.</p>
      </div>

      {/* Course cards placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border rounded-xl p-5">
          <p className="text-xs text-zinc-400 uppercase tracking-wide mb-2">Foundation Course</p>
          <p className="font-medium">Continue Learning</p>
          <p className="text-sm text-zinc-500 mt-1">Lesson placeholder — to be connected.</p>
          {/* Progress bar placeholder */}
          <div className="mt-4 h-1.5 bg-zinc-100 rounded-full">
            <div className="h-1.5 bg-black rounded-full w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
