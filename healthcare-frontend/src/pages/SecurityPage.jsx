// src/pages/SecurityPage.jsx
export default function SecurityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Security & Compliance</h1>
      <p className="text-slate-300 mb-4">We follow best practices: encryption in transit and at rest, access control, and audits.</p>

      <h2 className="font-semibold mt-4">Encryption</h2>
      <p className="text-slate-400">TLS for network security; AES-level encryption for stored data.</p>

      <h2 className="font-semibold mt-4">Compliance</h2>
      <p className="text-slate-400">We follow security guidelines and aim for HIPAA-style controls (note: not legal HIPAA certification).</p>
    </div>
  );
}
