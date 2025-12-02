import { useEffect, useState } from "react";

/**
 * BookModal.jsx
 *
 * Props:
 * - doctor: { id, displayName, dept, experienceYears, avatarUrl, slots: [...] } or null
 * - open: boolean
 * - onClose: () => void
 * - onConfirm: (bookingData) => Promise<void> | void
 *
 * Notes:
 * - Slots format expected: [{ date: '2025-12-01', start: '10:00', end: '10:15', capacity: 4 }, ...]
 * - If you don't have slots from backend yet, the component shows a sample slot picker and allows manual date/time.
 * - This component is non-destructive and local only until you wire `onConfirm` to your backend.
 */

export default function BookModal({ doctor, open, onClose, onConfirm }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [mode, setMode] = useState("video"); // video | clinic
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      // reset when opening
      setSelectedDate("");
      setSelectedSlot(null);
      setMode("video");
      setNotes("");
    }
  }, [open]);

  if (!open) return null;

  const availableSlots = (doctor && doctor.slots) || [
    // fallback demo slots — replace when backend exists
    { id: "s1", date: new Date().toISOString().slice(0, 10), start: "10:00", end: "10:15", capacity: 6 },
    { id: "s2", date: new Date().toISOString().slice(0, 10), start: "11:00", end: "11:15", capacity: 4 },
    { id: "s3", date: new Date(Date.now() + 86400000).toISOString().slice(0, 10), start: "16:00", end: "16:20", capacity: 3 },
  ];

  const slotsForDate = availableSlots.filter(s => (selectedDate ? s.date === selectedDate : true));

  async function handleConfirm() {
    if (!selectedSlot && !selectedDate) {
      alert("Please choose a date and slot (or a manual time).");
      return;
    }
    setLoading(true);

    // build booking payload
    const booking = {
      doctorId: doctor?.id || null,
      doctorName: doctor?.displayName || doctor?.name || "Selected Doctor",
      mode,
      slot: selectedSlot || { date: selectedDate, start: "09:00", end: "09:15" },
      notes,
      createdAt: new Date().toISOString(),
    };

    try {
      // If parent provided onConfirm, call it. It can call API to save booking.
      if (typeof onConfirm === "function") {
        await onConfirm(booking);
      } else {
        // default behavior: save to localStorage for demo
        const raw = localStorage.getItem("hc_bookings");
        const arr = raw ? JSON.parse(raw) : [];
        arr.unshift(booking);
        localStorage.setItem("hc_bookings", JSON.stringify(arr));
        alert("Booking saved locally (demo). Implement backend to persist.");
      }
      onClose();
    } catch (err) {
      console.error("Booking failed", err);
      alert("Booking failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => !loading && onClose()} />

      <div className="relative w-full max-w-2xl mx-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <div className="p-5 flex items-start justify-between border-b border-slate-800">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Book Consult {doctor ? `— ${doctor.displayName}` : ""}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Choose a date and time. You can select video or in-clinic mode.
            </p>
          </div>
          <div>
            <button
              onClick={() => !loading && onClose()}
              className="text-slate-300 px-3 py-1 rounded-full border border-slate-700 hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Date & Time */}
          <div>
            <label className="text-sm text-slate-300">Select date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="mt-2 w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100"
            />

            <div className="mt-4">
              <p className="text-sm text-slate-300 mb-2">Available slots</p>
              <div className="space-y-2 max-h-48 overflow-auto">
                {slotsForDate.length === 0 && <div className="text-sm text-slate-500">No slots for selected date.</div>}
                {slotsForDate.map((s) => (
                  <button
                    key={s.id || `${s.date}-${s.start}`}
                    onClick={() => {
                      setSelectedSlot(s);
                      setSelectedDate(s.date);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg border ${selectedSlot && selectedSlot.id === s.id ? "border-blue-500 bg-blue-900/30" : "border-slate-700 bg-slate-800"} text-slate-100`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">{`${s.start} — ${s.end}`}</div>
                        <div className="text-xs text-slate-400">{s.capacity ? `${s.capacity} slots` : "Open"}</div>
                      </div>
                      <div className="text-xs text-slate-400">{s.date}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-slate-300 mb-2">Or enter preferred time (optional)</p>
              <input
                placeholder="09:30"
                value={selectedSlot ? "" : selectedDate}
                readOnly
                className="hidden"
              />
            </div>
          </div>

          {/* Right: Mode, Notes, Summary */}
          <div>
            <p className="text-sm text-slate-300">Mode</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setMode("video")}
                className={`px-3 py-2 rounded-md ${mode === "video" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-200 border border-slate-700"}`}
              >
                Video
              </button>
              <button
                onClick={() => setMode("clinic")}
                className={`px-3 py-2 rounded-md ${mode === "clinic" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-200 border border-slate-700"}`}
              >
                Clinic
              </button>
            </div>

            <p className="text-sm text-slate-300 mt-4">Notes (symptoms / concerns)</p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={6}
              className="mt-2 w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100"
              placeholder="Add any notes that the doctor should see..."
            />

            <div className="mt-4 text-sm text-slate-400">
              <div>Doctor: <span className="text-slate-200 font-medium">{doctor?.displayName || '—'}</span></div>
              <div>Selected: <span className="text-slate-200 font-medium">{selectedSlot ? `${selectedSlot.date} ${selectedSlot.start}` : (selectedDate || "No selection")}</span></div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => onClose()}
                disabled={loading}
                className="px-4 py-2 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={loading}
                className="px-4 py-2 rounded-full bg-emerald-500 text-slate-900 font-semibold shadow-md"
              >
                {loading ? "Booking..." : "Confirm booking"}
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
          By booking you agree to our <span className="underline">Terms</span>. This is a demo—if connected to a backend the appointment will be persisted.
        </div>
      </div>
    </div>
  );
}
