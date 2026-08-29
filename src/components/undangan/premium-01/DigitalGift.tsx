"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Lato } from "next/font/google";
import { useState } from "react";
import { premiumWeddingData } from "@/data/premium-01";
import { SectionHeader, fadeUp } from "./QuoteSection";
import { Copy, CheckCircle2, ChevronDown } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });

export default function DigitalGift() {
  const { gifts, giftAddress } = premiumWeddingData;
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className={`bg-[#F9F6F1] py-20 px-6 flex flex-col items-center ${lato.className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="w-full max-w-lg flex flex-col items-center"
      >
        <motion.div variants={fadeUp}>
          <SectionHeader label="Wedding Gift" title="Tanda Kasih" />
        </motion.div>

        <motion.p variants={fadeUp} className="text-[#8B7355] text-sm font-light text-center leading-relaxed mb-8 max-w-sm">
          "Kehadiran dan doa restu Anda adalah hadiah terbesar bagi kami. Namun bila Anda ingin memberikan tanda kasih, kami sangat berterima kasih."
        </motion.p>

        {/* Expandable toggle — inline, not modal */}
        <motion.div variants={fadeUp} className="w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-6 py-4 bg-white border border-[#C9A96E]/30 text-[#3D2B1F] hover:bg-[#EDE0CC]/20 transition-colors"
          >
            <span className={`${playfair.className} text-base tracking-wide`}>Berikan Tanda Kasih</span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={18} className="text-[#C9A96E]" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                className="overflow-hidden"
              >
                <div className="bg-white border-x border-b border-[#C9A96E]/30 p-6 flex flex-col gap-5">
                  {/* Bank accounts */}
                  {gifts.map((gift, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3 p-4 bg-[#F9F6F1] border border-[#C9A96E]/15">
                      <div>
                        <p className="text-[#3D2B1F] font-semibold text-sm mb-0.5">{gift.bank}</p>
                        <p className="text-[#3D2B1F] font-mono text-base tracking-wider">{gift.accountNumber}</p>
                        <p className="text-[#8B7355] text-[11px] mt-0.5">a.n. {gift.accountName}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(gift.accountNumber, gift.bank)}
                        className="flex flex-col items-center gap-1 text-[#C9A96E] hover:text-[#8B7355] transition-colors shrink-0"
                      >
                        {copied === gift.bank ? <CheckCircle2 size={20} className="text-green-500" /> : <Copy size={18} />}
                        <span className="text-[9px] tracking-wider uppercase">{copied === gift.bank ? "Disalin" : "Salin"}</span>
                      </button>
                    </div>
                  ))}

                  {/* Divider */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-[1px] bg-[#C9A96E]/20" />
                    <span className="text-[#C9A96E] text-[10px] tracking-widest uppercase">atau</span>
                    <div className="flex-1 h-[1px] bg-[#C9A96E]/20" />
                  </div>

                  {/* Physical address */}
                  <div className="p-4 bg-[#F9F6F1] border border-[#C9A96E]/15">
                    <p className="text-[#3D2B1F] font-semibold text-sm mb-1">Kirim Hadiah Fisik</p>
                    <p className="text-[#8B7355] text-xs font-light leading-relaxed mb-3">{giftAddress.address}</p>
                    <p className="text-[#8B7355] text-xs mb-3">Penerima: <span className="text-[#3D2B1F] font-medium">{giftAddress.receiver}</span></p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCopy(giftAddress.address, 'addr')}
                        className="flex-1 py-2 text-[11px] tracking-widest border border-[#C9A96E]/40 text-[#8B7355] hover:bg-[#C9A96E]/10 transition-colors flex items-center justify-center gap-1.5"
                      >
                        {copied === 'addr' ? <CheckCircle2 size={12} className="text-green-500" /> : <Copy size={12} />}
                        Salin Alamat
                      </button>
                      <a
                        href={`https://wa.me/${giftAddress.phone.replace(/^0/, '62')}`}
                        target="_blank" rel="noreferrer"
                        className="flex-1 py-2 text-[11px] tracking-widest bg-[#3D2B1F] text-white hover:bg-[#2A1E15] transition-colors text-center"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
