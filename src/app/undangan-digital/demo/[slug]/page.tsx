"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { Playfair_Display, Great_Vibes, Lato } from "next/font/google";
import { Calendar, MapPin, Music, Heart, ChevronDown, Gift, Copy, CheckCircle2, Image as ImageIcon, ChevronUp } from "lucide-react";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" as const, bounce: 0.4 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, type: "spring" as const, bounce: 0.3 } }
};

// Heart Mask Transition Component
const HeartTransition = ({ children, bg }: { children: React.ReactNode, bg: string }) => {
  return (
    <div className={`relative w-full overflow-hidden ${bg}`}>
      {/* Heart scale reveal overlay */}
      <motion.div 
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: [0, 1, 50], opacity: [1, 1, 0] }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none text-rose-400 flex items-center justify-center origin-center"
      >
        <Heart size={100} fill="currentColor" />
      </motion.div>
      
      {/* The actual content fades in (avoids zero-area IntersectionObserver bug) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full h-full relative"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function UndanganDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background states (Parallax + Dynamic changes)
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const flowerRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  const [copiedRek, setCopiedRek] = useState("");
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedRek(text);
    setTimeout(() => setCopiedRek(""), 2000);
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <main ref={containerRef} className={`bg-[#FDFBF7] min-h-screen text-slate-800 ${lato.className} overflow-x-hidden selection:bg-rose-200 relative`}>
      
      {/* Background Decorative Flowers (Fixed) */}
      <motion.div style={{ rotate: flowerRotate }} className="fixed top-[-10vw] right-[-10vw] w-[40vw] max-w-[300px] opacity-[0.07] pointer-events-none z-0">
        <img src="https://cdn-icons-png.flaticon.com/512/6215/6215303.png" alt="flower" className="w-full h-full" />
      </motion.div>
      <motion.div style={{ rotate: flowerRotate }} className="fixed bottom-[-10vw] left-[-10vw] w-[40vw] max-w-[300px] opacity-[0.07] pointer-events-none z-0">
        <img src="https://cdn-icons-png.flaticon.com/512/6215/6215303.png" alt="flower" className="w-full h-full" />
      </motion.div>

      {/* Navigation & Controls */}
      <Link href="/undangan-digital" className="fixed top-6 left-6 z-[100] w-10 h-10 bg-white/50 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-slate-700 shadow-lg active:scale-95 transition-transform hover:bg-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </Link>
      <button className="fixed top-6 right-6 z-[100] w-10 h-10 bg-rose-400/80 backdrop-blur-md border border-rose-300 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-300/30 active:scale-95 transition-transform hover:bg-rose-500">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
          <Music size={16} />
        </motion.div>
      </button>

      {/* 1. HERO SECTION (Parallax) */}
      <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 scale-110">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#FDFBF7] z-10" />
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop" alt="Wedding Cover" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} variants={staggerContainer} initial="hidden" animate="show" className="relative z-20 flex flex-col items-center justify-center text-center px-6 mt-10">
          <motion.p variants={fadeInUp} className="text-white/90 text-sm md:text-base tracking-[0.4em] uppercase mb-6 font-light">The Wedding Of</motion.p>
          <motion.h1 variants={scaleIn} className={`${greatVibes.className} text-[70px] md:text-9xl text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] mb-2 leading-none`}>
            Romeo <span className="block text-4xl md:text-6xl text-rose-300 my-2">&</span> Juliet
          </motion.h1>
          <motion.div variants={scaleIn} className="flex items-center gap-4 my-6">
            <div className="h-px w-12 md:w-20 bg-rose-300" />
            <Heart className="text-rose-300" size={16} fill="currentColor" />
            <div className="h-px w-12 md:w-20 bg-rose-300" />
          </motion.div>
          <motion.p variants={fadeInUp} className={`${playfair.className} text-white/90 text-xl md:text-2xl tracking-[0.2em] font-semibold`}>24 . 12 . 2028</motion.p>
        </motion.div>
      </section>

      {/* 2. QUOTE SECTION */}
      <HeartTransition bg="bg-[#FDFBF7]">
        <section className="relative py-24 md:py-32 px-6 z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={scaleIn}>
                <Heart size={32} className="mx-auto text-rose-300 mb-8 drop-shadow-md" fill="currentColor" />
              </motion.div>
              <motion.p variants={fadeInUp} className={`${playfair.className} text-xl md:text-3xl leading-relaxed text-slate-700 mb-6 italic`}>
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri..."
              </motion.p>
              <motion.p variants={fadeInUp} className="text-xs md:text-sm text-rose-500 font-bold uppercase tracking-[0.3em]">(Ar-Rum: 21)</motion.p>
            </motion.div>
          </div>
        </section>
      </HeartTransition>

      {/* 3. COUPLE SECTION */}
      <HeartTransition bg="bg-rose-50/50">
        <section className="py-24 relative z-10 mx-2 md:mx-10 rounded-[40px] md:rounded-[80px]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-20">
              <motion.h2 variants={fadeInUp} className={`${greatVibes.className} text-5xl md:text-7xl text-rose-400 mb-4`}>Sang Mempelai</motion.h2>
              <motion.div variants={scaleIn} className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto" />
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-10">
              <motion.div initial={{ opacity: 0, x: -100, rotate: -5 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, type: "spring", bounce: 0.3 }} className="flex-1 text-center relative">
                <div className="w-56 h-80 md:w-64 md:h-96 mx-auto mb-8 rounded-t-full overflow-hidden shadow-2xl border-8 border-white relative group z-10">
                  <div className="absolute inset-0 bg-rose-200/10 group-hover:bg-transparent transition-colors z-10 duration-700" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" alt="Groom" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                </div>
                <h3 className={`${playfair.className} text-3xl font-bold text-slate-800 mb-2`}>Romeo Montague</h3>
                <p className="text-sm text-slate-500 mb-1 tracking-widest uppercase">Putra dari</p>
                <p className="text-sm font-semibold text-slate-700">Bpk. Montague & Ibu Montague</p>
              </motion.div>

              <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, type: "spring", bounce: 0.5 }} className={`${greatVibes.className} text-7xl md:text-9xl text-rose-300 drop-shadow-md z-20`}>&</motion.div>

              <motion.div initial={{ opacity: 0, x: 100, rotate: 5 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, type: "spring", bounce: 0.3 }} className="flex-1 text-center relative">
                <div className="w-56 h-80 md:w-64 md:h-96 mx-auto mb-8 rounded-t-full overflow-hidden shadow-2xl border-8 border-white relative group z-10">
                  <div className="absolute inset-0 bg-rose-200/10 group-hover:bg-transparent transition-colors z-10 duration-700" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" alt="Bride" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                </div>
                <h3 className={`${playfair.className} text-3xl font-bold text-slate-800 mb-2`}>Juliet Capulet</h3>
                <p className="text-sm text-slate-500 mb-1 tracking-widest uppercase">Putri dari</p>
                <p className="text-sm font-semibold text-slate-700">Bpk. Capulet & Ibu Capulet</p>
              </motion.div>
            </div>
          </div>
        </section>
      </HeartTransition>

      {/* 4. LOVE STORY */}
      <HeartTransition bg="bg-[#FDFBF7]">
        <section className="py-24 px-6 z-10 relative">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className={`${greatVibes.className} text-5xl md:text-6xl text-slate-700 mb-2`}>Kisah Cinta</motion.h2>
              <motion.p variants={fadeInUp} className="text-rose-400 font-semibold tracking-widest uppercase text-xs">Perjalanan Kami</motion.p>
            </motion.div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-rose-200 before:to-transparent">
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FDFBF7] bg-rose-400 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10"><Heart size={16} fill="currentColor" /></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-xl shadow-rose-100/50 border border-rose-50 hover:-translate-y-2 transition-transform duration-500">
                  <span className={`${playfair.className} font-bold text-rose-400 text-xl block mb-1`}>Pertemuan Pertama</span>
                  <span className="text-xs font-bold text-slate-400 tracking-widest uppercase block mb-3">Agustus 2025</span>
                  <p className="text-sm text-slate-600 leading-relaxed">Berawal dari pertemuan tak terduga di sebuah kedai kopi kecil di sudut kota, takdir mulai merajut kisah kami berdua melalui perbincangan hangat sore itu.</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FDFBF7] bg-rose-400 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10"><Heart size={16} fill="currentColor" /></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-xl shadow-rose-100/50 border border-rose-50 hover:-translate-y-2 transition-transform duration-500">
                  <span className={`${playfair.className} font-bold text-rose-400 text-xl block mb-1`}>Menjalin Kasih</span>
                  <span className="text-xs font-bold text-slate-400 tracking-widest uppercase block mb-3">Februari 2026</span>
                  <p className="text-sm text-slate-600 leading-relaxed">Setelah mengenal lebih jauh, kami memutuskan untuk melangkah bersama, menyatukan dua isi kepala dan hati dalam ikatan cinta yang tulus.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </HeartTransition>

      {/* 5. GALLERY SECTION (Masonry Layout) */}
      <HeartTransition bg="bg-white">
        <section className="py-24 px-4 md:px-8 z-10 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.div variants={scaleIn} className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-rose-100">
                <ImageIcon size={28} className="text-rose-400" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className={`${greatVibes.className} text-5xl md:text-7xl text-slate-800 mb-4`}>Galeri Kami</motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-sm md:text-base">Momen-momen indah yang kami abadikan.</motion.p>
            </motion.div>

            {/* Simple Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryImages.map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (i % 3) * 0.2 }}
                  className="break-inside-avoid rounded-2xl overflow-hidden shadow-md group relative cursor-pointer"
                >
                  <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/20 transition-colors duration-500 z-10" />
                  <img src={src} alt="Gallery" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </HeartTransition>

      {/* 6. EVENT DETAILS (Glassmorphism + Parallax Background changes) */}
      <HeartTransition bg="bg-black">
        <section className="relative py-32 px-6 min-h-[900px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center bg-fixed z-0 scale-105" />
          <div className="absolute inset-0 bg-slate-900/60 z-0 backdrop-blur-[2px]" />

          <div className="relative z-10 max-w-5xl w-full">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className={`${greatVibes.className} text-6xl md:text-7xl text-white mb-2 drop-shadow-lg`}>Rangkaian Acara</motion.h2>
              <motion.p variants={fadeInUp} className="text-rose-200 text-sm tracking-[0.3em] uppercase font-semibold">Momen Bahagia Kami</motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: "spring" as const, bounce: 0.4 }} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-md"><Calendar size={28} className="text-white" /></div>
                <h3 className={`${playfair.className} text-4xl font-bold mb-8 text-rose-200`}>Akad Nikah</h3>
                <div className="flex flex-col gap-5 mb-10 text-lg md:text-xl font-medium tracking-wide">
                  <span>Sabtu, 24 Desember 2028</span>
                  <div className="w-12 h-px bg-white/30 mx-auto" />
                  <span>08.00 WIB - Selesai</span>
                  <div className="w-12 h-px bg-white/30 mx-auto" />
                  <div className="flex flex-col items-center justify-center gap-2 mt-2">
                    <span className="font-bold text-rose-200 tracking-wider">Masjid Agung Verona</span>
                    <span className="text-sm text-white/80 max-w-[250px] leading-relaxed">Jl. Cinta Abadi No. 1, Kota Cinta.</span>
                  </div>
                </div>
                <button className="px-8 py-3.5 bg-white text-slate-800 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-xl w-full md:w-auto">Buka Google Maps</button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, type: "spring" as const, bounce: 0.4 }} className="bg-rose-900/40 backdrop-blur-xl border border-rose-200/30 rounded-[32px] p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden hover:bg-rose-900/50 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 bg-rose-400/40 rounded-full flex items-center justify-center border border-rose-300/50 backdrop-blur-md"><Music size={28} className="text-white" /></div>
                <h3 className={`${playfair.className} text-4xl font-bold mb-8 text-rose-200`}>Resepsi</h3>
                <div className="flex flex-col gap-5 mb-10 text-lg md:text-xl font-medium tracking-wide">
                  <span>Sabtu, 24 Desember 2028</span>
                  <div className="w-12 h-px bg-rose-200/30 mx-auto" />
                  <span>11.00 WIB - Selesai</span>
                  <div className="w-12 h-px bg-rose-200/30 mx-auto" />
                  <div className="flex flex-col items-center justify-center gap-2 mt-2">
                    <span className="font-bold text-rose-200 tracking-wider">Grand Ballroom Hotel</span>
                    <span className="text-sm text-white/80 max-w-[250px] leading-relaxed">Jl. Bintang No. 99, Kota Cinta.</span>
                  </div>
                </div>
                <button className="px-8 py-3.5 bg-rose-400 text-white rounded-full font-bold text-sm transition-transform active:scale-95 shadow-xl w-full md:w-auto border border-rose-300">Buka Google Maps</button>
              </motion.div>
            </div>
          </div>
        </section>
      </HeartTransition>

      {/* 7. COMPACT WEDDING GIFT (Accordion) */}
      <HeartTransition bg="bg-[#FDFBF7]">
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-10">
              <motion.div variants={scaleIn} className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-rose-200/50">
                <Gift size={28} className="text-rose-400" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className={`${greatVibes.className} text-5xl md:text-7xl text-slate-800 mb-4`}>Wedding Gift</motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-sm leading-relaxed mb-8">
                Kehadiran Anda adalah kado terindah. Namun jika Anda ingin memberikan tanda kasih untuk kami, Anda dapat mengirimkannya melalui tombol di bawah ini.
              </motion.p>
              
              {/* ACCORDION BUTTON */}
              <motion.button 
                variants={fadeInUp}
                onClick={() => setIsGiftOpen(!isGiftOpen)}
                className="px-8 py-4 bg-rose-400 hover:bg-rose-500 text-white rounded-full font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto shadow-xl shadow-rose-400/30"
              >
                <Gift size={18} />
                Berikan Tanda Kasih
                <ChevronDown size={18} className={`transform transition-transform duration-300 ${isGiftOpen ? "rotate-180" : ""}`} />
              </motion.button>
            </motion.div>

            {/* ACCORDION CONTENT */}
            <AnimatePresence>
              {isGiftOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.5, type: "spring" as const, bounce: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-2xl shadow-rose-100/50 border border-rose-50 text-left flex flex-col gap-6">
                    
                    {/* Bank 1 */}
                    <div className="p-6 bg-[#FDFBF7] rounded-2xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm tracking-wide mb-1">BANK BCA</h4>
                        <p className={`${playfair.className} text-2xl font-semibold text-rose-500 tracking-widest mb-1`}>1234 5678 90</p>
                        <p className="text-slate-400 font-medium uppercase tracking-widest text-[10px]">A/N Romeo Montague</p>
                      </div>
                      <button onClick={() => handleCopy("1234567890")} className="px-5 py-2.5 bg-white border border-rose-100 text-rose-500 hover:bg-rose-50 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
                        {copiedRek === "1234567890" ? <><CheckCircle2 size={14} className="text-green-500" /> Tersalin</> : <><Copy size={14} /> Salin No. Rekening</>}
                      </button>
                    </div>

                    {/* Bank 2 */}
                    <div className="p-6 bg-[#FDFBF7] rounded-2xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm tracking-wide mb-1">BANK MANDIRI</h4>
                        <p className={`${playfair.className} text-2xl font-semibold text-rose-500 tracking-widest mb-1`}>0987 6543 21</p>
                        <p className="text-slate-400 font-medium uppercase tracking-widest text-[10px]">A/N Juliet Capulet</p>
                      </div>
                      <button onClick={() => handleCopy("0987654321")} className="px-5 py-2.5 bg-white border border-rose-100 text-rose-500 hover:bg-rose-50 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
                        {copiedRek === "0987654321" ? <><CheckCircle2 size={14} className="text-green-500" /> Tersalin</> : <><Copy size={14} /> Salin No. Rekening</>}
                      </button>
                    </div>

                    {/* Alamat */}
                    <div className="p-6 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl" />
                      <div className="relative z-10">
                        <h4 className="font-bold text-white text-sm tracking-wide mb-2 flex items-center gap-2"><MapPin size={16} className="text-rose-400"/> Kirim Kado (Fisik)</h4>
                        <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
                          Penerima: <span className="font-semibold text-white">Romeo Montague</span><br/>
                          Jl. Bunga Mawar No. 14, RT 01 / RW 02, Kec. Cinta, Kota Kasih Sayang, 12345.
                        </p>
                      </div>
                      <button onClick={() => handleCopy("Jl. Bunga Mawar No. 14, Kota Kasih Sayang")} className="relative z-10 px-5 py-2.5 bg-rose-500 text-white hover:bg-rose-600 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
                        {copiedRek === "Jl. Bunga Mawar No. 14, Kota Kasih Sayang" ? <><CheckCircle2 size={14} /> Tersalin</> : <><Copy size={14} /> Salin Alamat</>}
                      </button>
                    </div>

                    <button onClick={() => setIsGiftOpen(false)} className="mx-auto mt-2 w-8 h-8 flex items-center justify-center bg-slate-100 text-slate-500 hover:bg-slate-200 rounded-full transition-colors">
                      <ChevronUp size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </HeartTransition>

      {/* 8. RSVP & WISHES */}
      <HeartTransition bg="bg-rose-50">
        <section className="py-32 px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: "spring" as const, bounce: 0.3 }} className="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-50 text-center relative">
              <Heart size={40} className="mx-auto text-rose-300 mb-6" fill="currentColor" />
              <h3 className={`${playfair.className} text-4xl md:text-5xl font-bold text-slate-800 mb-4`}>RSVP & Ucapan</h3>
              <p className="text-slate-500 mb-10 text-sm md:text-base leading-relaxed">Kehadiran & doa restu Anda adalah kado terindah bagi kami. Mohon konfirmasi kehadiran Anda di bawah ini.</p>

              <form className="flex flex-col gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 pl-2">Nama Lengkap</label>
                  <input type="text" className="w-full bg-[#FDFBF7] rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-rose-300 focus:bg-white transition-all text-sm shadow-inner border border-rose-50" placeholder="Masukkan nama Anda..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 pl-2">Konfirmasi Kehadiran</label>
                  <div className="relative">
                    <select className="w-full bg-[#FDFBF7] rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-rose-300 focus:bg-white transition-all text-sm text-slate-700 shadow-inner appearance-none cursor-pointer border border-rose-50">
                      <option>Ya, Saya akan hadir</option>
                      <option>Maaf, Saya tidak bisa hadir</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 pl-2">Ucapan & Doa</label>
                  <textarea rows={4} className="w-full bg-[#FDFBF7] rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-rose-300 focus:bg-white transition-all text-sm resize-none shadow-inner border border-rose-50" placeholder="Tuliskan harapan & doa untuk kami..."></textarea>
                </div>
                <motion.button whileTap={{ scale: 0.97 }} className="w-full bg-slate-900 text-white font-bold tracking-wide rounded-2xl py-4 mt-4 shadow-xl shadow-slate-900/20 active:bg-slate-800 hover:-translate-y-1 transition-transform">
                  Kirim Ucapan & Konfirmasi
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </HeartTransition>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-16 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <h4 className={`${greatVibes.className} text-5xl md:text-6xl text-white mb-6 drop-shadow-md`}>Romeo & Juliet</h4>
          <p className="text-sm tracking-widest uppercase font-semibold mb-2 text-rose-300">Terima Kasih</p>
          <p className="text-xs text-slate-500">Made with ❤️ by Ruang Web Invitation</p>
        </motion.div>
      </footer>

      {/* CSS for Shine animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
      `}} />
    </main>
  );
}
