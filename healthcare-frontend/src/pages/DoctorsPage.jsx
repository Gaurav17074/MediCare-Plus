// src/pages/DoctorsPage.jsx
export default function DoctorsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Our Doctors & Specialists</h1>
      <p className="text-slate-300 mb-6">
        All our doctors are verified and hold valid licenses. Browse by
        department, experience, and patient ratings.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-slate-900/50 p-4 border border-slate-800">
          <h3 className="font-semibold">Cardiology</h3>
          <p className="text-slate-400 text-sm">Top cardiologists for heart care.</p>
        </div>

        <div className="rounded-xl bg-slate-900/50 p-4 border border-slate-800">
          <h3 className="font-semibold">Dermatology</h3>
          <p className="text-slate-400 text-sm">Skin, hair and cosmetic care.</p>
        </div>

        <div className="rounded-xl bg-slate-900/50 p-4 border border-slate-800">
          <h3 className="font-semibold">Psychiatry</h3>
          <p className="text-slate-400 text-sm">Mental health and counselling.</p>
        </div>

        <div className="rounded-xl bg-slate-900/50 p-4 border border-slate-800">
          <h3 className="font-semibold">Internal Medicine</h3>
          <p className="text-slate-400 text-sm">General physicians for adult care.</p>
        </div>
      </div>

      <p className="text-slate-400 mt-6">
        Use the booking buttons to schedule in-clinic or video consults. For
        specialised panels and second opinions, contact support.
      </p>
    </div>
  );
}
