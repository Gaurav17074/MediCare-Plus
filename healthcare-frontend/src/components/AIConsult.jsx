import { useState } from "react";

export default function AIConsult() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [risk, setRisk] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setAnswer("");
    setRisk("");

    try {
      // yaha backend connect karega, abhi demo response hai
      // const res = await fetch("http://localhost:5000/ask", { ... });
      // const data = await res.json();
      // setAnswer(data.answer);

      setTimeout(() => {
        setAnswer(
          "Based on your description this looks like a mild condition. Keep monitoring your symptoms, stay hydrated, and avoid self-medication. If pain increases, fever stays above 101°F for 48 hours, or breathing worsens — visit emergency or call your doctor."
        );
        setRisk("Low to Medium · Non-emergency");
        setLoading(false);
      }, 1200);
    } catch (e) {
      setAnswer("Server error. Please check your backend connection.");
      setLoading(false);
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
          AI Symptom Checker
        </h2>
        <p className="text-sm text-slate-400">
          Explain your symptoms like you talk to a friend. We’ll summarize the
          risk and next steps.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr,1fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <textarea
            className="min-h-[150px] w-full rounded-xl border border-slate-700 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-500"
            placeholder="Example: I have a dry cough since 3 days, slight chest discomfort while climbing stairs, and mild fever at night..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] text-slate-500">
              Avoid sharing name, phone, or ID numbers. This is not a
              replacement for emergency care.
            </p>
            <button
              onClick={handleAsk}
              className="rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-900"
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Ask AI"}
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              AI Assessment
            </p>

            {loading && (
              <p className="mt-3 text-sm text-blue-400">
                Reading your symptoms, scoring risk factors, and generating a
                safe suggestion…
              </p>
            )}

            {!loading && answer && (
              <>
                {risk && (
                  <p className="mt-3 inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    {risk}
                  </p>
                )}
                <p className="mt-3 text-sm text-slate-100">{answer}</p>
              </>
            )}

            {!loading && !answer && (
              <p className="mt-3 text-sm text-slate-400">
                Your summary will appear here with triage level, red-flag
                symptoms to watch for, and recommended department.
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-[11px] text-slate-400">
            ⚠ Disclaimer: This is a demo AI interface and{" "}
            <span className="font-semibold text-slate-200">
              does not provide medical diagnosis.
            </span>{" "}
            Always consult a licensed doctor before starting or stopping any
            treatment.
          </div>
        </div>
      </div>
    </section>
  );
}
