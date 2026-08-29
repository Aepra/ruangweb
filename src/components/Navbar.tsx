"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/#services" },
    { name: "Paket & Harga", href: "/paket" },
    { name: "Portofolio", href: "/#portfolio" },
    { name: "Kontak", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-slate-800 shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
              <Code2 size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Ruang<span className="text-purple-400">Web</span>
            </span>
          </a>
        </div>

        {/* Desktop Nav - Center Symmetrical */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Buttons - Right */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/admin/login" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Login Admin
            </Link>
            <button className="px-6 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              Mulai Proyek
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-white py-2 border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            <Link href="/admin/login" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 w-full py-3 rounded-xl bg-slate-800 text-center text-white font-semibold shadow-lg hover:bg-slate-700">
              Login Admin
            </Link>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg shadow-purple-500/25">
              Mulai Proyek
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
