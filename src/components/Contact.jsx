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
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-8">
          List Your Property
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-4 border rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="property"
            placeholder="Property Location"
            className="w-full p-4 border rounded-lg"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition w-full"
          >
            Submit via WhatsApp
          </button>

        </form>

      </div>
    </section>
  );
}