"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MonitorSmartphone, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] opacity-60 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] opacity-60 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] opacity-50 mix-blend-screen pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dcbpbllh4/image/upload/v1707361730/grid-pattern_qaypxx.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.15] pointer-events-none" />

      {/* Floating Elements for Premium Feel */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 md:left-32 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5 backdrop-blur-md flex items-center justify-center hidden md:flex"
      >
        <Sparkles className="text-indigo-400" size={24} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-10 md:right-32 w-20 h-20 rounded-full bg-gradient-to-tl from-purple-500/20 to-pink-500/20 border border-white/5 backdrop-blur-md flex items-center justify-center hidden md:flex"
      >
        <Zap className="text-pink-400" size={28} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-700/50 text-sm font-medium text-purple-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span>Spesialis Jasa Pembuatan Website Modern</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1] drop-shadow-2xl"
          >
            Wujudkan Website <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 filter drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              Impian Anda
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Jasa pembuatan website profesional, cepat, dan modern untuk bisnis Anda. Tingkatkan kredibilitas dan jangkauan audiens dengan desain premium dari RuangWeb.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:-translate-y-1"
            >
              Lihat Layanan
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-700 text-white font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 hover:border-slate-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              Konsultasi Gratis
            </a>
          </motion.div>

          {/* Stats / Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 pt-10 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <MonitorSmartphone size={22} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-100">Responsive</p>
                <p className="text-sm text-slate-400">Di semua perangkat</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Zap size={22} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-100">Performa Tinggi</p>
                <p className="text-sm text-slate-400">Loading super cepat</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
