import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// ScrollToTop ⭐ ADD KIYA
import ScrollToTop from "./ScrollToTop";

// Components
import AIConsult from "./components/AIConsult";
import AuthModal from "./components/AuthModal";
import BookModal from "./components/BookModal";
import DoctorGrid from "./components/DoctorGrid";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FullReportPage from "./components/FullReportPage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";

// Footer Pages
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ContactPage from "./pages/ContactPage";
import Press from "./pages/Press";

import AIReportsPage from "./pages/AIReportsPage";
import ConsultOnline from "./pages/ConsultOnline";
import DoctorsPage from "./pages/DoctorsPage";
import HealthCheckups from "./pages/HealthCheckups";

import AccountPage from "./pages/AccountPage";
import ChatSupport from "./pages/ChatSupport";
import FAQsPage from "./pages/FAQsPage";
import HelpCenter from "./pages/HelpCenter";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import SecurityPage from "./pages/SecurityPage";
import TermsPage from "./pages/TermsPage";

import Instagram from "./pages/Instagram";
import LinkedIn from "./pages/LinkedIn";
import Twitter from "./pages/Twitter";
import YouTube from "./pages/YouTube";

import LocationPage from "./pages/LocationPage";
import SupportEmail from "./pages/SupportEmail";
import SupportPhone from "./pages/SupportPhone";

export default function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const [bookOpen, setBookOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>

      {/* ⭐ ScrollToTop added — page change = auto top */}
      <ScrollToTop />

      {/* NAVBAR */}
      <Navbar
        onAuthClick={(mode) => {
          setAuthMode(mode);
          setShowAuthModal(true);
        }}
        onNavClick={scrollToSection}
      />

      {/* ⭐ BACKGROUND GRADIENT RESTORE FIX */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      {/* GLOBAL PADDING FIX */}
      <div className="pt-16">
        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <div className="mx-auto max-w-6xl flex flex-col gap-24 px-4 pb-16 pt-0">

                <section id="home" className="pt-4 lg:pt-10">
                  <Hero onConsultClick={() => scrollToSection("ai-consult")} />
                </section>

                <section id="features">
                  <Features />
                </section>

                <section id="doctors">
                  <DoctorGrid
                    onBook={(doc) => {
                      setSelectedDoctor(doc);
                      setBookOpen(true);
                    }}
                  />
                </section>

                <section id="ai-consult" className="scroll-mt-24">
                  <AIConsult />
                </section>
              </div>
            }
          />

          {/* PROFILE PAGE */}
          <Route path="/profile" element={<ProfilePage />} />

          {/* REPORT PAGE */}
          <Route path="/report/:id" element={<FullReportPage />} />

          {/* FOOTER LINKS */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/doctors-list" element={<DoctorsPage />} />
          <Route path="/ai-reports" element={<AIReportsPage />} />
          <Route path="/consult-online" element={<ConsultOnline />} />
          <Route path="/health-checkups" element={<HealthCheckups />} />

          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/chat-support" element={<ChatSupport />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/faqs" element={<FAQsPage />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/security" element={<SecurityPage />} />

          <Route path="/instagram" element={<Instagram />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/linkedin" element={<LinkedIn />} />
          <Route path="/youtube" element={<YouTube />} />

          <Route path="/support-phone" element={<SupportPhone />} />
          <Route path="/support-email" element={<SupportEmail />} />
          <Route path="/location" element={<LocationPage />} />

        </Routes>

        <Footer />
      </div>

      {/* AUTH MODAL */}
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={setAuthMode}
        />
      )}

      {/* BOOKING MODAL */}
      <BookModal
        doctor={selectedDoctor}
        open={bookOpen}
        onClose={() => setBookOpen(false)}
        onConfirm={(data) => console.log("Booking confirmed", data)}
      />
    </Router>
  );
}
