import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";
import logo from "../assets/LogoFTEK.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto"></div>
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="SMF FTEK UKSW Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold">SMF FTEK UKSW</h3>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            Senat Mahasiswa Fakultas Elektro dan Komputer Universitas Kristen
            Satya Wacana. Mengembangkan potensi mahasiswa dalam bidang
            elektronika dan komputer.
          </p>

          <div className="flex gap-4">
            <a
              href="mailto:smf.ftek@uskw.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-slate-700 text-white rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <Mail size={20} />
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Email Us
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/senat-mhs-ftek-968536272"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-slate-700 text-white rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <Linkedin size={20} />
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                LinkedIn
              </span>
            </a>

            <a
              href="https://www.instagram.com/smfftek.uksw/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-slate-700 text-white rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <Instagram size={20} />
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Instagram
              </span>
            </a>

            <a
              href="https://wa.me/6282114894012"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-slate-700 text-white rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <MessageCircle size={20} />
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm">
          © 2025 SMF FTEK UKSW. All rights reserved.
        </div>
        <div className="text-gray-400 text-sm">
          Developed by{" "}
          <span className="text-white font-medium">
            Dintonesia, DayaSjahpoetro
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
