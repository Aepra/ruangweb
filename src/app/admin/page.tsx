import { db } from '@/lib/db';
import { services, packages, siteStats } from '@/db/schema';
import { count } from 'drizzle-orm';
import { Activity, LayoutList, PackageOpen, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDashboardPage() {
  const servicesCount = await db.select({ value: count() }).from(services);
  const packagesCount = await db.select({ value: count() }).from(packages);
  const stats = await db.query.siteStats.findFirst();

  const cards = [
    {
      label: 'Total Layanan',
      value: servicesCount[0]?.value || 0,
      icon: LayoutList,
      gradient: 'from-blue-600 to-indigo-600',
      glow: 'shadow-blue-900/30',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
    },
    {
      label: 'Total Paket',
      value: packagesCount[0]?.value || 0,
      icon: PackageOpen,
      gradient: 'from-indigo-600 to-purple-600',
      glow: 'shadow-indigo-900/30',
      bg: 'bg-indigo-500/10',
      text: 'text-indigo-400',
    },
    {
      label: 'Total Pengunjung',
      value: stats?.totalVisitors || 0,
      icon: TrendingUp,
      gradient: 'from-emerald-600 to-teal-600',
      glow: 'shadow-emerald-900/30',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Selamat datang kembali! Berikut ringkasan sistem Anda.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="relative bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 overflow-hidden group hover:border-slate-700/60 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`} />
              
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-2">{card.label}</p>
                  <p className="text-4xl font-black text-white">{card.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-2xl ${card.bg} flex items-center justify-center`}>
                  <Icon size={22} className={card.text} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-base font-bold text-slate-300 mb-4">Akses Cepat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/admin/services" className="group flex items-center justify-between p-5 bg-slate-900/50 border border-slate-800/60 rounded-2xl hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <PackageOpen size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Kelola Layanan & Paket</p>
                <p className="text-slate-500 text-xs mt-0.5">Atur harga, diskon, dan detail paket</p>
              </div>
            </div>
            <ArrowRight size={18} className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link href="/" target="_blank" className="group flex items-center justify-between p-5 bg-slate-900/50 border border-slate-800/60 rounded-2xl hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Activity size={20} className="text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Lihat Halaman Publik</p>
                <p className="text-slate-500 text-xs mt-0.5">Buka website RuangWeb di tab baru</p>
              </div>
            </div>
            <ArrowRight size={18} className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
}
