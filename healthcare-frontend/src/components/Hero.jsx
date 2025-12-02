export default function Hero({ onConsultClick }) {
  return (
    <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          • AI Powered • NABH-style Flow • 24x7
        </span>

        <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Your personal{" "}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-300 bg-clip-text text-transparent">
            AI Health Companion
          </span>{" "}
          for instant symptom analysis & doctor consults.
        </h1>

        <p className="max-w-xl text-sm text-slate-300 sm:text-base">
          Describe your symptoms in simple language and let our AI triage engine
          guide you with next steps, risk level, and the right specialist to
          consult — without replacing real doctors.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onConsultClick}
            className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:bg-blue-600"
          >
            Start AI Consultation
          </button>
          <div className="flex flex-col text-xs text-slate-300">
            <span>⏱ Avg response time: &lt; 5 seconds</span>
            <span>🩺 50+ verified partner doctors</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-xs text-slate-400">
          <div>
            <p className="text-sm font-semibold text-slate-100">98.2%</p>
            <p>Users feel better informed</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-100">HIPAA-ish</p>
            <p>Style data privacy by design*</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-xl shadow-blue-500/20">
          <p className="text-xs font-medium text-slate-400">Live AI Preview</p>

          <div className="mt-3 space-y-3 text-xs">
            <div className="flex justify-end">
              <div className="max-w-[70%] rounded-2xl bg-blue-600 px-3 py-2 text-right text-slate-50">
                I have a headache and slight fever since last night.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl bg-slate-800 px-3 py-2 text-slate-100">
                Thanks for sharing. 👋  
                Based on your symptoms this looks like a{" "}
                <span className="font-semibold text-emerald-300">
                  mild viral infection
                </span>
                . Watch for:
                <ul className="mt-1 list-disc pl-4 text-xs text-slate-300">
                  <li>High fever (&gt; 101°F) lasting &gt; 48 hrs</li>
                  <li>Severe neck pain / confusion</li>
                  <li>Breathing difficulty or chest pain</li>
                </ul>
                If any of these appear, consult emergency care. Otherwise,
                hydrate well, rest, and avoid self-medicating with antibiotics.
              </div>
            </div>
          </div>

          <p className="mt-3 text-[10px] text-slate-500">
            *This demo does not replace professional medical advice. Always
            consult a doctor for diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
}
