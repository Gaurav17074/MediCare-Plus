import { useEffect, useState } from "react";

export default function FullReportPage({ reportId, onBack }) {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("ai_consult_reports");
    const list = raw ? JSON.parse(raw) : [];

    const found = list[reportId];
    setReport(found || null);
  }, [reportId]);

  if (!report) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-slate-50">
        <button
          onClick={onBack}
          className="mb-4 text-blue-400 hover:text-blue-300 underline"
        >
          ← Back
        </button>
        <p>No report found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 text-slate-50">
      <button
        onClick={onBack}
        className="mb-6 text-blue-400 hover:text-blue-300 underline"
      >
        ← Back to Reports
      </button>

      <h1 className="text-3xl font-bold mb-4">AI Health Report</h1>
      <p className="text-slate-400 mb-6">Generated on {report.createdAt.slice(0, 10)}</p>

      <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 mb-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-slate-300 leading-relaxed">{report.summary}</p>
      </div>

      {report.triage && (
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Triage Level</h2>
          <p className="text-lg font-bold text-emerald-300">{report.triage}</p>
        </div>
      )}

      {report.redFlags?.length > 0 && (
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Red-Flag Symptoms</h2>
          <ul className="list-disc pl-6 space-y-1 text-slate-300">
            {report.redFlags.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {report.department && (
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Recommended Department</h2>
          <p className="text-slate-300">{report.department}</p>
        </div>
      )}

      {/* PDF button */}
      <button
        onClick={() => window.print()}
        className="mt-4 px-5 py-2 rounded-full bg-blue-600 text-slate-50 font-semibold hover:bg-blue-500"
      >
        Download PDF
      </button>
    </div>
  );
}
