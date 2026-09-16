"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { servicesData, getIconComponent } from "@/data/services";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda Pamflet", href: "#" },
    { name: "Layanan & Paket", href: "#services", hasDropdown: true },
    { name: "Keunggulan", href: "#features" },
    { name: "Cara Pesan", href: "#workflow" },
    { name: "Kontak", href: "#contact" },
  ];

  const waLink = "https://wa.me/6285796508390?text=Halo%20Admin%20RuangWeb,%20saya%20ingin%20konsultasi%20pembuatan%20website.";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2"
          : "bg-white border-b border-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-none flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
              <Code2 size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 leading-none">
                RuangWeb
              </span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                Jasa Website
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-[14px] font-semibold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1 py-2"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} className="text-slate-400 group-hover:rotate-180 transition-transform duration-300" />}
              </a>
              
              {/* Desktop Dropdown */}
              {link.hasDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] bg-white border border-slate-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
                  <div className="p-3 grid grid-cols-1 gap-1">
                    {servicesData.map((service) => {
                      const Icon = getIconComponent(service.iconName);
                      return (
                        <Link 
                          key={service.slug} 
                          href={`/layanan/${service.slug}`}
                          className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-xl transition-colors group/item"
                        >
                          <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center bg-slate-50 group-hover/item:bg-white text-slate-400 group-hover/item:text-blue-600 shadow-sm border border-slate-100 transition-colors">
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="font-bold text-slate-700 group-hover/item:text-blue-700 text-sm">
                              {service.title}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex-none flex justify-end items-center gap-4">
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200"
          >
            Konsultasi WA
            <MessageCircle size={16} className="fill-current" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-700 hover:text-blue-600"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-2 max-h-[85vh] overflow-y-auto">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col border-b border-slate-100">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="text-base font-bold text-slate-800 hover:text-blue-600 py-3 flex items-center justify-between w-full text-left"
                      >
                        {link.name}
                        <div className={`p-1 rounded-full ${isMobileServicesOpen ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'} transition-colors`}>
                          <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-4 pl-4 border-l-2 border-slate-100 ml-2 mt-2">
                              {servicesData.map((service) => {
                                const Icon = getIconComponent(service.iconName);
                                return (
                                  <Link
                                    key={service.slug}
                                    href={`/layanan/${service.slug}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-blue-50 text-slate-600 hover:text-blue-700 transition-colors"
                                  >
                                    <div className="w-8 h-8 rounded-md bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                                      <Icon size={14} />
                                    </div>
                                    <span className="text-sm font-semibold">{service.title}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-bold text-slate-800 hover:text-blue-600 py-3 border-b border-slate-100 flex items-center justify-between"
                  >
                    {link.name}
                  </a>
                );
              })}
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="mt-6 w-full py-3.5 rounded-xl bg-blue-600 text-center text-white font-bold shadow-md flex items-center justify-center gap-2"
              >
                Konsultasi WA
                <MessageCircle size={18} className="fill-current" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
