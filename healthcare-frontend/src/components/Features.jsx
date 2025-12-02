const items = [
  {
    title: "AI Triage & Risk Level",
    desc: "Get instant low/medium/high risk classification and recommended next steps.",
    icon: "⚡",
  },
  {
    title: "Specialist Routing",
    desc: "We map your symptoms to the right specialist department automatically.",
    icon: "🩺",
  },
  {
    title: "Visit & Teleconsult History",
    desc: "Keep a clean timeline of previous consults, prescriptions, and notes.",
    icon: "📁",
  },
  {
    title: "24x7 Symptom Checker",
    desc: "No queues. Ask your doubts anytime — especially for non-emergency cases.",
    icon: "🌙",
  },
];

export default function Features() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            Why patients love MediCare AI
          </h2>
          <p className="text-sm text-slate-400">
            Built to work with hospitals, not replace them.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/80 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/30"
          >
            <div className="mb-3 text-2xl">{f.icon}</div>
            <h3 className="text-sm font-semibold text-slate-50">{f.title}</h3>
            <p className="mt-1 text-xs text-slate-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
