import Navbar from "@/components/Navbar";
import { CheckCircle2, Zap, Image as ImageIcon, ShieldCheck, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Paket & Harga | RuangWeb",
  description: "Pilih paket pembuatan website profesional sesuai kebutuhan Anda.",
};

const renderValue = (val: string) => {
  if (val === "✓") {
    return <CheckCircle2 className="inline-block text-emerald-500" size={18} />;
  }
  if (val === "—") {
    return <span className="text-slate-600">—</span>;
  }
  if (val === "Add-on") {
    return <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-md">Add-on</span>;
  }
  return <span className="text-slate-400 font-medium">{val}</span>;
};

export default function PaketPage() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-purple-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Pilih Solusi Website <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Sesuai Kebutuhan Bisnis Anda
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Kami tidak sekadar membuat website, kami membangun sistem yang bekerja untuk Anda. Pilih dari paket Starter yang praktis hingga Custom yang canggih.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Starter */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-colors flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <div className="mb-4 flex items-baseline">
                <span className="text-slate-400 text-sm mr-2">Mulai</span>
                <span className="text-3xl font-extrabold text-white">Rp 500.000</span>
              </div>
              <p className="text-sm text-emerald-400 font-bold mb-4">Website Informasi + CMS Dasar</p>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 border-l-4 border-l-emerald-500">
                <p className="text-sm text-slate-300 italic">"Saya ingin punya website dan bisa mengubah isinya sendiri."</p>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-1 mt-4">
              {['Desain Profesional & Responsif', 'CMS Berita, Galeri & Layanan', '1 Akun Admin Utama', 'Penyimpanan hingga 1 GB', 'Performa Teroptimasi'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/1234567890?text=Halo, saya tertarik konsultasi Paket Starter" 
              target="_blank" rel="noopener noreferrer"
              className="block w-full py-3.5 text-center bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition-colors"
            >
              Mulai Konsultasi
            </a>
          </div>

          {/* Professional (Popular) */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-500/30 rounded-3xl p-8 relative flex flex-col shadow-[0_0_40px_rgba(99,102,241,0.1)] transform lg:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-b-xl shadow-lg flex items-center gap-1">
              <Star size={12} /> Paling Direkomendasikan
            </div>
            <div className="mb-6 mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <div className="mb-4 flex items-baseline">
                <span className="text-slate-400 text-sm mr-2">Mulai</span>
                <span className="text-3xl font-extrabold text-white">Rp 3.500.000</span>
              </div>
              <p className="text-sm text-indigo-400 font-bold mb-4">Website + CMS Tingkat Lanjut</p>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 border-l-4 border-l-indigo-500">
                <p className="text-sm text-slate-300 italic">"Saya ingin mengelola website yang lebih lengkap dan melibatkan beberapa pengelola."</p>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-1 mt-4">
              {['Semua fitur Paket Starter', 'Sistem Multi-Admin (Editor, Staff, dll)', 'Manajemen Dokumen & File', 'Pencarian, Filter & Kategori', 'Statistik & Activity Log', 'Penyimpanan hingga 5 GB'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="text-indigo-400 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/1234567890?text=Halo, saya tertarik konsultasi Paket Professional" 
              target="_blank" rel="noopener noreferrer"
              className="block w-full py-3.5 text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5"
            >
              Mulai Konsultasi
            </a>
          </div>

          {/* Custom */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/30 transition-colors flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Custom</h3>
              <div className="mb-4 flex items-baseline">
                <span className="text-slate-400 text-sm mr-2">Mulai</span>
                <span className="text-3xl font-extrabold text-white">Rp 10.000.000</span>
              </div>
              <p className="text-sm text-purple-400 font-bold mb-4">Sistem Web App Khusus</p>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 border-l-4 border-l-purple-500">
                <p className="text-sm text-slate-300 italic">"Saya ingin website sekaligus menjalankan proses atau sistem kerja khusus."</p>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-1 mt-4">
              {['Akun Pengguna Inti & Workflow', 'Dashboard Khusus untuk User', 'Sistem Registrasi & Verifikasi', 'Persetujuan (Approval) & Tracking', 'Integrasi API Khusus', 'Kapasitas Sesuai Kebutuhan'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="text-purple-500 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/1234567890?text=Halo, saya ingin berdiskusi mengenai pembuatan Sistem Custom" 
              target="_blank" rel="noopener noreferrer"
              className="block w-full py-3.5 text-center bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition-colors"
            >
              Hubungi Kami
            </a>
          </div>

        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Perbandingan Fitur Detail</h2>
          <p className="text-slate-400 text-sm">Professional tetap fleksibel, fitur tambahan dapat disesuaikan sebagai Add-on.</p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400">
              <tr>
                <th className="px-6 py-5 font-semibold w-2/5">Fitur</th>
                <th className="px-6 py-5 font-bold text-emerald-400 text-center w-1/5">Starter</th>
                <th className="px-6 py-5 font-bold text-indigo-400 text-center w-1/5">Professional</th>
                <th className="px-6 py-5 font-bold text-purple-400 text-center w-1/5">Custom</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {[
                { name: "Website publik", starter: "✓", pro: "✓", custom: "✓" },
                { name: "Responsive", starter: "✓", pro: "✓", custom: "✓" },
                { name: "Berita", starter: "✓", pro: "✓", custom: "✓" },
                { name: "Galeri", starter: "✓", pro: "✓", custom: "✓" },
                { name: "Layanan", starter: "✓", pro: "✓", custom: "✓" },
                { name: "Admin", starter: "1", pro: "Beberapa", custom: "Sesuai kebutuhan" },
                { name: "CMS", starter: "Dasar", pro: "Lengkap", custom: "Lengkap + khusus" },
                { name: "Dokumen", starter: "Terbatas", pro: "✓", custom: "✓" },
                { name: "Pencarian", starter: "Dasar", pro: "✓", custom: "✓" },
                { name: "Filter & kategori", starter: "Dasar", pro: "✓", custom: "✓" },
                { name: "Statistik", starter: "—", pro: "✓", custom: "✓" },
                { name: "Catatan aktivitas", starter: "—", pro: "✓", custom: "✓" },
                { name: "Akun pengguna dasar", starter: "—", pro: "Add-on", custom: "✓" },
                { name: "Dashboard profil dasar", starter: "—", pro: "Add-on", custom: "✓" },
                { name: "Pengajuan", starter: "—", pro: "—", custom: "✓" },
                { name: "Upload dokumen pengguna", starter: "—", pro: "—", custom: "✓" },
                { name: "Verifikasi & persetujuan", starter: "—", pro: "—", custom: "✓" },
                { name: "Tracking proses", starter: "—", pro: "—", custom: "✓" },
                { name: "Workflow", starter: "—", pro: "—", custom: "✓" },
                { name: "Integrasi khusus", starter: "—", pro: "—", custom: "✓" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-200">{row.name}</td>
                  <td className="px-6 py-4 text-center">{renderValue(row.starter)}</td>
                  <td className="px-6 py-4 text-center">{renderValue(row.pro)}</td>
                  <td className="px-6 py-4 text-center">{renderValue(row.custom)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-400 bg-slate-900/40 py-3 px-4 rounded-xl border border-slate-800/50 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 text-[10px] uppercase font-bold rounded-md">Add-on</span>
          </div>
          <span className="text-center sm:text-left leading-relaxed">
            <strong>Mulai Rp300.000.</strong> Fitur opsional tambahan (seperti Akun Pengguna Dasar) di luar paket utama. Fitur yang membutuhkan alur kerja/sistem khusus akan masuk ke paket Custom.
          </span>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="bg-slate-900 border-t border-slate-800 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Standar Kualitas RuangWeb</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              Setiap website RuangWeb dibangun dengan standar teknis yang dirancang untuk memberikan performa, keamanan, dan pengalaman pengguna yang baik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-400">
                <Zap size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">⚡ Performa Teroptimasi</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Website dibangun dengan teknologi modern, caching, dan CDN untuk membantu memberikan pengalaman akses yang cepat dan nyaman dari berbagai perangkat.
              </p>
            </div>
            
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-400">
                <ImageIcon size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Optimasi Gambar Cerdas</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Sistem membantu mengoptimalkan dan mengompresi gambar dengan tetap menjaga kualitas visual agar website tetap ringan dan cepat.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">🔒 Keamanan Berlapis</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Website menggunakan pengaturan akses dan perlindungan data untuk membantu menjaga informasi dan konten website tetap aman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA & Disclaimer */}
      <footer className="py-16 border-t border-slate-800 bg-slate-950 text-center px-6">
        <h2 className="text-2xl font-bold text-white mb-6">Siap untuk memulai transformasi digital Anda?</h2>
        <a 
          href="https://wa.me/1234567890"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-slate-200 transition-colors shadow-lg hover:shadow-xl mb-12"
        >
          Konsultasi Gratis Sekarang <ArrowRight size={18} />
        </a>
        
        <div className="max-w-2xl mx-auto text-xs text-slate-500 leading-relaxed text-left md:text-center">
          <strong>*Catatan:</strong> Kebutuhan infrastruktur tambahan seperti domain, penyimpanan, server, atau layanan pihak ketiga dapat dikenakan biaya sesuai kebutuhan dan akan dikonsultasikan terlebih dahulu.
        </div>
      </footer>
    </main>
  );
}
