// src/pages/HealthCheckups.jsx
export default function HealthCheckups() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Health Checkups & Packages</h1>
      <p className="text-slate-300 mb-6">
        Preventive health packages for men, women and senior citizens. Select from
        standard, advanced and executive checkups.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-slate-900/50 p-4 border border-slate-800">
          <h3 className="font-semibold">Basic</h3>
          <p className="text-slate-400 text-sm">BP, Blood Sugar, CBC, Urine</p>
        </div>

        <div className="rounded-xl bg-slate-900/50 p-4 border border-slate-800">
          <h3 className="font-semibold">Comprehensive</h3>
          <p className="text-slate-400 text-sm">Lipid profile, LFT, KFT, Thyroid</p>
        </div>

        <div className="rounded-xl bg-slate-900/50 p-4 border border-slate-800">
          <h3 className="font-semibold">Executive</h3>
          <p className="text-slate-400 text-sm">Includes cardiac and imaging</p>
        </div>
      </div>
    </div>
  );
}
