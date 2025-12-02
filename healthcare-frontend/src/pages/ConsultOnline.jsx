// src/pages/ConsultOnline.jsx
export default function ConsultOnline() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Consult Online</h1>
      <p className="text-slate-300 mb-6">
        Book a video consultation with a verified specialist. Choose timeslots,
        upload previous reports, and join securely.
      </p>

      <div className="rounded-xl bg-slate-900/50 p-6 border border-slate-800">
        <h3 className="font-semibold mb-2">How it works</h3>
        <ol className="list-decimal pl-6 text-slate-300 space-y-2">
          <li>Pick a specialist and timeslot</li>
          <li>Share symptoms & previous reports</li>
          <li>Join the secure video link at your scheduled time</li>
        </ol>
      </div>

      <p className="text-slate-400 mt-6">For urgent cases, prefer in-person visit or emergency care.</p>
    </div>
  );
}
