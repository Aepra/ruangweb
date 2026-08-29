import { 
  Rocket, 
  Briefcase, 
  Cpu, 
  LayoutList, 
  Server, 
  Image as ImageIcon, 
  Zap, 
  CreditCard, 
  Wallet, 
  Key, 
  MessageSquare, 
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Konsep Paket RuangWeb",
};

export default function KonsepPaketPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-16 text-slate-300 font-sans selection:bg-blue-500/30 pb-20">
      
      {/* Intro */}
      <div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">RUANGWEB — KONSEP PAKET WEBSITE</h1>
        <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl space-y-4">
          <p className="text-lg text-slate-300">RuangWeb memiliki tiga tingkat layanan:</p>
          <ul className="space-y-2 font-medium">
            <li className="flex items-center gap-3"><span className="text-emerald-400">1. Starter</span> — Website Informasi + CMS Dasar</li>
            <li className="flex items-center gap-3"><span className="text-blue-400">2. Professional</span> — Website Informasi + CMS Lengkap</li>
            <li className="flex items-center gap-3"><span className="text-purple-400">3. Custom</span> — Website + Sistem/Aplikasi Khusus</li>
          </ul>
          <p className="text-sm leading-relaxed mt-4">
            Perbedaan utamanya <strong>bukan</strong> sekadar "ada database atau tidak". Ketiga paket dapat menggunakan database.
            Perbedaannya adalah <strong>seberapa besar kebutuhan website, seberapa banyak konten/data yang dikelola, siapa saja yang mengelola, dan apakah website hanya memberikan informasi atau sudah menjalankan suatu proses.</strong>
          </p>
        </div>
      </div>

      {/* 1. STARTER */}
      <section className="space-y-6 scroll-mt-20">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Rocket className="text-emerald-500" size={28} />
          <h2 className="text-3xl font-bold text-white">1. STARTER</h2>
        </div>
        <h3 className="text-xl font-semibold text-emerald-400">Website Informasi + CMS Dasar</h3>
        
        <p className="leading-relaxed">
          Starter ditujukan untuk client yang ingin memiliki <strong>website resmi dan profesional untuk memberikan informasi</strong>, tetapi tetap ingin bisa mengubah isi website sendiri.
        </p>
        <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Cocok untuk:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
              <li>Profil organisasi / usaha / lembaga</li>
              <li>Informasi pelayanan</li>
              <li>Portofolio</li>
              <li>Komunitas</li>
              <li>Event sederhana</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Starter bukan website statis. Website sudah memiliki:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
              <li>Database, Admin, Dashboard, CMS</li>
              <li>Penyimpanan gambar</li>
              <li>Pengelolaan berita & galeri</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">Apa yang didapatkan?</h4>
          <p className="text-sm">Client mendapatkan website (Beranda, Tentang/Profil, Layanan, Berita, Galeri, Kontak) dengan desain yang Responsive, Mobile friendly, Rapi, Profesional, SEO dasar, dan Cepat diakses.</p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">Fitur Website (Pengunjung)</h4>
          <p className="text-sm">Pengunjung dapat melihat informasi, berita, galeri, layanan, profil, menghubungi via WA, dan melihat lokasi/maps. <strong>Pengunjung tidak perlu membuat akun.</strong></p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">Admin Starter & Dashboard</h4>
          <p className="text-sm leading-relaxed">
            Starter memiliki <strong>admin utama</strong>. Admin dapat mengelola:
            Berita (tambah, edit, hapus, draft, terbit), Galeri, Layanan, Profil, Kontak, dan Media (upload gambar).
            Dashboard dibuat sederhana (menampilkan jumlah berita, konten terbaru) untuk <strong>memudahkan client mengelola website.</strong>
          </p>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl">
          <h4 className="text-sm font-bold text-emerald-300 mb-2">Penyimpanan Starter & Target RuangWeb</h4>
          <p className="text-sm leading-relaxed mb-4">
            Menggunakan <strong>Supabase Free</strong> untuk data website, berita, galeri, dan media. Selama kebutuhan website masih bisa ditangani layanan gratis, <strong>tidak ada biaya infrastruktur bulanan tambahan dari RuangWeb.</strong>
          </p>
          <p className="text-xs text-emerald-200/70 italic">
            Target kuota penyimpanan: hingga ±1 GB (sebagai kuota layanan RuangWeb).
          </p>
        </div>
      </section>

      {/* 2. PROFESSIONAL */}
      <section className="space-y-6 scroll-mt-20">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Briefcase className="text-blue-500" size={28} />
          <h2 className="text-3xl font-bold text-white">2. PROFESSIONAL</h2>
        </div>
        <h3 className="text-xl font-semibold text-blue-400">Website Informasi + CMS Lengkap</h3>
        
        <p className="leading-relaxed">
          Professional ditujukan untuk client yang memiliki <strong>website lebih besar, lebih banyak konten/data, dan membutuhkan pengelolaan oleh beberapa orang.</strong><br/>
          Semua fitur Starter tetap tersedia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#111111] p-6 rounded-2xl border border-white/5">
            <h4 className="text-sm font-bold text-white mb-3">Apa yang didapatkan?</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
              <li>CMS & Dashboard lebih lengkap</li>
              <li>Multiple admin & Pengaturan akses</li>
              <li>Kategori, Search, Filter</li>
              <li>Statistik & Activity log</li>
              <li>Media management & Dokumen</li>
              <li>Event/kegiatan & Data tambahan</li>
              <li>Form & SEO lebih lengkap</li>
            </ul>
          </div>
          <div className="bg-[#111111] p-6 rounded-2xl border border-white/5">
            <h4 className="text-sm font-bold text-white mb-3">Pengunjung Professional</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
              <li>Melihat informasi, berita, galeri</li>
              <li>Mencari informasi & menggunakan filter</li>
              <li>Melihat kategori</li>
              <li>Mengisi berbagai form</li>
              <li>Mengunduh dokumen jika tersedia</li>
              <li><strong>Tetap tanpa login</strong></li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">Admin Professional & Activity Log</h4>
          <p className="text-sm leading-relaxed">
            Professional dapat memiliki <strong>Admin Utama</strong>, <strong>Editor</strong> (Fokus berita), dan <strong>Staff</strong> (Fokus galeri/data). Setiap orang tidak harus memiliki akses penuh.<br/>
            Dashboard menampilkan statistik, jumlah pengunjung, data form, dan grafik sederhana. Sistem juga mencatat <strong>Activity Log</strong> (siapa melakukan apa di website).
          </p>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl">
          <h4 className="text-sm font-bold text-blue-300 mb-2">Penyimpanan Professional</h4>
          <p className="text-sm leading-relaxed mb-4">
            Menggunakan <strong>Neon</strong> untuk data/teks dan <strong>Cloudflare R2</strong> untuk Gambar, Foto, Dokumen.
          </p>
          <p className="text-xs text-blue-200/70 italic">
            Target kuota penyimpanan: hingga ±5 GB (tetap memanfaatkan free tier selama mencukupi).
          </p>
        </div>
      </section>

      {/* 3. CUSTOM */}
      <section className="space-y-6 scroll-mt-20">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Cpu className="text-purple-500" size={28} />
          <h2 className="text-3xl font-bold text-white">3. CUSTOM</h2>
        </div>
        <h3 className="text-xl font-semibold text-purple-400">Website + Sistem/Aplikasi Khusus</h3>
        
        <p className="leading-relaxed">
          Custom digunakan ketika client sudah membutuhkan website yang <strong>tidak hanya memberikan informasi, tetapi juga membantu menjalankan suatu pekerjaan atau proses.</strong> Ini sudah masuk kategori <strong>aplikasi web</strong>.
        </p>
        <p className="text-sm text-slate-400">
          Contoh: Sistem pendaftaran, pengajuan, booking, membership, manajemen dokumen, dll. Fitur tidak dibatasi paket standar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Apa yang didapatkan?</h4>
            <p className="text-sm">Seluruh fitur Professional sebagai dasar, ditambah: Registrasi, Login, Dashboard Pengguna, Form Khusus, Pengajuan, Upload dokumen, Verifikasi, Workflow, API, Integrasi, Pembayaran.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">User Custom</h4>
            <p className="text-sm"><strong>Memiliki akun pengguna.</strong> Pengguna bisa: Registrasi, Login, mengisi formulir, membuat pengajuan, upload dokumen, melihat status/riwayat, menerima notifikasi.</p>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <h4 className="text-lg font-bold text-white">Admin Custom</h4>
          <p className="text-sm">Bisa memiliki beberapa tingkatan: Super Admin, Admin, Staff, Reviewer, Approver. Dibuat sesuai kebutuhan client.</p>
        </div>

        <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 mt-6 font-mono text-xs text-slate-300">
          <span className="text-purple-400 font-bold block mb-2">Contoh Alur Sistem Pengajuan:</span>
          User Login → Memilih layanan → Mengisi formulir → Upload dokumen → Mengirim pengajuan → Admin memeriksa → Staff memproses → Reviewer memverifikasi → Approver menyetujui → User menerima informasi.
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-2xl mt-6">
          <h4 className="text-sm font-bold text-purple-300 mb-2">Penyimpanan Custom</h4>
          <p className="text-sm leading-relaxed mb-4">
            Menggunakan <strong>Neon</strong> (untuk data sistem/pengguna) dan <strong>Cloudflare R2</strong> (untuk gambar/dokumen/file pengguna). Kapasitas tidak dibuat sebagai angka tetap (disesuaikan kebutuhan, misal 50 GB). Jika membutuhkan resource berbayar, biayanya dibebankan kepada client.
          </p>
        </div>
      </section>

      {/* 3.5. GARIS BATAS: AKUN PENGGUNA */}
      <section className="space-y-6 scroll-mt-20">
        <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Key size={120} /></div>
          <h3 className="text-2xl font-bold text-red-400 mb-4">GARIS BATAS: AKUN PENGGUNA</h3>
          <p className="text-sm leading-relaxed mb-6">
            Akun pengguna biasa (Public User Account) adalah <strong>pembeda utama</strong> antara Professional dan Custom. Karena fitur "user bisa membuat akun" mengubah website dari sekadar CMS menjadi sistem manajemen alur kerja (workflow).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 p-5 rounded-2xl border border-red-500/10">
              <h4 className="font-bold text-blue-400 mb-2">Professional (Tanpa Akun)</h4>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                Pengunjung → Mengisi form → Data masuk ke admin → Selesai
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-2xl border border-red-500/10">
              <h4 className="font-bold text-purple-400 mb-2">Custom (Sistem Akun)</h4>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                User → Register → Login → Dashboard → Mengajukan Sesuatu → Tracking → Admin Memproses → User Melihat Status
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
            <p className="text-sm font-bold text-yellow-500 mb-1">Pengecualian (Add-on)</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Jika klien hanya butuh user mendaftar akun sekadar untuk melihat halaman tersembunyi (tanpa proses bisnis/workflow panjang), ini bisa dijadikan <strong>Professional + Add-on User Login</strong> tanpa harus naik ke harga paket Custom penuh.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PERBEDAAN PALING SEDERHANA */}
      <section className="space-y-6 scroll-mt-20">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <LayoutList className="text-orange-500" size={28} />
          <h2 className="text-3xl font-bold text-white">4. PERBEDAAN PALING SEDERHANA</h2>
        </div>
        
        <div className="overflow-x-auto bg-[#111111] border border-white/5 rounded-2xl">
          <table className="w-full text-sm text-left text-slate-300">
            <thead className="text-xs text-slate-400 uppercase bg-black/50 border-b border-white/10">
              <tr>
                <th className="px-6 py-4">Fitur</th>
                <th className="px-6 py-4 text-emerald-400">Starter</th>
                <th className="px-6 py-4 text-blue-400">Professional</th>
                <th className="px-6 py-4 text-purple-400">Custom</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ['Tujuan', 'Website informasi', 'Website + pengelolaan data', 'Website + sistem khusus'],
                ['Pengunjung', 'Melihat informasi', 'Melihat & berinteraksi', 'Menggunakan sistem'],
                ['Login pengunjung', 'Tidak', 'Tidak wajib', 'Bisa ada'],
                ['Admin', '1 admin utama', 'Beberapa admin/staff', 'Sesuai kebutuhan'],
                ['CMS', 'Dasar', 'Lengkap', 'Lengkap + khusus'],
                ['Berita, Galeri, Layanan', '✓', '✓', '✓'],
                ['Form, Search', 'Dasar', '✓', '✓'],
                ['Filter, Statistik, Multiple Admin', '—', '✓', '✓'],
                ['Hak akses', 'Dasar', '✓', '✓'],
                ['Activity log', '—', '✓', '✓'],
                ['Dokumen', 'Terbatas', '✓', '✓'],
                ['User account dasar', '—', 'Add-on (Rp 300k)', '✓'],
                ['Pengajuan, Verifikasi, Workflow', '—', '—', '✓'],
                ['API / Integrasi khusus', '—', '—', '✓'],
                ['Database', 'Supabase', 'Neon', 'Neon'],
                ['Penyimpanan media', 'Supabase', 'Cloudflare R2', 'Cloudflare R2'],
                ['Kapasitas', '±1 GB*', '±5 GB*', 'Sesuai kebutuhan'],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02]">
                  <td className="px-6 py-3 font-medium text-white">{row[0]}</td>
                  <td className="px-6 py-3">{row[1]}</td>
                  <td className="px-6 py-3">{row[2]}</td>
                  <td className="px-6 py-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 italic">*Angka kapasitas adalah kuota layanan RuangWeb, bukan jaminan free tier provider.</p>
      </section>

      {/* 5. INFRASTRUKTUR RUANGWEB */}
      <section className="space-y-6 scroll-mt-20">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Server className="text-pink-500" size={28} />
          <h2 className="text-3xl font-bold text-white">5. INFRASTRUKTUR RUANGWEB</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 font-mono text-[11px] text-slate-300">
            <span className="text-emerald-400 font-bold block mb-4">STARTER</span>
<pre>{`Frontend
    ↓
Hosting
    ↓
Supabase
├── Database
├── Auth Admin
└── Storage`}</pre>
          </div>
          
          <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 font-mono text-[11px] text-slate-300">
            <span className="text-blue-400 font-bold block mb-4">PROFESSIONAL</span>
<pre>{`Frontend
    ↓
Hosting
    ↓
┌───────────────┐
│               │
Neon          R2
│               │
Data          File`}</pre>
          </div>

          <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 font-mono text-[11px] text-slate-300">
            <span className="text-purple-400 font-bold block mb-4">CUSTOM</span>
<pre>{`Web Application
       ↓
   ┌───┴───┐
   ↓       ↓
 Neon      R2
   ↓       ↓
 Data     Files
   │
   ↓
Business Process`}</pre>
          </div>
        </div>
      </section>

      {/* 6 & 7. Optimasi & Performa */}
      <section className="space-y-6 scroll-mt-20">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <ImageIcon className="text-yellow-500" size={28} />
          <h2 className="text-3xl font-bold text-white">6 & 7. OPTIMASI GAMBAR & PERFORMA</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Optimasi Gambar Berlaku untuk Semua Paket</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Sistem RuangWeb harus mengoptimalkan gambar (Upload → Resize → Compress → WebP/AVIF → Storage). Starter bukan berarti gambarnya jelek. Semua paket mendapatkan optimasi gambar.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Ketiga Paket Harus Dibuat Cepat</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Jangan membedakan paket dengan "Starter lambat, Pro cepat". Performa menggunakan: Caching, CDN, Lazy loading, dll. Perbedaannya adalah <strong>skala dan kompleksitas sistem</strong>, bukan kualitas dasar websitenya.
            </p>
          </div>
        </div>
      </section>

      {/* 8 & 9. Biaya & Infrastruktur */}
      <section className="space-y-6 scroll-mt-20">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Wallet className="text-teal-500" size={28} />
          <h2 className="text-3xl font-bold text-white">8 & 9. KONSEP BIAYA & PEMBAGIAN</h2>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Konsep Biaya Infrastruktur</h3>
          <p className="text-sm leading-relaxed">
            <strong>Starter & Professional:</strong> Sebisa mungkin menggunakan layanan gratis (Supabase Free, Neon Free, R2, Vercel/Cloudflare). Biaya infrastruktur = Rp0 selama dalam batas layanan gratis.<br/>
            <strong>Custom:</strong> Kebutuhan bisa sangat berbeda. Biaya resource berbayar (Storage besar, traffic tinggi, Payment Gateway) ditagihkan sebagai biaya infrastruktur/layanan.
          </p>
        </div>

        <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 mt-4">
          <h3 className="text-lg font-bold text-white mb-4">Pembagian Biaya RuangWeb (3 Jenis)</h3>
          <ul className="space-y-4">
            <li>
              <strong className="text-slate-200">A. Biaya Pembuatan:</strong> Jasa developer (Desain, Coding, DB, Testing, Deployment).
            </li>
            <li>
              <strong className="text-slate-200">B. Biaya Persiapan Infrastruktur:</strong> Menyiapkan Domain, Hosting, Database. Kalau pakai free = Rp0. Kalau berbayar = dibayar client.
            </li>
            <li>
              <strong className="text-slate-200">C. Biaya Perpanjangan:</strong> Untuk tahun berikutnya (Domain, Hosting, Layanan berbayar aktual).
            </li>
          </ul>
        </div>
      </section>

      {/* 10. Akun dan Kepemilikan */}
      <section className="space-y-6 scroll-mt-20">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Key className="text-red-500" size={28} />
          <h2 className="text-3xl font-bold text-white">10. AKUN DAN KEPEMILIKAN</h2>
        </div>
        <p className="text-sm leading-relaxed">
          Untuk project client, konsep yang paling aman adalah: <strong>Akun layanan dibuat atas nama client.</strong>
        </p>
        <div className="bg-[#111111] p-4 rounded-xl border border-white/5 font-mono text-xs text-slate-300 w-fit">
<pre>{`Email Client
│
├── Domain
├── Hosting
├── Database
└── Storage`}</pre>
        </div>
        <p className="text-sm leading-relaxed">
          Kamu diberikan akses sebagai developer/admin. Dengan begitu: <strong>Website dan data tetap menjadi milik client.</strong> Kamu tidak perlu menanggung biaya client selamanya.
        </p>
      </section>

      {/* 11 & 12. Client Communication & Kesimpulan */}
      <section className="space-y-6 scroll-mt-20">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <MessageSquare className="text-indigo-500" size={28} />
          <h2 className="text-3xl font-bold text-white">11. CARA MENJELASKAN KE CLIENT</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 border-t-4 border-t-emerald-500">
            <h4 className="font-bold text-white mb-2">Starter</h4>
            <p className="text-xs text-slate-400 italic">"Website informasi yang sudah dilengkapi pengelolaan konten. Bapak/Ibu dapat mengubah berita, galeri, layanan, dan informasi website sendiri melalui halaman admin."</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 border-t-4 border-t-blue-500">
            <h4 className="font-bold text-white mb-2">Professional</h4>
            <p className="text-xs text-slate-400 italic">"Website dengan pengelolaan yang lebih lengkap. Dapat digunakan oleh beberapa pengelola dan memiliki fitur seperti pencarian, statistik, pengelolaan data, dokumen..."</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 border-t-4 border-t-purple-500">
            <h4 className="font-bold text-white mb-2">Custom</h4>
            <p className="text-xs text-slate-400 italic">"Website sekaligus sistem khusus yang dapat disesuaikan dengan proses kerja. Misalnya pendaftaran, pengajuan, upload dokumen, verifikasi, dll."</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-[#111111] p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <CheckCircle2 className="text-blue-500" size={32} />
            <h2 className="text-2xl font-extrabold text-white">12. KESIMPULAN FINAL RUANGWEB</h2>
          </div>
          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <div>
              <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Starter</p>
              <p className="text-white">Website + Basic CMS</p>
            </div>
            <div>
              <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">Professional</p>
              <p className="text-white">Website + Advanced CMS</p>
            </div>
            <div>
              <p className="text-sm font-bold text-purple-400 uppercase tracking-widest">Custom</p>
              <p className="text-white">Website + Custom Web Application</p>
            </div>
            
            <div className="pt-8 mt-8 border-t border-white/10">
              <p className="text-lg font-bold text-white mb-2 italic">
                "RuangWeb menjual solusi website, bukan menjual Supabase, Neon, Cloudflare, atau teknologi tertentu."
              </p>
              <p className="text-sm text-slate-400">
                Dengan struktur ini, RuangWeb memiliki <strong>satu standar produk</strong> yang berlaku untuk website apa pun (Sekolah, Desa, KUA, dll). Yang berubah hanya isi fiturnya, namun kategori produknya tetap Starter, Professional, atau Custom.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
