export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="text-slate-300 mb-6">
        We'd love to hear from you. Whether you have a question, feedback, or a
        partnership inquiry — feel free to reach out.
      </p>

      <div className="space-y-4">
        <p><strong>Email:</strong> support@healthcareai.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Office:</strong> Sector 62, Noida, Uttar Pradesh, India</p>
      </div>

      <p className="text-slate-500 mt-6">
        Response time: 10am – 6pm (Mon–Sat)
      </p>
    </div>
  );
}
