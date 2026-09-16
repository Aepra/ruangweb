import Navbar from "@/components/Navbar";
import PamphletCatalog from "@/components/PamphletCatalog";
import Footer from "@/components/Footer";
import { ArrowDown, MessageCircle, Check, MonitorSmartphone, Settings, HeadphonesIcon, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const waLink = "https://wa.me/6285796508390?text=Halo%20Admin%20RuangWeb,%20saya%20ingin%20konsultasi%20pembuatan%20website.";

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-16 lg:pt-20 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative bg-white">
        
        {/* Main Full-Screen Hero Content */}
        <div className="relative min-h-[calc(100dvh-6rem)] flex flex-col justify-center py-8 lg:py-4 px-6 md:px-12 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/40 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute top-40 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px] -z-10 -translate-x-1/3" />
          
          <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col justify-center gap-6 lg:gap-8 h-full">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Text & Buttons */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold mb-6 shadow-sm">
                  🚀 Jasa Pembuatan Website & Sistem Digital
                </div>
                
                <h1 className="text-[2.75rem] md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-5">
                  Bikin Website <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tanpa Ribet</span>
                </h1>
                
                <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-medium">
                  Solusi digital premium untuk mewujudkan sistem impian bisnis, desa, sekolah, atau instansi Anda. Cepat, siap pakai, dan bergaransi.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <a 
                    href="#services"
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-900/20"
                  >
                    Lihat Pilihan Layanan
                    <ArrowDown size={16} />
                  </a>
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 text-slate-800 text-sm font-bold flex items-center justify-center gap-2 hover:border-slate-300 hover:bg-slate-50 hover:scale-105 transition-all shadow-sm"
                  >
                    <MessageCircle size={16} className="text-emerald-500 fill-current" />
                    Tanya via WA
                  </a>
                </div>
              </div>

              {/* Right Column: Promo Box */}
              <div className="flex justify-center lg:justify-end w-full relative mt-8 lg:mt-0">
                {/* Decorative glow behind the glass */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[26rem] bg-gradient-to-br from-blue-400 to-rose-400 rounded-[3rem] blur-3xl opacity-20 animate-pulse" />
                
                <div className="lg:bg-white/60 lg:backdrop-blur-2xl lg:border lg:border-white/60 lg:rounded-[2rem] py-6 lg:p-8 w-full lg:max-w-[26rem] lg:shadow-2xl lg:shadow-blue-900/10 relative overflow-hidden transform lg:scale-105 lg:-rotate-2 lg:hover:rotate-0 lg:hover:scale-110 transition-all duration-500 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-start text-center sm:text-left gap-2 sm:gap-6 lg:gap-0">
                  <div className="hidden lg:block absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-100/80 to-transparent rounded-bl-full -z-10" />
                  
                  <div className="flex-1 w-full relative z-10">
                    <p className="text-[10px] lg:text-xs font-black text-rose-500 uppercase tracking-widest mb-2 lg:mb-3 flex items-center justify-center sm:justify-start gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)] animate-pulse" />
                      Penawaran Spesial
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-black text-slate-800 flex flex-row sm:flex-col items-center sm:items-start justify-center gap-2 lg:gap-1">
                      Mulai <span className="text-blue-600 text-4xl lg:text-5xl drop-shadow-sm">Rp 500<span className="text-2xl lg:text-3xl text-blue-600/70">.000</span></span>
                    </h2>
                  </div>
                  
                  <div className="flex-1 sm:pt-4 lg:pt-0 lg:mt-4 relative z-10 flex items-center">
                    <p className="text-slate-500 lg:text-slate-600 text-sm font-medium leading-relaxed max-w-sm">
                      Siap tayang, domain & hosting siap pakai, tanpa biaya tersembunyi. Langsung online!
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Mini Features (Bottom Row) */}
            <div className="flex lg:grid lg:grid-cols-3 gap-3 md:gap-4 w-full text-left overflow-x-auto pb-6 lg:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
              {[
                { title: "Selesai 3-7 Hari", desc: "Estimasi jelas, tanpa molor.", icon: <Check size={18} strokeWidth={3} className="text-emerald-500" /> },
                { title: "Dikelola Mandiri", desc: "Admin panel semudah medsos.", icon: <Settings size={18} strokeWidth={3} className="text-blue-500" /> },
                { title: "Garansi & Support", desc: "Bantuan teknis responsif.", icon: <HeadphonesIcon size={18} strokeWidth={3} className="text-rose-500" /> }
              ].map((feat, idx) => (
                <div key={idx} className="shrink-0 w-[85%] sm:w-[300px] lg:w-auto flex gap-4 p-4 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors items-center snap-center lg:snap-align-none group">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{feat.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-snug mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 2. PAMPHLET CATALOG */}
      <PamphletCatalog />

      {/* 2.5 PORTFOLIO SECTION */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Contoh Website Client</h2>
            <p className="text-slate-600 text-lg">Beberapa proyek website yang telah berhasil kami tayangkan.</p>
          </div>
          
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            <a href="https://binanga.web.id" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 md:p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all group">
              <div>
                <h3 className="font-bold text-base md:text-lg text-slate-800 group-hover:text-blue-600 transition-colors">Website Desa Binanga</h3>
                <p className="text-slate-500 text-xs md:text-sm mt-1">https://binanga.web.id</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ExternalLink size={18} />
              </div>
            </a>

            <a href="https://kua-sampaga-mamuju.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 md:p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-md transition-all group">
              <div>
                <h3 className="font-bold text-base md:text-lg text-slate-800 group-hover:text-emerald-600 transition-colors">Website KUA Sampaga Mamuju</h3>
                <p className="text-slate-500 text-xs md:text-sm mt-1">https://kua-sampaga-mamuju.vercel.app</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ExternalLink size={18} />
              </div>
            </a>

            <a href="https://intern-attendance.diskominfo.makassarkota.go.id/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 md:p-6 bg-white border border-slate-200 rounded-2xl hover:border-amber-500 hover:shadow-md transition-all group">
              <div>
                <h3 className="font-bold text-base md:text-lg text-slate-800 group-hover:text-amber-600 transition-colors">Sistem Absensi Diskominfo Makassar</h3>
                <p className="text-slate-500 text-xs md:text-sm mt-1">intern-attendance.diskominfo.makassarkota.go.id</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <ExternalLink size={18} />
              </div>
            </a>

            <a href="https://kodim1408ewako.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 md:p-6 bg-white border border-slate-200 rounded-2xl hover:border-rose-500 hover:shadow-md transition-all group">
              <div>
                <h3 className="font-bold text-base md:text-lg text-slate-800 group-hover:text-rose-600 transition-colors">Website Kodim 1408/Ewako Makassar</h3>
                <p className="text-slate-500 text-xs md:text-sm mt-1">https://kodim1408ewako.com/</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <ExternalLink size={18} />
              </div>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. WORKFLOW SECTION (DARK CONTRAST) */}
      <section id="workflow" className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] -z-10" />
        
        <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-xs md:text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Cara Memesan</p>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Proses Instan. <br className="md:hidden" />Hasil Maksimal.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Kami pangkas kerumitan. Hanya butuh beberapa langkah sederhana sampai website Anda online.</p>
          </div>
          
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-6 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {[
              { step: "01", title: "Konsultasi", desc: "Sampaikan kebutuhan website Anda melalui WhatsApp kami.", color: "from-blue-500 to-cyan-500" },
              { step: "02", title: "Materi Awal", desc: "Kirimkan nama, logo, profil, dan kontak bisnis.", color: "from-amber-500 to-orange-500" },
              { step: "03", title: "Pengerjaan", desc: "Kami kerjakan dalam 3-7 hari, Anda bisa meninjau.", color: "from-rose-500 to-pink-500" },
              { step: "04", title: "Serah Terima", desc: "Akses login dan panduan diserahkan, web siap tayang.", color: "from-emerald-500 to-teal-500" },
            ].map((item, idx) => (
              <div key={idx} className="shrink-0 w-[85%] md:w-auto bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-8 hover:bg-slate-800 transition-all group relative overflow-hidden snap-center">
                <div className="absolute -right-6 -bottom-6 text-slate-800/50 font-black text-9xl z-0 transition-transform group-hover:scale-110">{item.step}</div>
                <div className="relative z-10">
                  <div className={`w-12 h-2 rounded-full bg-gradient-to-r ${item.color} mb-8`} />
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 4. FEATURES SECTION (BENTO BOX) */}
      <section id="features" className="py-20 md:py-32 bg-slate-50 border-y border-slate-200">
        <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-3">Mengapa Kami?</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Lebih dari Sekadar Template.</h2>
          </div>
          
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 pb-6 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            
            {/* Bento Card 1 (Large) */}
            <div className="shrink-0 w-[85%] md:w-auto snap-center col-span-1 md:col-span-2 row-span-1 bg-slate-900 rounded-3xl p-8 md:p-10 relative overflow-hidden group">
              <MonitorSmartphone size={200} className="absolute -bottom-10 -right-10 text-slate-800 group-hover:-rotate-12 transition-transform duration-700" />
              <div className="relative z-10 max-w-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                  <MonitorSmartphone size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Tampilan Responsif & Modern</h3>
                <p className="text-slate-400 font-medium leading-relaxed">Website otomatis menyesuaikan layar smartphone, tablet, maupun laptop dengan sempurna tanpa cacat.</p>
              </div>
            </div>

            {/* Bento Card 2 (Small) */}
            <div className="shrink-0 w-[85%] md:w-auto snap-center col-span-1 row-span-1 bg-blue-100/50 rounded-3xl p-8 relative overflow-hidden group border border-blue-200">
              <Settings size={150} className="absolute -top-10 -right-10 text-blue-200 group-hover:rotate-45 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-6">
                  <Settings size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Kelola Mandiri</h3>
                <p className="text-slate-600 text-sm font-medium">Ganti teks, foto, atau kontak kapan saja via admin panel.</p>
              </div>
            </div>

            {/* Bento Card 3 (Wide) */}
            <div className="shrink-0 w-[85%] md:w-auto snap-center col-span-1 md:col-span-3 row-span-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 md:p-10 relative overflow-hidden group">
              <HeadphonesIcon size={250} className="absolute -bottom-20 right-10 text-white/10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                  <HeadphonesIcon size={40} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">Dukungan WA Responsif</h3>
                  <p className="text-emerald-50 text-base md:text-lg max-w-2xl font-medium">Ada kendala atau butuh bantuan teknis? Hubungi kami langsung via chat WhatsApp, kami siap membantu sampai tuntas.</p>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 5. CTA SECTION */}
      <section className="bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600 to-rose-500 rounded-[100%] blur-[100px] opacity-40 animate-pulse" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6 leading-[1.1]">Siap Mewujudkan<br />Website Impian?</h2>
          <p className="text-slate-300 text-base md:text-xl mb-12 font-medium max-w-2xl mx-auto">
            Diskusikan langsung dengan tim kami. Kami siap memberikan solusi dan paket yang paling ekonomis untuk kebutuhan Anda.
          </p>
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-3xl bg-white text-slate-900 font-black text-lg md:text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <MessageCircle size={24} className="text-emerald-500" />
            Mulai Konsultasi WA
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
