"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Lato } from "next/font/google";
import { useState, useEffect } from "react";
import { premiumWeddingData } from "@/data/premium-01";
import { SectionHeader, fadeUp } from "./QuoteSection";
import { MapPin } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

function Countdown() {
  const { weddingDate } = premiumWeddingData;
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });

  useEffect(() => {
    const target = new Date(weddingDate).getTime();
    const tick = () => {
      const now = Date.now();
      const d = target - now;
      if (d <= 0) { setTimeLeft(prev => ({ ...prev, expired: true })); return; }
      setTimeLeft({
        days: Math.floor(d / 86400000),
        hours: Math.floor((d % 86400000) / 3600000),
        minutes: Math.floor((d % 3600000) / 60000),
        seconds: Math.floor((d % 60000) / 1000),
        expired: false
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [weddingDate]);

  if (timeLeft.expired) {
    return <p className={`${playfair.className} text-[#C9A96E] text-xl text-center mt-4`}>Hari Istimewa Telah Tiba ✨</p>;
  }

  return (
    <div className="flex justify-center gap-4 md:gap-8 mt-6">
      {[
        { label: "Hari", value: timeLeft.days },
        { label: "Jam", value: timeLeft.hours },
        { label: "Menit", value: timeLeft.minutes },
        { label: "Detik", value: timeLeft.seconds },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-white border border-[#C9A96E]/30 px-3 py-2 md:px-5 md:py-3 min-w-[56px] md:min-w-[72px] text-center shadow-sm">
            <span className={`${playfair.className} text-2xl md:text-3xl text-[#3D2B1F] block leading-none`}>
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[#8B7355] text-[9px] tracking-widest uppercase mt-1.5">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function WeddingEvents() {
  const { events, formattedDate } = premiumWeddingData;

  return (
    <section id="date" className={`bg-[#F9F6F1] py-20 px-6 flex flex-col items-center ${lato.className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="w-full max-w-lg flex flex-col items-center"
      >
        <motion.div variants={fadeUp}>
          <SectionHeader label="Save The Date" />
        </motion.div>

        <motion.div variants={fadeUp} className={`${playfair.className} text-3xl md:text-4xl text-[#3D2B1F] text-center mb-2`}>
          {formattedDate}
        </motion.div>

        <motion.div variants={fadeUp} className="w-full">
          <Countdown />
        </motion.div>

        {/* Events */}
        <div className="flex flex-col gap-5 mt-10 w-full">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white border border-[#C9A96E]/20 p-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-6 h-6 rounded-full bg-[#C9A96E]/15 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                </div>
                <h3 className={`${playfair.className} text-[#3D2B1F] text-lg tracking-wide`}>{event.type}</h3>
              </div>
              
              <div className="border-t border-[#C9A96E]/15 pt-3 flex flex-col gap-1.5 text-sm">
                <p className="text-[#5C4A35] font-light">{event.dateStr}</p>
                <p className="text-[#8B7355] font-light text-xs tracking-wide">{event.timeStr}</p>
                <p className="text-[#3D2B1F] font-medium mt-1">{event.venue}</p>
                <p className="text-[#8B7355] font-light text-xs leading-relaxed">{event.address}</p>
                {event.dressCode && (
                  <p className="text-[#C9A96E] text-xs mt-1">Dress Code: {event.dressCode}</p>
                )}
              </div>

              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 py-2.5 border border-[#C9A96E]/50 text-[#8B7355] text-[11px] uppercase tracking-widest hover:bg-[#C9A96E]/10 transition-colors"
              >
                <MapPin size={12} />
                Lihat Lokasi
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
