import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-3 bg-black/50 backdrop-blur-md z-50">

      {/* LEFT */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Stayoraa" className="h-8 md:h-10" />
        
        <h1 className="text-white text-sm md:text-lg font-semibold leading-tight">
          Stayoraa <span className="text-yellow-500 block md:inline">Homes</span>
        </h1>
      </div>

      {/* RIGHT */}
      <a
        href="#contact"
        className="border border-yellow-500 text-yellow-500 px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm"
      >
        Contact
      </a>

    </nav>
  );
}