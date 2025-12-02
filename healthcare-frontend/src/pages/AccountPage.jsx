// src/pages/AccountPage.jsx
export default function AccountPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">My Account</h1>
      <p className="text-slate-300 mb-6">
        Manage your profile, appointments, saved reports, and payment methods.
      </p>

      <div className="rounded-xl bg-slate-900/50 p-6 border border-slate-800 space-y-4">
        <div>
          <h3 className="font-semibold">Profile</h3>
          <p className="text-slate-400">Name: Guest User • Email: guest@example.com</p>
        </div>

        <div>
          <h3 className="font-semibold">Appointments</h3>
          <p className="text-slate-400">You have 0 upcoming appointments.</p>
        </div>

        <div>
          <h3 className="font-semibold">Payment</h3>
          <p className="text-slate-400">No saved payment methods.</p>
        </div>
      </div>
    </div>
  );
}
