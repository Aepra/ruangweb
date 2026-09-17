"use client";

import { motion } from "framer-motion";
import { ArrowRight, Tag, Layers, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { getIconComponent } from "@/data/services";

export default function PamphletCatalog({ servicesData }: { servicesData: any[] }) {
  const waLink = "https://wa.me/6285796508390?text=";

  return (
    <section id="services" className="py-16 md:py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-widest mb-2"
          >
            Katalog Pamflet
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 drop-shadow-sm tracking-tight"
          >
            Pilihan Layanan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-sm md:text-base font-medium max-w-md mx-auto"
          >
            Pilih kategori di bawah ini untuk melihat rincian paket selengkapnya.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => {
            const Icon = getIconComponent(service.iconName);
            const starterPkg = service.packages[0];
            const starterPrice = starterPkg?.price || "Sesuai Kebutuhan";
            const starterOriginalPrice = starterPkg?.originalPrice || null;
            // Check if any package has a discount
            const maxDiscount = service.packages.reduce((max: number, p: any) => Math.max(max, p.discount || 0), 0);
            
            // Map dark gradient colors to light theme vibrant bg colors
            const getVibrantColors = (colorString: string) => {
              if (colorString.includes('emerald') || colorString.includes('teal')) return 'bg-emerald-100 text-emerald-600 border-emerald-200';
              if (colorString.includes('blue') || colorString.includes('indigo')) return 'bg-blue-100 text-blue-600 border-blue-200';
              if (colorString.includes('amber') || colorString.includes('orange')) return 'bg-amber-100 text-amber-600 border-amber-200';
              if (colorString.includes('pink') || colorString.includes('rose')) return 'bg-rose-100 text-rose-600 border-rose-200';
              if (colorString.includes('purple')) return 'bg-purple-100 text-purple-600 border-purple-200';
              return 'bg-blue-100 text-blue-600 border-blue-200';
            };
            const vibrantTheme = getVibrantColors(service.color);
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-5 md:p-6 relative overflow-hidden group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
              >
                {/* Thin vibrant top accent line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative z-10 flex flex-col h-full mt-2">
                  
                  {/* Icon & Starting Price */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${vibrantTheme.split(' ')[0]} ${vibrantTheme.split(' ')[1]} flex items-center justify-center shadow-sm transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="md:w-7 md:h-7" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {maxDiscount > 0 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-black bg-red-500 text-white shadow-sm">
                          HEMAT {maxDiscount}%
                        </span>
                      )}
                      <div className="inline-flex flex-col items-end">
                        {starterOriginalPrice && (
                          <span className="text-[10px] text-slate-400 line-through leading-none">{starterOriginalPrice}</span>
                        )}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs md:text-sm font-bold shadow-sm">
                          <Tag size={12} className="md:w-3.5 md:h-3.5" />
                          Mulai {starterPrice}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h2>

                  {/* Discount promo strip */}
                  {maxDiscount > 0 && (
                    <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-100">
                      <span className="text-red-500 text-base leading-none">✂</span>
                      <p className="text-red-600 text-xs md:text-sm font-bold">
                        Diskon hingga <span className="text-red-600">{maxDiscount}%</span> untuk paket ini!
                      </p>
                    </div>
                  )}

                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 flex-grow font-medium">
                    {service.description}
                  </p>
                  
                  {/* Package Count & Action */}
                  <div className="mt-auto pt-4 md:pt-5 border-t border-slate-100">
                    <p className="text-slate-500 text-xs md:text-sm font-bold mb-3 md:mb-4 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-500 w-4 h-4" />
                      Tersedia {service.packages.length} Pilihan Paket
                    </p>
                    
                    <Link 
                      href={`/layanan/${service.slug}`}
                      className="inline-flex items-center justify-between w-full font-bold text-sm md:text-base text-blue-600 group-hover:text-blue-700 transition-colors"
                    >
                      Lihat Paket
                      <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
