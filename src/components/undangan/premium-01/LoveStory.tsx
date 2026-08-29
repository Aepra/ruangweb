"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Lato } from "next/font/google";
import { premiumWeddingData } from "@/data/premium-01";
import { SectionHeader, fadeUp } from "./QuoteSection";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });

export default function LoveStory() {
  const { loveStory } = premiumWeddingData;

  return (
    <section className={`bg-white py-20 px-6 flex flex-col items-center ${lato.className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="w-full max-w-lg"
      >
        <div className="flex flex-col items-center">
          <motion.div variants={fadeUp}>
            <SectionHeader label="Our Journey" title="Kisah Cinta Kami" />
          </motion.div>
        </div>

        <div className="relative mt-4">
          {/* Vertical center line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-[#C9A96E]/30" />

          {loveStory.map((story, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="relative flex gap-6 mb-10"
            >
              {/* Dot */}
              <motion.div
                variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring" as const, stiffness: 300 } } }}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F9F6F1] border-2 border-[#C9A96E] flex items-center justify-center z-10"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#C9A96E]" />
              </motion.div>

              {/* Content */}
              <motion.div variants={fadeUp} className="flex-1 pb-2">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className={`${playfair.className} text-[#C9A96E] text-2xl font-medium`}>{story.year}</span>
                  <span className="text-[#3D2B1F] text-sm font-semibold tracking-wide">{story.title}</span>
                </div>
                <p className="text-[#8B7355] text-sm font-light leading-relaxed">{story.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
