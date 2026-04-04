export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold text-gold">
        STAYORAA
      </h1>

      <a
        href="#contact"
        className="border border-gold px-4 py-2 rounded hover:bg-gold hover:text-black transition"
      >
        Contact
      </a>

    </nav>
  );
}