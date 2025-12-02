import { useState } from "react";

const doctors = [
  {
    initials: "DA",
    name: "Dr. Aditi Sharma",
    role: "Senior Physician",
    dept: "Internal Medicine",
    experience: "12 yrs",
    slots: "Today • 6 slots",
  },
  {
    initials: "DR",
    name: "Dr. Rahul Mehta",
    role: "Consultant Cardiologist",
    dept: "Cardiology",
    experience: "9 yrs",
    slots: "Tomorrow • 4 slots",
  },
  {
    initials: "DN",
    name: "Dr. Neha Verma",
    role: "Dermatologist",
    dept: "Skin & Hair",
    experience: "7 yrs",
    slots: "Today • 3 slots",
  },
  {
    initials: "DA",
    name: "Dr. Arjun Kapoor",
    role: "Psychiatrist",
    dept: "Mental Health",
    experience: "10 yrs",
    slots: "Wed • 8 slots",
  },
  { initials: "SP", name: "Dr. Sana Pillai", role: "Pediatrician", dept: "Child Care", experience: "6 yrs", slots: "Today • 5 slots" },
  { initials: "VK", name: "Dr. Varun Khanna", role: "Orthopedic Surgeon", dept: "Orthopedics", experience: "11 yrs", slots: "Thu • 2 slots" },
  { initials: "RS", name: "Dr. Riya Sen", role: "Gynecologist", dept: "Women's Health", experience: "8 yrs", slots: "Today • 4 slots" },
  { initials: "AK", name: "Dr. Amit Kaushik", role: "Neurologist", dept: "Brain & Nerves", experience: "14 yrs", slots: "Mon • 3 slots" },
  { initials: "MS", name: "Dr. Mehul Shah", role: "ENT Specialist", dept: "Ear, Nose & Throat", experience: "9 yrs", slots: "Today • 2 slots" },
  { initials: "PG", name: "Dr. Priya Gupta", role: "Ophthalmologist", dept: "Eye Care", experience: "6 yrs", slots: "Fri • 7 slots" },
  { initials: "RK", name: "Dr. Rajesh Kumar", role: "General Surgeon", dept: "Surgery", experience: "13 yrs", slots: "Today • 1 slot" },
  { initials: "TS", name: "Dr. Tanvi Sethi", role: "Dentist", dept: "Dental Care", experience: "5 yrs", slots: "Sat • 9 slots" },
];

export default function DoctorGrid({ onBook }) {
  const [index, setIndex] = useState(0);

  // ⭐ Group size changed to 3 doctors
  const groupSize = 3;

  const next = () => {
    if (index + groupSize < doctors.length)
      setIndex(index + groupSize);
  };

  const prev = () => {
    if (index - groupSize >= 0)
      setIndex(index - groupSize);
  };

  const visibleDoctors = doctors.slice(index, index + groupSize);

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-slate-50 mb-2">
        Consult verified doctors
      </h2>
      <p className="text-slate-400 mb-8">
        Book in-clinic or video consult after AI triage.
      </p>

      {/* LEFT ARROW */}
      {index > 0 && (
        <button
          onClick={prev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-slate-900/70 border border-slate-700 text-white p-3 rounded-full shadow-lg hover:bg-slate-800"
        >
          ◀
        </button>
      )}

      {/* SAME GRID — just showing 3 now */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 transition-all duration-300">
        {visibleDoctors.map((doc, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-xl shadow-black/40 backdrop-blur"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-100 font-semibold">
                {doc.initials}
              </div>

              <div>
                <h3 className="font-semibold text-slate-50">{doc.name}</h3>
                <p className="text-sm text-slate-400">{doc.role}</p>
              </div>
            </div>

            <div className="text-sm text-slate-300 space-y-1 mb-4">
              <p><strong>Dept:</strong> {doc.dept}</p>
              <p><strong>Experience:</strong> {doc.experience}</p>
              <p className="text-emerald-400 font-medium">{doc.slots}</p>
            </div>

            <button
              onClick={() => onBook(doc)}
              className="w-full rounded-full bg-emerald-500 py-2 font-medium text-slate-900 hover:bg-emerald-400"
            >
              Book consult
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      {index + groupSize < doctors.length && (
        <button
          onClick={next}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-slate-900/70 border border-slate-700 text-white p-3 rounded-full shadow-lg hover:bg-slate-800"
        >
          ▶
        </button>
      )}
    </div>
  );
}
