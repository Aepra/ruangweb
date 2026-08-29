"use client";

import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display, Lato } from "next/font/google";
import { premiumWeddingData } from "@/data/premium-01";
import { SectionHeader, fadeUp } from "./QuoteSection";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });

export default function CoupleMessage() {
  const { bride, groom } = premiumWeddingData;

  const PersonCard = ({ person, isGroom }: { person: typeof bride | typeof groom, isGroom?: boolean }) => (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center"
    >
      {/* Oval Photo */}
      <div className="relative mb-5">
        <div className="w-36 h-44 md:w-44 md:h-56 rounded-t-full overflow-hidden border-[3px] border-[#C9A96E]/30 shadow-lg">
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover"
            style={{ filter: 'sepia(10%)' }}
          />
        </div>
        {/* Gold ring accent */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-[#C9A96E] bg-[#F9F6F1]" />
      </div>

      <p className={`${playfair.className} text-xl md:text-2xl text-[#3D2B1F] mb-1`}>{person.name}</p>
      <p className="text-[#8B7355] text-[11px] font-light tracking-wide mb-1">
        {isGroom ? "Putra" : "Putri"}
      </p>
      <p className="text-[#8B7355] text-[11px] font-light text-center max-w-[180px] leading-relaxed mb-3">
        {person.parents}
      </p>
      <a
        href={`https://instagram.com/${person.instagram.replace('@', '')}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 text-[#C9A96E] text-[11px] hover:underline transition-all"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
        {person.instagram}
      </a>
    </motion.div>
  );

  return (
    <section id="mempelai" className={`bg-[#F9F6F1] py-20 px-6 flex flex-col items-center ${lato.className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="w-full max-w-lg flex flex-col items-center"
      >
        <motion.div variants={fadeUp}>
          <SectionHeader label="Mempelai" title="Bismillahirrahmanirrahim" />
        </motion.div>

        {/* Couple photos side by side */}
        <div className="flex items-start justify-center gap-8 md:gap-16 w-full">
          <PersonCard person={groom} isGroom />
          
          {/* Center divider */}
          <div className="flex flex-col items-center justify-center pt-12 self-center">
            <div className="w-[1px] h-16 bg-[#C9A96E]/30" />
            <p className={`${greatVibes.className} text-3xl text-[#C9A96E] my-2`}>&</p>
            <div className="w-[1px] h-16 bg-[#C9A96E]/30" />
          </div>
          
          <PersonCard person={bride} />
        </div>
      </motion.div>
    </section>
  );
}
