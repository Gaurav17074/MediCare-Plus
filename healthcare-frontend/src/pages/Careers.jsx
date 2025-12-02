export default function Careers() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Careers at HealthCare AI</h1>
      <p className="text-slate-300 mb-6">
        Join us in building the future of smart healthcare. We’re looking for
        passionate developers, designers, medical advisors, and AI researchers.
      </p>

      <h2 className="text-xl font-semibold mb-2">Open Positions</h2>
      <ul className="space-y-4">
        <li className="bg-slate-800/50 p-4 rounded-xl">
          <h3 className="font-semibold">Frontend Developer (React)</h3>
          <p className="text-slate-400">Experience: 1–3 years • Remote</p>
        </li>

        <li className="bg-slate-800/50 p-4 rounded-xl">
          <h3 className="font-semibold">Backend Engineer (Node.js)</h3>
          <p className="text-slate-400">Experience: 2–5 years • Remote</p>
        </li>

        <li className="bg-slate-800/50 p-4 rounded-xl">
          <h3 className="font-semibold">AI/ML Research Intern</h3>
          <p className="text-slate-400">Experience: Fresher • Hybrid</p>
        </li>
      </ul>

      <p className="text-slate-300 mt-6">
        Send your CV at{" "}
        <span className="text-blue-400">careers@healthcareai.com</span>
      </p>
    </div>
  );
}
