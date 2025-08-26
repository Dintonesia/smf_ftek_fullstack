"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import division1 from "../assets/Bidang1.png";
import division2 from "../assets/Bidang2.png";
import division3 from "../assets/Bidang3.png";
import division4 from "../assets/Bidang4.png";

const AboutUs = () => {
  const photos = [
    {
      src: division1,
      alt: "Bidang 1 - SMF FTEK UKSW",
      caption: "Bidang 1 - Humanistic Skill",
    },
    {
      src: division2,
      alt: "Bidang 2 - SMF FEB UKSW",
      caption: "Bidang 2 - Professional Skill",
    },
    {
      src: division3,
      alt: "Bidang 3 - SMF FEB UKSW",
      caption: "Bidang 3 - Kepemimpinan dan Staf Inforkom",
    },
    {
      src: division4,
      alt: "Bidang 4 - SMF FEB UKSW",
      caption: "BPH - Badan Pengurus Harian",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));

  return (
    <section className="mb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          About Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Senat Mahasiswa FTEK UKSW
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Senat Mahasiswa Fakultas Elektronika dan Komputer adalah
              organisasi kemahasiswaan yang berperan dalam mewadahi aspirasi
              mahasiswa dan mengembangkan potensi akademik serta non-akademik
              mahasiswa FTEK UKSW.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kami berkomitmen untuk menciptakan lingkungan yang kondusif bagi
              pengembangan mahasiswa melalui berbagai program dan kegiatan yang
              bermanfaat bagi seluruh civitas akademika FTEK UKSW.
            </p>
          </div>

          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={photos[current].src}
                alt={photos[current].alt}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key={`caption-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className="absolute bottom-16 left-4 right-4"
              >
                <div className="bg-black/70 backdrop-blur-sm px-4 py-3 rounded-lg text-white">
                  <div className="text-sm font-semibold">
                    {photos[current].caption}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </motion.button>

            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
              {photos.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: idx === current ? 1.2 : 1,
                    backgroundColor: idx === current ? "#1f2937" : "#9ca3af",
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="w-3 h-3 rounded-full transition-all duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
