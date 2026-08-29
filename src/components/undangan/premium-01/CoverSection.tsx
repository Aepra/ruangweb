"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Great_Vibes, Lato } from "next/font/google";
import { premiumWeddingData } from "@/data/premium-01";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

interface CoverSectionProps {
  onOpen: () => void;
  isVisible: boolean;
}

// SVG Ornament Component
const Ornament = () => (
  <svg width="120" height="20" viewBox="0 0 120 20" fill="none" className="text-[#C9A96E] opacity-70">
    <line x1="0" y1="10" x2="45" y2="10" stroke="currentColor" strokeWidth="0.8"/>
    <circle cx="52" cy="10" r="3" fill="currentColor" opacity="0.5"/>
    <circle cx="60" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="0.8"/>
    <circle cx="60" cy="10" r="2" fill="currentColor" opacity="0.5"/>
    <circle cx="68" cy="10" r="3" fill="currentColor" opacity="0.5"/>
    <line x1="75" y1="10" x2="120" y2="10" stroke="currentColor" strokeWidth="0.8"/>
  </svg>
);

export default function CoverSection({ onOpen, isVisible }: CoverSectionProps) {
  const { bride, groom, formattedDate, dayName } = premiumWeddingData;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          key="cover"
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#F9F6F1] overflow-hidden ${lato.className}`}
          style={{ backgroundImage: 'radial-gradient(ellipse at top, #EDE8DF 0%, #F9F6F1 70%)' }}
        >
          {/* Top decorative border */}
          <div className="w-full flex justify-center pt-8 px-8">
            <div className="w-full max-w-sm border-t border-l border-r border-[#C9A96E]/30 h-3" />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            {/* Decorative leaf/flower top */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-4"
            >
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                <path d="M30 5 C20 5, 5 15, 5 28 C15 28, 28 20, 30 5Z" fill="#C9A96E" opacity="0.3"/>
                <path d="M30 5 C40 5, 55 15, 55 28 C45 28, 32 20, 30 5Z" fill="#C9A96E" opacity="0.3"/>
                <line x1="30" y1="5" x2="30" y2="38" stroke="#C9A96E" strokeWidth="0.8" opacity="0.6"/>
              </svg>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-[#8B7355] text-xs tracking-[0.4em] uppercase mb-3 font-light"
            >
              The Wedding of
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className={`${greatVibes.className} text-6xl md:text-8xl text-[#3D2B1F] mb-4 leading-tight`}
            >
              {bride.nickname} & {groom.nickname}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col items-center gap-4 mb-8"
            >
              <Ornament />
              <div className="text-[#8B7355] text-[11px] tracking-[0.3em] uppercase font-light">
                {dayName} &bull; {formattedDate}
              </div>
            </motion.div>

            {/* Guest section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mb-8 flex flex-col items-center"
            >
              <p className="text-[#8B7355] text-[11px] mb-1 font-light">Kepada Yth.</p>
              <p className="text-[#8B7355] text-xs tracking-wider font-light">Bapak / Ibu / Saudara/i</p>
              <div className="mt-3 px-6 py-2 border border-[#C9A96E]/40 rounded-sm bg-white/50">
                <span className="text-[#3D2B1F] text-sm font-medium tracking-wide">Tamu Undangan</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpen}
              className="flex items-center gap-2 px-8 py-3 bg-[#3D2B1F] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#2A1E15] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.4 8.35C20.16 8.55 18.5 8.6 16.5 8.6"/>
                <path d="M3 8.35C4.24 8.55 5.9 8.6 7.9 8.6"/>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 10l10 6 10-6"/>
              </svg>
              Buka Undangan
            </motion.button>
          </div>

          {/* Bottom decorative border */}
          <div className="w-full flex justify-center pb-8 px-8">
            <div className="w-full max-w-sm border-b border-l border-r border-[#C9A96E]/30 h-3" />
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
