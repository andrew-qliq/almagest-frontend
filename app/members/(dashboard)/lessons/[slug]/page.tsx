export default function LessonPlayerPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Lesson: {params.slug}</h1>
      {/* Content placeholder — video player, lesson notes, downloads */}
      <div className="aspect-video bg-zinc-200 rounded-xl flex items-center justify-center">
        <p className="text-zinc-400 text-sm">Video player placeholder</p>
      </div>
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-medium mb-2">Lesson Notes</h2>
        <p className="text-sm text-zinc-500">Notes and downloads placeholder.</p>
      </div>
    </div>
  );
}
