export default function QuizPage({
  params,
}: {
  params: { courseSlug: string };
}) {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold">Course Quiz</h1>
        <p className="text-sm text-zinc-500 mt-1">
          Complete the quiz for: {params.courseSlug}
        </p>
      </div>
      {/* Content placeholder — quiz questions, submit button */}
      <div className="bg-white border rounded-xl p-5">
        <p className="text-sm text-zinc-500">Quiz questions placeholder — to be connected.</p>
      </div>
    </div>
  );
}
