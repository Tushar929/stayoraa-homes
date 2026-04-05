import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black/60 backdrop-blur-md z-50">
      
      {/* LOGO */}
      <div className="flex items-center">
        <img src={logo} alt="Stayoraa" className="h-12 object-contain" />
      </div>

      {/* CONTACT BUTTON */}
      <a
        href="#contact"
        className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition"
      >
        Contact
      </a>
    </nav>
  );
}