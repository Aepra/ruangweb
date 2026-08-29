"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Eye, Sparkles, Heart, ShoppingCart } from "lucide-react";
import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";

// Import a beautiful serif font specifically for this page
const playfair = Playfair_Display({ subsets: ["latin"] });

// Hardcoded Data
const TAGS = ["Semua", "Pernikahan", "Ulang Tahun", "Kelulusan", "Fantasy", "Kartun", "Bunga", "Minimalis", "Klasik", "Modern"];

const INVITATIONS = [
  { id: 1, title: "Royal Elegance", price: "Rp 149.000", tags: ["Pernikahan", "Klasik", "Bunga"], imgUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "Sweet Seventeen", price: "Rp 99.000", tags: ["Ulang Tahun", "Bunga", "Modern"], imgUrl: "https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "Graduation Party", price: "Rp 79.000", tags: ["Kelulusan", "Minimalis"], imgUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop" },
  { id: 4, title: "Fairy Tale", price: "Rp 129.000", tags: ["Pernikahan", "Fantasy", "Kartun"], imgUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" },
  { id: 5, title: "Spring Blossom", price: "Rp 119.000", tags: ["Pernikahan", "Bunga", "Klasik"], imgUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600&auto=format&fit=crop" },
  { id: 6, title: "Cyber Neon", price: "Rp 199.000", tags: ["Ulang Tahun", "Modern", "Fantasy"], imgUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop" },
  { id: 7, title: "Minimalist White", price: "Rp 89.000", tags: ["Pernikahan", "Minimalis", "Modern"], imgUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop" },
  { id: 8, title: "Anime Vibes", price: "Rp 159.000", tags: ["Ulang Tahun", "Kartun", "Fantasy"], imgUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop" },
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
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col text-slate-800">
      {/* Header / Hero Section Khusus Katalog */}
      <div className="relative pt-6 pb-4 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-[#FFF5F7] to-[#FDFBF7]">
        {/* Very Soft Aesthetic Background Elements */}
        <div className="absolute top-0 right-10 w-[200px] h-[200px] bg-rose-200/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute top-0 left-10 w-[200px] h-[200px] bg-amber-100/30 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="w-full flex justify-start mb-2 md:mb-4">
            <Link 
              href="/#services"
              className="inline-flex items-center gap-1 text-[10px] md:text-xs uppercase tracking-widest text-rose-400 hover:text-rose-600 transition-colors font-medium"
            >
              <ArrowLeft size={12} />
              Kembali ke Beranda
            </Link>
          </div>
          
          <h1 className={`${playfair.className} text-2xl md:text-4xl font-semibold text-slate-800 mb-2 tracking-tight leading-tight`}>
            Koleksi <span className="italic font-light text-rose-500">Undangan</span> Digital
          </h1>
          <p className="text-xs md:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed font-light line-clamp-2 md:line-clamp-none">
            Sempurnakan momen bahagia Anda dengan sentuhan desain yang lembut, elegan, dan abadi.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-12 py-2 relative z-10">
        
        {/* Search & Filter Bar */}
        <div className="mb-6 space-y-4">
          
          {/* Search Bar - Softer Design */}
          <div className="max-w-lg mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-slate-300 group-focus-within:text-rose-400 transition-colors" size={16} />
            </div>
            <input 
              type="text" 
              placeholder="Cari tema undangan..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 md:py-3 rounded-full bg-white/70 backdrop-blur-md border border-rose-100/50 focus:border-rose-300 focus:ring-4 focus:ring-rose-100/50 outline-none transition-all shadow-[0_8px_30px_rgb(0,0,0,0.02)] text-slate-600 placeholder:text-slate-300 font-light text-xs md:text-sm"
            />
          </div>

          {/* Tags Filter - 2 Rows Scrollable */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="grid grid-rows-2 grid-flow-col gap-2 min-w-max md:w-full md:flex md:flex-wrap md:justify-center max-w-3xl mx-auto">
              {TAGS.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs transition-all duration-500 tracking-wide whitespace-nowrap ${
                    activeTag === tag 
                      ? "bg-rose-400 text-white shadow-md shadow-rose-200/50 font-medium" 
                      : "bg-white/50 text-slate-500 hover:bg-rose-50 hover:text-rose-500 border border-rose-100/30 font-light"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Catalog */}
        {filteredInvitations.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10">
            {filteredInvitations.map(inv => (
              <div 
                key={inv.id}
                className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 group flex flex-col border border-rose-50/50"
              >
                {/* Thumbnail - Softer edges */}
                <div className="aspect-[3/4] relative overflow-hidden bg-rose-50/30 m-1 md:m-2 rounded-[1rem] md:rounded-[1.5rem]">
                  <img 
                    src={inv.imgUrl} 
                    alt={inv.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000 ease-out"
                  />
                  {/* Overlay Price Tag - Elegant */}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 rounded-full text-[9px] md:text-xs font-semibold tracking-wider text-slate-700 shadow-sm border border-white/50">
                    {inv.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 md:p-6 flex flex-col flex-1 items-center text-center">
                  <h3 className={`${playfair.className} text-sm md:text-2xl text-slate-800 mb-2 md:mb-4 group-hover:text-rose-500 transition-colors line-clamp-1 md:line-clamp-none`}>
                    {inv.title}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-3 md:mb-8">
                    {inv.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[8px] md:text-[11px] font-medium tracking-wider uppercase text-slate-400 bg-slate-50 px-1 md:px-2 rounded-sm border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons - Soft */}
                  <div className="mt-auto w-full flex items-center gap-2">
                    <button className="flex-1 py-2 md:py-3.5 rounded-xl md:rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-600 font-medium transition-all duration-500 flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-xs tracking-wide border border-slate-100">
                      <Eye size={14} className="text-slate-400 md:w-4 md:h-4" />
                      Lihat
                    </button>
                    <button className="flex-1 py-2 md:py-3.5 rounded-xl md:rounded-2xl bg-rose-400 hover:bg-rose-500 text-white font-medium transition-all duration-500 flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-xs tracking-wide shadow-md shadow-rose-200/50">
                      <ShoppingCart size={14} className="text-white md:w-4 md:h-4" />
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-24 h-24 bg-rose-50/50 rounded-full flex items-center justify-center mx-auto mb-8 relative">
              <div className="absolute inset-0 border border-rose-100 rounded-full animate-ping opacity-20" />
              <Heart className="text-rose-300" size={32} />
            </div>
            <h3 className={`${playfair.className} text-3xl text-slate-700 mb-4`}>Tidak Ada Hasil</h3>
            <p className="text-slate-500 font-light max-w-md mx-auto mb-8">
              Kami tidak menemukan desain undangan yang sesuai dengan pencarian Anda. Mari coba kata kunci lain.
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveTag("Semua"); }}
              className="px-8 py-3.5 bg-rose-400 text-white font-medium rounded-full hover:bg-rose-500 transition-all shadow-lg shadow-rose-200/50 text-sm tracking-wide"
            >
              Kembali ke Semua Koleksi
            </button>
          </div>
        )}

      </div>

      <Footer />
    </main>
  );
}
