export const metadata = {
  title: "Member Login | Almagest Academy",
};

export default function MembersLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="w-full max-w-sm bg-white border rounded-2xl p-8 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Member Login</h1>
          <p className="mt-1 text-sm text-zinc-500">Access your courses and progress.</p>
        </div>
        {/* Content placeholder — email/password form, forgot password link */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white rounded-full py-2.5 text-sm font-medium"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-xs text-zinc-400">
          Not a member?{" "}
          <a href="/courses/foundation" className="underline">Enrol now</a>
        </p>
      </div>
    </div>
  );
}
