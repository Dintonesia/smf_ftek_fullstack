import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
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

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <a
              href="#hero"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#about-us"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              About Us
            </a>
            <a
              href="/blog"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              Blog
            </a>
          </nav>
          <a
            href="/login"
            className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            <LogIn size={16} />
            <span>Login</span>
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-3 py-2 space-y-1">
            <a
              href="#hero"
              className="block px-3 py-3 text-gray-600 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors text-base"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about-us"
              className="block px-3 py-3 text-gray-600 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors text-base"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="/blog"
              className="block px-3 py-3 text-gray-600 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors text-base"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a
              href="/login"
              className="w-full flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-3 py-3 rounded-lg transition-colors font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              <LogIn size={16} />
              <span>Login</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
