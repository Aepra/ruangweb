"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, ShoppingCart, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

// Hardcoded Data
const TAGS = ["Semua", "Pernikahan", "Ulang Tahun", "Kelulusan", "Fantasy", "Kartun", "Bunga", "Minimalis", "Klasik", "Modern"];

const INVITATIONS = [
  { id: 1, slug: "royal-elegance", title: "Royal Elegance", price: "Rp 149.000", tags: ["Pernikahan", "Klasik", "Bunga"], imgUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop" },
  { id: 2, slug: "sweet-seventeen", title: "Sweet Seventeen", price: "Rp 99.000", tags: ["Ulang Tahun", "Bunga", "Modern"], imgUrl: "https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=600&auto=format&fit=crop" },
  { id: 3, slug: "graduation-party", title: "Graduation Party", price: "Rp 79.000", tags: ["Kelulusan", "Minimalis"], imgUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop" },
  { id: 4, slug: "fairy-tale", title: "Fairy Tale", price: "Rp 129.000", tags: ["Pernikahan", "Fantasy", "Kartun"], imgUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" },
  { id: 5, slug: "spring-blossom", title: "Spring Blossom", price: "Rp 119.000", tags: ["Pernikahan", "Bunga", "Klasik"], imgUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600&auto=format&fit=crop" },
  { id: 6, slug: "cyber-neon", title: "Cyber Neon", price: "Rp 199.000", tags: ["Ulang Tahun", "Modern", "Fantasy"], imgUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop" },
  { id: 7, slug: "minimalist-white", title: "Minimalist White", price: "Rp 89.000", tags: ["Pernikahan", "Minimalis", "Modern"], imgUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop" },
  { id: 8, slug: "anime-vibes", title: "Anime Vibes", price: "Rp 159.000", tags: ["Ulang Tahun", "Kartun", "Fantasy"], imgUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop" },
];

export default function UndanganDigitalCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("Semua");

  // Filter logic
  const filteredInvitations = INVITATIONS.filter(inv => {
    const matchesSearch = inv.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = activeTag === "Semua" || inv.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-rose-200">
      
      {/* Sticky Header - iOS Style (Compact) */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="sticky top-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-xl border-b border-rose-100/50 pt-4 pb-2 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          {/* Top Bar with Back Button */}
          <div className="flex items-center justify-between">
            <Link 
              href="/#services"
              className="flex items-center text-rose-500 hover:text-rose-600 active:opacity-50 transition-opacity font-semibold text-xs md:text-sm tracking-wide"
            >
              <ArrowLeft size={16} className="mr-1" />
              Kembali
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
            <h1 className={`${playfair.className} text-2xl md:text-3xl font-bold text-slate-900 tracking-tight`}>
              Koleksi <span className="italic font-light text-rose-500">Undangan</span>
            </h1>

            {/* Search Bar - iOS Search Field Style */}
            <div className="relative w-full md:w-72 group">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                <Search className="text-slate-400 group-focus-within:text-rose-500 transition-colors" size={16} />
              </div>
              <input 
                type="text" 
                placeholder="Cari tema..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-[10px] bg-[#EAE8E3] focus:bg-white border-2 border-transparent focus:border-rose-300 outline-none transition-all text-slate-800 placeholder:text-slate-500 text-sm font-medium shadow-sm"
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-6 relative z-10">
        
        {/* Tags Filter - iOS Segmented Control Style */}
        <div className="mb-6 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="grid grid-rows-2 grid-flow-col gap-2 min-w-max md:w-full md:flex md:flex-wrap">
            {TAGS.map(tag => (
              <motion.button
                whileTap={{ scale: 0.94 }}
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-[10px] text-[11px] md:text-xs font-semibold transition-colors tracking-wide whitespace-nowrap shadow-sm ${
                  activeTag === tag 
                    ? "bg-rose-500 text-white" 
                    : "bg-[#EAE8E3]/80 text-slate-700 hover:bg-[#DFDCD5]"
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grid Catalog */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredInvitations.length > 0 ? (
              filteredInvitations.map(inv => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={inv.id}
                  className="bg-white rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col border border-[#EAE8E3]"
                >
                  {/* Thumbnail */}
                  <motion.div 
                    whileTap={{ scale: 0.97 }}
                    className="aspect-[4/5] relative overflow-hidden bg-rose-50/30 cursor-pointer group"
                  >
                    <img 
                      src={inv.imgUrl} 
                      alt={inv.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    {/* Price Badge - iOS Style Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-[8px] text-[10px] md:text-xs font-bold text-slate-900 shadow-sm">
                      {inv.price}
                    </div>
                  </motion.div>

                  {/* Content Area */}
                  <div className="p-3 md:p-4 flex flex-col flex-1">
                    <h3 className={`${playfair.className} text-[15px] md:text-[18px] font-bold text-slate-900 mb-1 leading-tight tracking-tight line-clamp-1`}>
                      {inv.title}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                      {inv.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-[#EAE8E3]/60 px-1.5 py-0.5 rounded-[6px]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons - iOS Buttons */}
                    <div className="mt-auto w-full flex items-center gap-2">
                      <Link href={`/undangan-digital/demo/${inv.slug}`} className="flex-1 block">
                        <motion.button 
                          whileTap={{ scale: 0.94 }}
                          className="w-full py-2.5 md:py-3 rounded-[12px] bg-[#EAE8E3] text-rose-500 font-bold flex items-center justify-center gap-1 text-[11px] md:text-xs tracking-wide active:bg-[#DFDCD5]"
                        >
                          <Info size={14} className="md:w-4 md:h-4" />
                          Info
                        </motion.button>
                      </Link>
                      <motion.button 
                        whileTap={{ scale: 0.94 }}
                        className="flex-1 py-2.5 md:py-3 rounded-[12px] bg-rose-500 text-white font-bold flex items-center justify-center gap-1 text-[11px] md:text-xs tracking-wide shadow-sm shadow-rose-500/20 active:bg-rose-600"
                      >
                        <ShoppingCart size={14} className="md:w-4 md:h-4" />
                        Pesan
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                  <Search className="text-slate-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">Tidak Ditemukan</h3>
                <p className="text-slate-500 text-sm max-w-sm">
                  Tidak ada desain undangan yang cocok dengan pencarian Anda.
                </p>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setSearchQuery(""); setActiveTag("Semua"); }}
                  className="mt-4 px-5 py-2 bg-rose-400 text-white text-[11px] md:text-xs font-semibold rounded-full active:bg-rose-500 tracking-wide"
                >
                  Hapus Filter
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </main>
  );
}
