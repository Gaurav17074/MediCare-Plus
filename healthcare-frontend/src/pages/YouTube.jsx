// src/pages/YouTube.jsx
export default function YouTube() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">YouTube</h1>
      <p className="text-slate-300 mb-6">Tutorials, doctor webinars and product demos.</p>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-slate-800/40 h-40" />
        <div className="rounded-lg bg-slate-800/40 h-40" />
        <div className="rounded-lg bg-slate-800/40 h-40" />
      </div>
    </div>
  );
}
