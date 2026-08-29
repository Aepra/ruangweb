"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { servicesData, getIconComponent } from "@/data/services";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Catalog() {
  return (
    <section id="services" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Pilihan Kategori Layanan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Pilih kategori website yang sesuai dengan bidang bisnis Anda. Kami siap memberikan solusi digital terbaik.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {servicesData.map((service) => {
            const Icon = getIconComponent(service.iconName);
            
            return (
              <motion.div 
                key={service.id} 
                variants={item}
                className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors flex flex-col h-full overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  {Icon && <Icon size={28} />}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors line-clamp-2">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed text-sm line-clamp-3">
                  {service.description}
                </p>

                <Link 
                  href={`/layanan/${service.slug}`}
                  className="mt-auto flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white transition-colors"
                >
                  Lihat Paket & Detail <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
