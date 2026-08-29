"use client";

import Link from "next/link";
import { Code2, Mail, Phone, MapPin, Globe, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
                <Code2 size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Ruang<span className="text-purple-400">Web</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Solusi digital terpercaya untuk mewujudkan website impian bisnis Anda. Cepat, modern, dan profesional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 hover:-translate-y-1 transition-all duration-300">
                <Heart size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:-translate-y-1 transition-all duration-300">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 hover:-translate-y-1 transition-all duration-300">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navigasi</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Beranda</Link></li>
              <li><Link href="/#services" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Layanan Kami</Link></li>
              <li><Link href="/paket" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Paket & Harga</Link></li>
              <li><Link href="/#portfolio" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Portofolio Karya</Link></li>
              <li><Link href="/admin/login" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Login Client / Admin</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Layanan Favorit</h3>
            <ul className="space-y-4">
              <li><Link href="/layanan/profil-usaha" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Company Profile</Link></li>
              <li><Link href="/layanan/toko-online" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Toko Online (E-Commerce)</Link></li>
              <li><Link href="/layanan/acara-undangan" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Undangan Digital</Link></li>
              <li><Link href="/layanan/aplikasi-custom" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Sistem Aplikasi Custom</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-purple-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Jl. Digital Teknologi No. 45, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-purple-400 shrink-0" />
                <span className="text-slate-400 text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-purple-400 shrink-0" />
                <span className="text-slate-400 text-sm">halo@ruangweb.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} RuangWeb. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
