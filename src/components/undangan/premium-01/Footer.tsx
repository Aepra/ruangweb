"use client";

import { motion } from "framer-motion";
import { Great_Vibes, Lato } from "next/font/google";
import { premiumWeddingData } from "@/data/premium-01";
import { fadeUp } from "./QuoteSection";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });

export default function Footer() {
  const { bride, groom, formattedDate, dayName } = premiumWeddingData;

  return (
    <footer className={`bg-[#3D2B1F] text-white py-20 px-6 flex flex-col items-center text-center ${lato.className} relative overflow-hidden`}>
      {/* Subtle bokeh circles */}
      <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-[#C9A96E]/5" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#C9A96E]/5" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-[#C9A96E]/5" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="flex flex-col items-center relative z-10"
      >
        <motion.div variants={fadeUp} className="mb-4">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 4 C13 4, 4 12, 4 22 C12 22, 19 15, 20 4Z" fill="#C9A96E" opacity="0.4"/>
            <path d="M20 4 C27 4, 36 12, 36 22 C28 22, 21 15, 20 4Z" fill="#C9A96E" opacity="0.4"/>
            <path d="M20 36 C13 36, 4 28, 4 22 C12 22, 19 29, 20 36Z" fill="#C9A96E" opacity="0.4"/>
            <path d="M20 36 C27 36, 36 28, 36 22 C28 22, 21 29, 20 36Z" fill="#C9A96E" opacity="0.4"/>
          </svg>
        </motion.div>

        <motion.p variants={fadeUp} className="text-white/60 text-[10px] tracking-[0.5em] uppercase mb-3">
          Thank You
        </motion.p>

        <motion.h2 variants={fadeUp} className={`${greatVibes.className} text-5xl md:text-6xl text-white mb-4`}>
          {bride.nickname} & {groom.nickname}
        </motion.h2>

        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
          <div className="w-10 h-[1px] bg-[#C9A96E]/40" />
          <span className="text-[#C9A96E] text-[10px] tracking-widest uppercase">{dayName} &bull; {formattedDate}</span>
          <div className="w-10 h-[1px] bg-[#C9A96E]/40" />
        </motion.div>

        <motion.p variants={fadeUp} className="text-white/50 text-xs font-light leading-relaxed max-w-xs mb-10">
          "Terima kasih telah menjadi bagian dari hari paling istimewa dalam hidup kami."
        </motion.p>

        <motion.p variants={fadeUp} className="text-[#C9A96E]/40 text-[9px] tracking-widest uppercase">
          With Love ✦ {bride.nickname} & {groom.nickname}
        </motion.p>
      </motion.div>
    </footer>
  );
}
