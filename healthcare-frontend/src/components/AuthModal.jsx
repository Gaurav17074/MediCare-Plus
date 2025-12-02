export default function AuthModal({ mode, onClose, onSwitchMode }) {
  const isLogin = mode === "login";

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-slate-900/80">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-50">
            {isLogin ? "Welcome back" : "Create your account"}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300 hover:border-slate-500"
          >
            ✕
          </button>
        </div>

        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Frontend only: connect API here.");
          }}
        >
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Full name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs text-slate-300">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          {!isLogin && (
            <div className="flex items-start gap-2 text-[11px] text-slate-400">
              <input type="checkbox" className="mt-0.5" />
              <span>
                I agree to receive appointment updates and alerts on WhatsApp /
                SMS.
              </span>
            </div>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-blue-500 py-2 text-sm font-semibold text-white hover:bg-blue-600"
          >
            {isLogin ? "Log in" : "Create account"}
          </button>
        </form>

        <p className="mt-3 text-center text-[11px] text-slate-400">
          {isLogin ? "New to MediCare AI? " : "Already have an account? "}
          <button
            className="font-semibold text-blue-400"
            onClick={() => onSwitchMode(isLogin ? "signup" : "login")}
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}
