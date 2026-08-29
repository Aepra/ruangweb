"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Lato } from "next/font/google";
import { useState } from "react";
import { SectionHeader, fadeUp } from "./QuoteSection";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });

const mockWishes = [
  { name: "Andi Pratama", message: "Selamat menempuh hidup baru. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.", time: "2 menit lalu", attendance: "Hadir" },
  { name: "Siti Rahma", message: "Semoga selalu bahagia dan diberikan keberkahan dalam setiap langkah.", time: "10 menit lalu", attendance: "Hadir" },
  { name: "Budi Santoso", message: "Selamat ya! Semoga rumah tangganya harmonis dan penuh berkah. Maaf tidak bisa hadir.", time: "1 jam lalu", attendance: "Tidak Hadir" },
];

export default function WishForm() {
  const [formData, setFormData] = useState({ name: "", message: "", attendance: "hadir" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", message: "", attendance: "hadir" });
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  return (
    <section id="ucapan" className={`bg-white py-20 px-6 flex flex-col items-center ${lato.className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="w-full max-w-lg flex flex-col items-center"
      >
        <motion.div variants={fadeUp}>
          <SectionHeader label="RSVP & Doa" title="Ucapan & Kehadiran" />
        </motion.div>

        {/* Form */}
        <motion.form variants={fadeUp} onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mb-10">
          <input
            required
            type="text"
            placeholder="Nama Anda"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-[#F9F6F1] border border-[#C9A96E]/30 text-sm text-[#3D2B1F] placeholder:text-[#C4B49A] focus:outline-none focus:border-[#C9A96E] transition-colors"
          />
          <textarea
            required
            placeholder="Tuliskan ucapan dan doa untuk kami..."
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 bg-[#F9F6F1] border border-[#C9A96E]/30 text-sm text-[#3D2B1F] placeholder:text-[#C4B49A] focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
          />
          {/* Attendance selector */}
          <div className="flex gap-2">
            {["hadir", "absen"].map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => setFormData({ ...formData, attendance: opt })}
                className={`flex-1 py-2.5 text-xs tracking-widest uppercase border transition-colors ${formData.attendance === opt ? 'bg-[#3D2B1F] text-white border-[#3D2B1F]' : 'bg-white text-[#8B7355] border-[#C9A96E]/40 hover:border-[#C9A96E]'}`}
              >
                {opt === "hadir" ? "Akan Hadir" : "Belum Bisa Hadir"}
              </button>
            ))}
          </div>
          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full py-3.5 bg-[#3D2B1F] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#2A1E15] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {isSuccess ? "✓ Ucapan Terkirim" : isSubmitting ? "Mengirim..." : "Kirim Ucapan"}
          </button>
        </motion.form>

        {/* Wishes list */}
        <motion.div variants={fadeUp} className="w-full">
          <p className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase text-center mb-6">
            {mockWishes.length} Ucapan Tamu
          </p>
          <div className="flex flex-col gap-4">
            {mockWishes.map((wish, i) => (
              <div key={i} className="p-4 bg-[#F9F6F1] border border-[#C9A96E]/20">
                <div className="flex justify-between items-start mb-2">
                  <span className={`${playfair.className} text-[#3D2B1F] text-sm`}>{wish.name}</span>
                  <span className={`text-[9px] px-2 py-0.5 tracking-wider uppercase ${wish.attendance === 'Hadir' ? 'bg-[#C9A96E]/15 text-[#8B7355]' : 'bg-[#EDE8E1] text-[#A08C78]'}`}>
                    {wish.attendance}
                  </span>
                </div>
                <p className="text-[#8B7355] text-xs font-light leading-relaxed mb-2">"{wish.message}"</p>
                <p className="text-[#C4B49A] text-[10px]">{wish.time}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
