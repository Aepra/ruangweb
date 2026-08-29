'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SidebarNav } from './dashboard-sidebar';
import { usePathname } from 'next/navigation';

export function MobileSidebar({ activeWorkspace = 'RuangWeb Pusat' }: { activeWorkspace?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Tutup sidebar jika rute berubah
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="md:hidden text-slate-300 hover:text-white transition-colors">
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 bottom-0 left-0 w-[260px] bg-[#080808] border-r border-white/5 shadow-2xl animate-in slide-in-from-left duration-200">
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-4 right-[-40px] w-8 h-8 flex items-center justify-center rounded-full bg-[#111] text-white border border-white/10 shadow-lg"
            >
              <X size={18} />
            </button>
            <SidebarNav activeWorkspace={activeWorkspace} className="w-full" />
          </div>
        </div>
      )}
    </>
  );
}
