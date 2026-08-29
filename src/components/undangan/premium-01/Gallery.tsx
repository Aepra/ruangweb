"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lato } from "next/font/google";
import { useState } from "react";
import { premiumWeddingData } from "@/data/premium-01";
import { SectionHeader, fadeUp } from "./QuoteSection";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });

export default function Gallery() {
  const { gallery } = premiumWeddingData;
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (i: number) => { setLightboxIdx(i); document.body.style.overflow = "hidden"; };
  const closeLightbox = () => { setLightboxIdx(null); document.body.style.overflow = ""; };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setLightboxIdx(i => i !== null ? (i + 1) % gallery.length : 0); };
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setLightboxIdx(i => i !== null ? (i - 1 + gallery.length) % gallery.length : 0); };

  return (
    <section id="galeri" className={`bg-white py-20 px-6 flex flex-col items-center ${lato.className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="w-full max-w-lg flex flex-col items-center"
      >
        <motion.div variants={fadeUp}>
          <SectionHeader label="Galeri Foto" title="Momen Bahagia" />
        </motion.div>

        {/* Masonry grid - 2 columns */}
        <div className="columns-2 gap-3 w-full">
          {gallery.map((url, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="mb-3 break-inside-avoid relative group cursor-pointer overflow-hidden"
              onClick={() => openLightbox(i)}
            >
              <img
                src={url}
                alt={`Foto ${i + 1}`}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'sepia(8%)' }}
              />
              <div className="absolute inset-0 bg-[#3D2B1F]/0 group-hover:bg-[#3D2B1F]/30 transition-all duration-500 flex items-center justify-center">
                <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2" onClick={closeLightbox}>
              <X size={28} />
            </button>
            <button className="absolute left-4 text-white/50 hover:text-white p-2" onClick={prev}>
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={gallery[lightboxIdx]}
              alt=""
              className="max-w-full max-h-[85vh] object-contain"
              onClick={e => e.stopPropagation()}
            />
            <button className="absolute right-4 text-white/50 hover:text-white p-2" onClick={next}>
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>
            <div className="absolute bottom-4 text-white/50 text-xs tracking-widest">
              {lightboxIdx + 1} / {gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
