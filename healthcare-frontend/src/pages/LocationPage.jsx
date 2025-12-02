// src/pages/LocationPage.jsx
export default function LocationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Our Locations</h1>
      <p className="text-slate-300 mb-6">Clinical partners and service locations across cities.</p>

      <ul className="text-slate-300 space-y-2">
        <li>Bengaluru – Primary Care & Telehealth</li>
        <li>Noida – Diagnostics Lab</li>
        <li>Mumbai – Specialist Clinics</li>
      </ul>
    </div>
  );
}
