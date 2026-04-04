import bg from "../assets/interior.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] text-white flex items-center justify-center px-6">
      {/* Background Image */}
      <img
        src={bg}
        alt="Interior"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Turn Your Property Into a{" "}
          <span className="text-gold">High-Performing Asset</span>
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Structured leasing. Assured income. Complete peace of mind.
        </p>

        <a
          href="#contact"
          className="bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
        >
          List Your Property
        </a>
      </div>
    </section>
  );
}
