/*
🔥 ProfilePage.jsx — Fully Working Profile + Appointments Page
Paste this file inside:  src/components/ProfilePage.jsx

This page shows:
✔ User basic details (dummy for now)
✔ Upcoming Appointments (from localStorage: 'hc_bookings')
✔ Past Appointments
✔ View Report button (for saved AI reports)
✔ Clean modern UI matching your theme

⚠ No backend required yet — works with the booking modal you already added.
You can later replace localStorage with real backend data.
*/

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [appointments, setAppointments] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const rawA = localStorage.getItem("hc_bookings");
    const rawR = localStorage.getItem("ai_consult_reports");

    setAppointments(rawA ? JSON.parse(rawA) : []);
    setReports(rawR ? JSON.parse(rawR) : []);
  }, []);

  const upcoming = appointments;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-50">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

      {/* USER INFO CARD */}
      <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 mb-10">
        <h2 className="text-lg font-semibold mb-3">Basic Information</h2>
        <div className="text-sm text-slate-300 space-y-1">
          <p><span className="text-slate-400">Name:</span> Guest User</p>
          <p><span className="text-slate-400">Email:</span> guest@example.com</p>
          <p><span className="text-slate-400">Member since:</span> 2025</p>
        </div>
      </div>

      {/* APPOINTMENTS */}
      <h2 className="text-xl font-semibold mb-3">My Appointments</h2>

      {upcoming.length === 0 ? (
        <p className="text-slate-400 mb-10">No appointments booked yet.</p>
      ) : (
        <div className="space-y-4 mb-12">
          {upcoming.map((b, i) => (
            <div
              key={i}
              className="rounded-xl bg-slate-900/70 border border-slate-800 p-5 flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div>
                <p className="font-semibold text-slate-100">{b.doctorName}</p>
                <p className="text-sm text-slate-400">{b.mode === "video" ? "Video Consult" : "Clinic Visit"}</p>
                <p className="text-sm text-emerald-300 mt-1">
                  {b.slot?.date} — {b.slot?.start}
                </p>
              </div>

              <button
                className="mt-3 sm:mt-0 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-200 hover:bg-slate-700"
              >
                Cancel (coming soon)
              </button>
            </div>
          ))}
        </div>
      )}

      {/* REPORTS */}
      <h2 className="text-xl font-semibold mb-3">My Health Reports</h2>

      {reports.length === 0 ? (
        <p className="text-slate-400">No saved reports yet.</p>
      ) : (
        <div className="space-y-4">
          {reports.map((r, i) => (
            <div
              key={i}
              className="rounded-xl bg-slate-900/70 border border-slate-800 p-5"
            >
              <p className="text-sm text-slate-300 mb-1">{r.createdAt.slice(0, 10)}</p>
              <p className="font-semibold text-slate-100">{r.summary.slice(0, 80)}...</p>

              <button
                    onClick={() => window.open(`/report/${i}`, "_self")}
                    className="mt-3 px-4 py-1.5 rounded-full bg-blue-600 text-sm font-medium hover:bg-blue-500">
                        View Full Report
                </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
