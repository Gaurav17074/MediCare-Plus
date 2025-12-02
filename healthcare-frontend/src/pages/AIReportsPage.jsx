// src/pages/AIReportsPage.jsx
export default function AIReportsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">AI Consultation Reports</h1>
      <p className="text-slate-300 mb-6">
        View and download your AI-generated assessment summaries, triage level,
        recommended next steps, and suggested department.
      </p>

      <div className="space-y-4">
        <div className="rounded-lg bg-slate-900/60 p-4 border border-slate-800">
          <p className="text-sm text-slate-400">Report • 2025-11-29</p>
          <p className="mt-2 text-slate-100 font-semibold">Mild viral infection — low risk</p>
        </div>

        <div className="rounded-lg bg-slate-900/60 p-4 border border-slate-800">
          <p className="text-sm text-slate-400">Report • 2025-10-05</p>
          <p className="mt-2 text-slate-100 font-semibold">Allergic rhinitis — follow-up suggested</p>
        </div>
      </div>

      <p className="text-slate-400 mt-6">You can export reports to PDF and share them with your doctor.</p>
    </div>
  );
}
