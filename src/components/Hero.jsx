import { useState } from "react";
import beforeImg from "../assets/before.jpg";
import afterImg from "../assets/after.jpg";
import fullImg from "../assets/interior.jpeg";

export default function Hero() {
  const [view, setView] = useState("before");

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">

      {/* DESKTOP VIEW (FULL IMAGE) */}
      <img
        src={fullImg}
        alt="Interior"
        className="hidden md:block absolute w-full h-full object-contain"
      />

      {/* MOBILE VIEW (TOGGLE IMAGE) */}
      <img
        src={view === "before" ? beforeImg : afterImg}
        alt="Interior"
        className="md:hidden absolute w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

        {/* TOGGLE BUTTONS (MOBILE ONLY) */}
        <div className="md:hidden flex gap-4 mb-6">
          <button
            onClick={() => setView("before")}
            className={`px-4 py-2 rounded-full text-sm ${
              view === "before"
                ? "bg-yellow-500 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            BEFORE
          </button>

          <button
            onClick={() => setView("after")}
            className={`px-4 py-2 rounded-full text-sm ${
              view === "after"
                ? "bg-yellow-500 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            AFTER
          </button>
        </div>

        {/* TEXT */}
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl">
          Turn Your Property Into a{" "}
          <span className="text-yellow-500">High-Performing Asset</span>
        </h1>

        <p className="text-gray-300 text-sm md:text-lg mb-6">
          Structured leasing. Assured income. Complete peace of mind.
        </p>

        <button
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
          className="bg-yellow-500 text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold"
        >
          List Your Property
        </button>

      </div>
    </section>
  );
}