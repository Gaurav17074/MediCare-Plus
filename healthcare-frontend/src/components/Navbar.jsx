import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ onAuthClick }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ⭐ Common scroll helper
  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl font-bold text-slate-50"
        >
          HealthCare AI
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <button onClick={() => scrollTo("home")} className="text-sm text-slate-300 hover:text-white">
            Home
          </button>

          <button onClick={() => scrollTo("features")} className="text-sm text-slate-300 hover:text-white">
            Features
          </button>

          <button onClick={() => scrollTo("doctors")} className="text-sm text-slate-300 hover:text-white">
            Doctors
          </button>

          <button onClick={() => scrollTo("ai-consult")} className="text-sm text-slate-300 hover:text-white">
            AI Consult
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
          >
            My Profile
          </button>

          <button
            onClick={() => onAuthClick("login")}
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200">
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-4">

          <button onClick={() => { scrollTo("home"); setOpen(false); }} className="block text-slate-300">
            Home
          </button>

          <button onClick={() => { scrollTo("features"); setOpen(false); }} className="block text-slate-300">
            Features
          </button>

          <button onClick={() => { scrollTo("doctors"); setOpen(false); }} className="block text-slate-300">
            Doctors
          </button>

          <button onClick={() => { scrollTo("ai-consult"); setOpen(false); }} className="block text-slate-300">
            AI Consult
          </button>

          <button
            onClick={() => { navigate("/profile"); setOpen(false); }}
            className="block text-emerald-400 font-semibold"
          >
            My Profile
          </button>

          <button
            onClick={() => onAuthClick("login")}
            className="block w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
}
