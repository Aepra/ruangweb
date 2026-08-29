"use client";

import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display, Lato } from "next/font/google";
import { premiumWeddingData } from "@/data/premium-01";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } }
};

const SectionHeader = ({ label, title }: { label: string; title?: string }) => (
  <div className="flex flex-col items-center mb-10">
    <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-3">{label}</p>
    {title && <h2 className={`${playfair.className} text-2xl md:text-3xl text-[#3D2B1F]`}>{title}</h2>}
    <div className="flex items-center gap-2 mt-4">
      <div className="w-12 h-[1px] bg-[#C9A96E]/50" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="#C9A96E" opacity="0.7">
        <polygon points="5,0 10,5 5,10 0,5"/>
      </svg>
      <div className="w-12 h-[1px] bg-[#C9A96E]/50" />
    </div>
  </div>
);

export default function QuoteSection() {
  const { quote, bride, groom } = premiumWeddingData;
  return (
    <section className={`bg-[#3D2B1F] text-white py-20 px-6 flex flex-col items-center text-center ${lato.className} relative overflow-hidden`}>
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="max-w-lg relative z-10"
      >
        <motion.p variants={fadeUp} className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase mb-6">
          Assalamu'alaikum Wr. Wb.
        </motion.p>

        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
            <path d="M0 28 C0 16, 8 4, 18 0 C14 8, 14 18, 0 28Z" fill="#C9A96E" opacity="0.5"/>
            <path d="M22 28 C22 16, 30 4, 40 0 C36 8, 36 18, 22 28Z" fill="#C9A96E" opacity="0.5"/>
          </svg>
        </motion.div>

        <motion.p variants={fadeUp} className={`${playfair.className} text-base md:text-lg leading-loose text-white/90 italic mb-6`}>
          "{quote.text}"
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
          <span className="text-[#C9A96E] text-[10px] tracking-widest uppercase">{quote.source}</span>
          <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
        </motion.div>

        <motion.p variants={fadeUp} className="text-white/60 text-xs font-light leading-relaxed">
          Kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu dalam pernikahan putra-putri kami.
        </motion.p>

        <motion.p variants={fadeUp} className={`${greatVibes.className} text-3xl text-[#C9A96E] mt-6`}>
          {bride.nickname} & {groom.nickname}
        </motion.p>
      </motion.div>
    </section>
  );
}

export { SectionHeader, fadeUp };
