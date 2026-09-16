"use client";

import { Code2, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import VisitorCounter from "./VisitorCounter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waLink = "https://wa.me/6285796508390?text=Halo%20Admin%20RuangWeb,%20saya%20butuh%20bantuan.";

  return (
    <>
      <footer id="contact" className="bg-slate-900 pt-16 pb-8 relative overflow-hidden text-slate-400">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                  <Code2 size={22} />
                </div>
                <span className="font-bold text-xl tracking-tight text-white leading-tight">
                  RuangWeb
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Solusi digital terpercaya untuk mewujudkan website impian bisnis Anda. Cepat, modern, dan profesional.
              </p>
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-slate-300">Layanan WhatsApp Aktif: Senin - Sabtu (08.00 - 18.00 WIB)</span>
                </div>
                <VisitorCounter />
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Pilihan Layanan</h3>
              <ul className="space-y-3">
                {[
                  { name: "Website Desa", href: "/layanan/website-desa" },
                  { name: "Website Sekolah", href: "/layanan/website-sekolah" },
                  { name: "Website Instansi", href: "/layanan/website-instansi" },
                  { name: "Website Tokoh", href: "/layanan/website-tokoh" },
                  { name: "Aplikasi Kasir (POS)", href: "/layanan/aplikasi-kasir" },
                  { name: "Sistem Absensi", href: "/layanan/sistem-absensi" },
                  { name: "Toko Online", href: "/layanan/custom-lainnya" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:text-blue-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Hubungi Kami</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-slate-500 shrink-0 mt-0.5" />
                  <span className="text-sm">Indonesia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-300">+62 857-9650-8390</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-500 shrink-0" />
                  <span className="text-sm">admin@ruangweb.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs text-center md:text-left">
              &copy; {currentYear} RuangWeb. Hak Cipta Dilindungi.
            </p>
            <p className="text-slate-600 text-xs text-center md:text-right">
              Pamflet Promosi Digital Jasa Pembuatan Website & Sistem Informasi.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 px-5 py-3 bg-emerald-500 text-white font-bold rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:bg-emerald-600 hover:scale-105 transition-all duration-300"
      >
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <MessageCircle size={20} className="fill-current" />
        Tanya WA
      </a>
    </>
  );
}
