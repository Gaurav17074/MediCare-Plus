import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-lg mt-20 pt-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP SECTION: Newsletter + App Download */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          {/* NEWSLETTER */}
          <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-3">
              Stay Updated With Health Tips
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get AI-driven health tips and wellness insights weekly.
            </p>

            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl bg-slate-800/60 border border-slate-700 px-4 py-2 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
                Subscribe
              </button>
            </div>
          </div>

          {/* DOWNLOAD APP */}
          <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 backdrop-blur flex items-center gap-8">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://healthcare.ai"
              alt="QR Code"
              className="rounded-xl border border-slate-700 shadow-md"
            />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                Get Our App
              </h2>

              <div className="flex flex-col gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  className="w-40 cursor-pointer hover:opacity-90"
                />
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  className="w-40 cursor-pointer hover:opacity-90"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE LINK SECTION */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 text-sm mb-16">

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/press">Press</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/ai-reports">AI Reports</Link></li>
              <li><Link to="/consult-online">Consult Online</Link></li>
              <li><Link to="/health-checkups">Health Checkups</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/help-center">Help Center</Link></li>
              <li><Link to="/chat-support">Chat Support</Link></li>
              <li><Link to="/account">Account</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/security">Security</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold text-white mb-3">Social</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/instagram">Instagram</Link></li>
              <li><Link to="/twitter">Twitter</Link></li>
              <li><Link to="/linkedin">LinkedIn</Link></li>
              <li><Link to="/youtube">YouTube</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/support-phone">📞 +91 98765 43210</Link></li>
              <li><Link to="/support-email">📧 support@healthcare.ai</Link></li>
              <li><Link to="/location">📍 Bengaluru, India</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-slate-800 py-5 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} HealthCare AI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
