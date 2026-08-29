"use client";

import { Home, Users, Calendar, Image, MessageCircle } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Beranda" },
  { id: "mempelai", icon: Users, label: "Mempelai" },
  { id: "date", icon: Calendar, label: "Acara" },
  { id: "galeri", icon: Image, label: "Galeri" },
  { id: "ucapan", icon: MessageCircle, label: "Ucapan" },
];

export default function BottomNav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#C9A96E]/20 px-2 pb-safe shadow-[0_-4px_24px_rgba(61,43,31,0.06)] max-w-2xl mx-auto">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="flex flex-col items-center gap-0.5 px-3 py-2 group"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Icon size={18} className="text-[#C4B49A] group-hover:text-[#8B7355] group-active:text-[#3D2B1F] transition-colors duration-200" strokeWidth={1.5} />
            </div>
            <span className="text-[9px] tracking-widest uppercase text-[#C4B49A] group-hover:text-[#8B7355] transition-colors duration-200">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
