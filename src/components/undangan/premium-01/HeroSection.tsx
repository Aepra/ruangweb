"use client";

import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display, Lato } from "next/font/google";
import { premiumWeddingData } from "@/data/premium-01";
import { Calendar } from "lucide-react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });

const SectionOrnament = () => (
  <div className="flex flex-col items-center gap-2 my-4">
    <div className="w-8 h-[1px] bg-[#C9A96E]" />
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2 C7 2, 2 6, 2 10 C6 10, 9 7, 10 2Z" fill="#C9A96E" opacity="0.5"/>
      <path d="M10 2 C13 2, 18 6, 18 10 C14 10, 11 7, 10 2Z" fill="#C9A96E" opacity="0.5"/>
      <path d="M10 18 C7 18, 2 14, 2 10 C6 10, 9 13, 10 18Z" fill="#C9A96E" opacity="0.5"/>
      <path d="M10 18 C13 18, 18 14, 18 10 C14 10, 11 13, 10 18Z" fill="#C9A96E" opacity="0.5"/>
    </svg>
    <div className="w-8 h-[1px] bg-[#C9A96E]" />
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } }
};

export default function HeroSection() {
  const { bride, groom, formattedDate, dayName, locationShort, greeting } = premiumWeddingData;

  return (
    <section id="home" className={`min-h-[100svh] bg-[#F9F6F1] flex flex-col items-center justify-center text-center px-6 py-24 pb-32 ${lato.className} relative overflow-hidden`}>
      {/* Soft background circle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#EDE0CC]/20" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-lg w-full relative z-10"
      >
        <motion.p variants={fadeUp} className="text-[#8B7355] text-[10px] tracking-[0.5em] uppercase mb-3">
          The Wedding of
        </motion.p>

        <motion.h1 variants={fadeUp} className={`${greatVibes.className} text-5xl md:text-7xl text-[#3D2B1F] mb-2 leading-tight`}>
          {bride.nickname} & {groom.nickname}
        </motion.h1>

        <motion.div variants={fadeUp}>
          <SectionOrnament />
        </motion.div>

        <motion.p variants={fadeUp} className="text-[#5C4A35] text-sm md:text-base leading-relaxed font-light mb-8 max-w-md mx-auto">
          {greeting.message}
        </motion.p>

        {/* Date card */}
        <motion.div variants={fadeUp} className="inline-flex flex-col items-center bg-white/70 backdrop-blur-sm border border-[#C9A96E]/30 px-8 py-5 mb-8">
          <span className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase mb-2 font-light">Hari Bahagia</span>
          <span className={`${playfair.className} text-2xl md:text-3xl text-[#3D2B1F] tracking-wider`}>{formattedDate}</span>
          <span className="text-[#8B7355] text-[11px] mt-1 tracking-widest uppercase">{dayName} &bull; {locationShort}</span>
        </motion.div>

        <motion.div variants={fadeUp}>
          <button className="flex items-center gap-2 mx-auto px-6 py-2.5 border border-[#C9A96E]/60 text-[#8B7355] text-[11px] tracking-[0.25em] uppercase hover:bg-[#C9A96E]/10 transition-colors">
            <Calendar size={13} />
            Save The Date
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
