export const metadata = {
  title: "Foundation Course | Almagest Academy",
};

export default function FoundationCoursePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Foundation Course</h1>
      <p className="mt-4 text-zinc-600 max-w-2xl">
        The course everyone starts with. Build your understanding of digital assets and
        blockchain from the ground up.
      </p>
      {/* Content placeholder — curriculum, price, buy CTA */}
      <a href="/checkout/foundation" className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
        Enrol Now
      </a>
    </div>
  );
}
