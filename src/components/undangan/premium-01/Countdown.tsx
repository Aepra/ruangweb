"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Lato } from "next/font/google";
import { useState, useEffect } from "react";
import { premiumWeddingData } from "@/data/premium-01";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function Countdown() {
  const { weddingDate } = premiumWeddingData;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const target = new Date(weddingDate).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft(prev => ({ ...prev, isExpired: true }));
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          isExpired: false
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <section className={`py-24 px-6 bg-[#1A1A1A] text-white flex flex-col items-center relative overflow-hidden ${lato.className}`}>
      {/* Background element for luxury feel */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
         <div className="w-[150vw] md:w-[60vw] aspect-square rounded-full border-[1px] border-white" />
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="w-full max-w-4xl flex flex-col items-center text-center relative z-10"
      >
        <motion.span variants={fadeUp} className="uppercase tracking-[0.3em] text-xs font-light text-white/70 mb-12">
          Save The Date
        </motion.span>
        
        <motion.h2 variants={fadeUp} className={`${playfair.className} text-4xl md:text-6xl mb-16 tracking-wide`}>
          {premiumWeddingData.formattedDate}
        </motion.h2>

        {timeLeft.isExpired ? (
          <motion.div variants={fadeUp} className="py-8">
            <span className="uppercase tracking-[0.3em] text-sm md:text-lg font-light text-[#D5CFC4]">
              The Day Has Arrived
            </span>
          </motion.div>
        ) : (
          <motion.div 
            variants={fadeUp} 
            className="flex flex-wrap justify-center gap-6 md:gap-16 w-full"
          >
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className={`${playfair.className} text-3xl md:text-5xl mb-2 font-medium`}>
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-white/50">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
