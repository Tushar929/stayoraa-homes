import bg from "../assets/interior.jpeg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={bg}
        alt="Interior"
        className="absolute w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute top-0 left-1/2 w-[2px] h-full bg-black opacity-50"></div>
      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Turn Your Property Into a{" "}
          <span className="text-yellow-500">High-Performing Asset</span>
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Structured leasing. Assured income. Complete peace of mind.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
        >
          List Your Property
        </button>
      </div>
    </section>
  );
}
