// src/pages/FAQsPage.jsx
export default function FAQsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>

      <div className="space-y-4">
        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
          <h3 className="font-semibold">Is AI diagnosis accurate?</h3>
          <p className="text-slate-400">AI provides preliminary assessment, not a final diagnosis.</p>
        </div>

        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
          <h3 className="font-semibold">Is my data safe?</h3>
          <p className="text-slate-400">We use encryption and best practices to protect your data.</p>
        </div>
      </div>
    </div>
  );
}
