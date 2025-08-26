import { useState, useEffect } from "react";
import logo from "../assets/LogoFTEK.jpeg";
import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

const Hero = () => {
  const texts = [
    "Senat Mahasiswa",
    "Fakultas Teknik Elektronika dan Komputer",
    "Universitas Kristen Satya Wacana",
  ];

  const [] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [speed] = useState(60);

  useEffect(() => {
    if (index === texts.length) setIndex(0);

    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  return (
    <main className="px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{`${texts[
              index
            ].substring(0, subIndex)}`}</h2>
            <p className="text-gray-700 leading-relaxed mb-8 text-justify">
              Ikuti perkembangan senat mahasiswa fakultas teknik elektronika dan
              komputer program, berita, dan kegiatan terbaru kami. Kami
              berkomitmen untuk memberikan informasi yang akurat dan terkini
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="smf.ftek@uskw.edu"
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
          <div className="flex justify-center lg:justify-end">
            <img
              src={logo}
              alt="Senat Logo"
              className="w-64 h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
