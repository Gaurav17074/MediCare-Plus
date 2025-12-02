// src/pages/HelpCenter.jsx
export default function HelpCenter() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Help Center</h1>
      <p className="text-slate-300 mb-6">
        Find help articles, guides and troubleshooting steps for common issues.
      </p>

      <ul className="list-disc pl-6 text-slate-300 space-y-2">
        <li>How to book a consult</li>
        <li>Managing your reports</li>
        <li>Payment and refunds</li>
      </ul>
    </div>
  );
}
