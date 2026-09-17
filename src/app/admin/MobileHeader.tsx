'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2, LayoutDashboard, Package, LogOut, MessageSquare } from 'lucide-react';

export default function MobileHeader({ session }: { session: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/60 flex items-center justify-between px-4">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
            <Code2 size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-sm">Admin Panel</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed top-0 right-0 z-50 h-full w-72 bg-slate-950 border-l border-slate-800/60 flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="h-14 flex items-center justify-between px-4 border-b border-slate-800/60">
          <span className="text-white font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
            <X size={20} />
          </button>
        </div>

        {/* User Info */}
        <div className="px-4 py-4 border-b border-slate-800/60">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-900/60 border border-slate-800/50">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {session?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{session?.name}</p>
              <p className="text-slate-500 text-xs">Administrator</p>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 p-4 space-y-1">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-3 px-3">Menu Utama</p>
          <Link href="/admin" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all">
            <LayoutDashboard size={18} className="text-slate-500" />
            Dashboard
          </Link>
          <Link href="/admin/services" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all">
            <Package size={18} className="text-slate-500" />
            Layanan & Paket
          </Link>
          <Link href="/admin/chat" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all">
            <MessageSquare size={18} className="text-slate-500" />
            Pesan & Chat
          </Link>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-800/60">
          <form action="/api/logout" method="POST">
            <button type="submit" className="flex items-center gap-3 px-3 py-3 w-full rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all text-left">
              <LogOut size={18} />
              Keluar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
