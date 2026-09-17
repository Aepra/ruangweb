import { getSession, logoutUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Package, LogOut, Code2, MessageSquare } from 'lucide-react';
import MobileHeader from './MobileHeader';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Sidebar — Desktop Only */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-slate-950 border-r border-slate-800/50 fixed top-0 left-0 h-full z-30">
        {/* Logo */}
        <div className="p-6 border-b border-slate-800/50">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/30">
              <Code2 size={22} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-base leading-none">RuangWeb</p>
              <p className="text-slate-500 text-xs mt-0.5">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* User Info */}
        <div className="px-4 py-4 border-b border-slate-800/50">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-900/60 border border-slate-800/50">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg shadow-blue-900/30">
              {session.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{session.name}</p>
              <p className="text-slate-500 text-xs">Administrator</p>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-3 px-3">Menu Utama</p>
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all group">
            <LayoutDashboard size={18} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
            Dashboard
          </Link>
          <Link href="/admin/services" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all group">
            <Package size={18} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
            Layanan &amp; Paket
          </Link>
          <Link href="/admin/chat" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all group">
            <MessageSquare size={18} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
            Pesan &amp; Chat
          </Link>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-800/50">
          <form action={async () => {
            'use server';
            await logoutUser();
            redirect('/admin/login');
          }}>
            <button type="submit" className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all text-left group">
              <LogOut size={18} className="group-hover:text-red-400 transition-colors" />
              Keluar
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile Header */}
      <MobileHeader session={session} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Desktop Page Header */}
        <div className="hidden lg:flex h-14 items-center border-b border-slate-800/50 px-8 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
          <span className="text-slate-500 text-xs font-medium">Online</span>
        </div>
        <main className="flex-1 p-4 md:p-6 lg:p-8 mt-14 lg:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
