export default function Press() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Press & Media</h1>

      <p className="text-slate-300 mb-4">
        HealthCare AI has been featured in multiple leading publications for its
        breakthrough work in AI-driven healthcare.
      </p>

      <div className="space-y-4">
        <div className="p-4 bg-slate-800/40 rounded-xl">
          <h3 className="font-semibold">Times Health – 2025</h3>
          <p className="text-slate-400">“A revolutionary step in AI triage.”</p>
        </div>

        <div className="p-4 bg-slate-800/40 rounded-xl">
          <h3 className="font-semibold">Tech Insights – 2025</h3>
          <p className="text-slate-400">
            “Smart, fast, and medically accurate — the future is here.”
          </p>
        </div>

        <div className="p-4 bg-slate-800/40 rounded-xl">
          <h3 className="font-semibold">Health Today – 2025</h3>
          <p className="text-slate-400">
            “Bridging the gap between patients and specialists.”
          </p>
        </div>
      </div>
    </div>
  );
}
