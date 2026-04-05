import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Property Inquiry:
Name: ${form.name}
Phone: ${form.phone}
Property: ${form.property}`;

    const whatsappURL = `https://wa.me/919910903065?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          List Your Property
        </h2>

        <p className="text-gray-400 mb-10">
          Share your details and our team will get in touch with you shortly.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-yellow-500"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-yellow-500"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="property"
            placeholder="Property Location"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-yellow-500"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
          >
            Submit via WhatsApp
          </button>

        </form>

      </div>
    </section>
  );
}