import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/LogoFTEK.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center p-4">
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="font-bold text-lg">Senat Mahasiswa FTEK</span>
        </a>

        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="text-gray-600 hover:text-amber-500">
            Home
          </a>
          <a href="#about-us" className="text-gray-600 hover:text-amber-500">
            About Us
          </a>
          <a href="/blog" className="text-gray-600 hover:text-amber-500">
            Blog
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-2 px-4 pb-4">
          <a href="#hero" className="text-gray-600 hover:text-amber-500">
            Home
          </a>
          <a href="#about-us" className="text-gray-600 hover:text-amber-500">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-amber-500">
            Blog
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
