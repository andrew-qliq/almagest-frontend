import Image from "next/image";
import Link from "next/link";

type LoginPageProps = {
  portalLabel: "Partner Login" | "Member Login";
  footer?: React.ReactNode;
};

function LoginLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3"
      aria-label="Almagest Academy home"
    >
      <span className="flex h-10 w-10 items-center justify-center border border-gold text-base font-bold text-gold">
        A
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-white">
          Almagest
        </span>
        <span className="mt-1 block text-[9px] uppercase tracking-[0.28em] text-white/55">
          Academy
        </span>
      </span>
    </Link>
  );
}

export function LoginPage({ portalLabel, footer }: LoginPageProps) {
  const inputPrefix = portalLabel.toLowerCase().replace(" ", "-");

  return (
    <main className="min-h-screen bg-navy text-white lg:grid lg:grid-cols-[56%_44%]">
      <div className="relative min-h-[34vh] overflow-hidden lg:min-h-screen">
        <Image
          src="/images/home/hero-banner.jpg"
          alt="Dubai skyline"
          fill
          priority
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy/10 to-navy lg:via-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent lg:from-navy/55" />
      </div>

      <section className="relative flex min-h-[66vh] items-center px-6 py-12 sm:px-12 lg:min-h-screen lg:px-14 xl:px-16">
        <div className="w-full max-w-[460px]">
          <LoginLogo />

          <div className="mt-16 sm:mt-20 lg:mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              {portalLabel}
            </p>
            <h1 className="mt-7 text-4xl font-medium tracking-[-0.035em] sm:text-[42px] sm:leading-[1.1]">
              Welcome back.
            </h1>
            <p className="mt-5 text-[15px] leading-6 text-white/55">
              Continue your work with clarity and focus.
            </p>

            <form className="mt-7 space-y-5">
              <div>
                <label
                  className="mb-2 block text-xs font-semibold"
                  htmlFor={`${inputPrefix}-email`}
                >
                  Email
                </label>
                <input
                  id={`${inputPrefix}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="h-12 w-full border border-white/20 bg-white px-4 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-xs font-semibold"
                  htmlFor={`${inputPrefix}-password`}
                >
                  Password
                </label>
                <input
                  id={`${inputPrefix}-password`}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="h-12 w-full border border-white/20 bg-white px-4 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                />
              </div>
              <button
                type="button"
                className="mt-1 h-12 w-full bg-gold px-6 text-xs font-bold uppercase tracking-[0.14em] text-navy transition hover:bg-[#dfc36e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Sign in
              </button>
            </form>

            {footer && (
              <div className="mt-5 text-xs leading-5 text-white/45">
                {footer}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
