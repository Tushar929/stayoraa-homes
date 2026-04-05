import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-lg z-50">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Stayoraa"
          className="h-10 object-contain"
        />
        <h1 className="text-white font-semibold text-lg tracking-wide">
          Stayoraa <span className="text-yellow-500">Homes</span>
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <a
        href="#contact"
        className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition"
      >
        Contact
      </a>

    </nav>
  );
}