import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  CalendarCheck, 
  Ticket, 
  HeartHandshake, 
  Newspaper, 
  LayoutDashboard,
  LucideIcon
} from "lucide-react";

export type PackageType = "Starter" | "Professional" | "Custom";

export interface PackageInfo {
  available: boolean;
  description?: string;
  reasonNotAvailable?: string;
}

export interface WebsiteType {
  name: string;
  slug: string;
  packages: {
    Starter: PackageInfo;
    Professional: PackageInfo;
    Custom: PackageInfo;
  };
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string; 
  color: string;
  websiteTypes: WebsiteType[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "1",
    title: "Instansi Pemerintah & Pelayanan Publik",
    slug: "instansi-pemerintah",
    description: "Solusi digital resmi untuk instansi pemerintah, pelayanan administrasi warga, hingga layanan kesehatan publik.",
    iconName: "Building2",
    color: "from-blue-500 to-cyan-400",
    websiteTypes: [
      {
        name: "Website Resmi Instansi & Dinas",
        slug: "website-resmi-instansi-dinas",
        packages: {
          Starter: { available: true, description: "Website profil dinas + CMS berita & galeri dasar." },
          Professional: { available: true, description: "Kelola multi-admin (berita diproses editor, pengumuman diproses staf), unduhan dokumen publik, pencarian & statistik." },
          Custom: { available: true, description: "Terintegrasi sistem pengajuan perizinan/rekomendasi online warga." }
        }
      },
      {
        name: "Website Pelayanan Administrasi & Dokumen Warga",
        slug: "website-pelayanan-administrasi-dokumen-warga",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter (karena butuh formulir & alur verifikasi)." },
          Professional: { available: true, description: "Warga hanya mengunduh formulir kosong & melihat syarat administrasi." },
          Custom: { available: true, description: "Full aplikasi warga (Warga login -> isi formulir -> upload KKK/KTP -> admin/staf verifikasi -> surat diterbitkan -> notifikasi)." }
        }
      },
      {
        name: "Website Sistem Informasi Geografis (Web GIS)",
        slug: "website-sistem-informasi-geografis-web-gis",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter." },
          Professional: { available: true, description: "Menampilkan peta interaktif statis (visualisasi lokasi fasilitas/wilayah)." },
          Custom: { available: true, description: "Peta dinamis terintegrasi database spasial, input koordinat langsung oleh staf lapangan, & pemfilteran layer data kompleks." }
        }
      },
      {
        name: "Website Layanan Kesehatan Publik (Puskesmas/Klinik)",
        slug: "website-layanan-kesehatan-publik-puskesmas-klinik",
        packages: {
          Starter: { available: true, description: "Profil puskesmas, jadwal dokter statis, & kontak WhatsApp." },
          Professional: { available: true, description: "Jadwal dokter dinamis, pengolahan media edukasi kesehatan, & pengumuman internal." },
          Custom: { available: true, description: "Sistem pengambil nomor antrean online real-time, integrasi BPJS/rekam medis dasar, & portal cek ketersediaan kamar." }
        }
      }
    ]
  },
  {
    id: "2",
    title: "Pendidikan & Lembaga Pelatihan",
    slug: "pendidikan",
    description: "Platform untuk profil sekolah, portal penerimaan siswa baru, hingga sistem ujian online (CBT).",
    iconName: "GraduationCap",
    color: "from-amber-500 to-orange-400",
    websiteTypes: [
      {
        name: "Website Profil Sekolah & Institusi",
        slug: "website-profil-sekolah-institusi",
        packages: {
          Starter: { available: true, description: "Profil sekolah, fasilitas, visi-misi, & CMS berita kegiatan." },
          Professional: { available: true, description: "Kelola data guru/staf, struktur organisasi, unduhan modul, galeri alumni, & statistik pengunjung." },
          Custom: { available: false, reasonNotAvailable: "Tidak butuh Custom (kecuali jika digabung dengan PPDB/CBT)." }
        }
      },
      {
        name: "Website Pendaftaran Peserta Didik (PPDB Online)",
        slug: "website-pendaftaran-peserta-didik-ppdb-online",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter." },
          Professional: { available: false, reasonNotAvailable: "Tidak ada Paket Professional." },
          Custom: { available: true, description: "Calon siswa daftar akun -> isi formulir -> upload berkas -> panitia verifikasi -> pengumuman hasil seleksi otomatis di dashboard siswa." }
        }
      },
      {
        name: "Website Ujian Online (CBT) / Kursus Digital",
        slug: "website-ujian-online-cbt-kursus-digital",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter." },
          Professional: { available: false, reasonNotAvailable: "Tidak ada Paket Professional." },
          Custom: { available: true, description: "Siswa login -> kerjakan soal bernavigasi waktu -> hasil keluar otomatis -> instruktur/guru mengelola bank soal & nilai." }
        }
      }
    ]
  },
  {
    id: "3",
    title: "Bisnis, Perusahaan & Komersial",
    slug: "bisnis-komersial",
    description: "Tingkatkan konversi penjualan dengan landing page, e-commerce, hingga website company profile modern.",
    iconName: "Briefcase",
    color: "from-purple-500 to-indigo-500",
    websiteTypes: [
      {
        name: "Website Profil Perusahaan (Company Profile)",
        slug: "website-profil-perusahaan-company-profile",
        packages: {
          Starter: { available: true, description: "Brosur digital resmi, daftar layanan, profil tim, & form kontak/WA." },
          Professional: { available: true, description: "Katalog portofolio proyek lengkap, manajemen multi-penulis berita/blog bisnis, & laporan statistik leads." },
          Custom: { available: false, reasonNotAvailable: "Tidak butuh Custom (kecuali butuh portal klien)." }
        }
      },
      {
        name: "Website Toko Online (E-Commerce)",
        slug: "website-toko-online-ecommerce",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter (karena transaksi butuh alur hitung sistem)." },
          Professional: { available: true, description: "Katalog produk WhatsApp (Pengunjung pilih produk -> klik beli -> dioper langsung ke pesan WhatsApp admin)." },
          Custom: { available: true, description: "Full E-Commerce (Pengunjung bikin akun -> keranjang belanja -> hitung ongkir otomatis -> bayar via QRIS/Transfer -> resi & status pengiriman)." }
        }
      },
      {
        name: "Website Katalog Produk / Properti / Kendaraan",
        slug: "website-katalog-produk-properti-kendaraan",
        packages: {
          Starter: { available: true, description: "Pajang foto barang & deskripsi singkat (statis)." },
          Professional: { available: true, description: "Filter harga/kategori produk, pencarian barang, media library besar, & tombol tanya WhatsApp per produk." },
          Custom: { available: false, reasonNotAvailable: "Tidak butuh Custom." }
        }
      },
      {
        name: "Website Halaman Penjualan (Landing Page)",
        slug: "website-halaman-penjualan-landing-page",
        packages: {
          Starter: { available: true, description: "1 halaman fokus promosi 1 produk/layanan + tombol WhatsApp." },
          Professional: { available: false, reasonNotAvailable: "Tidak butuh paket Professional." },
          Custom: { available: false, reasonNotAvailable: "Tidak butuh paket Custom." }
        }
      }
    ]
  },
  {
    id: "4",
    title: "Pelayanan Jasa, Booking & Penjadwalan",
    slug: "layanan-booking",
    description: "Sistem penjadwalan layanan otomatis, booking, hingga direktori penyewaan properti dan kendaraan.",
    iconName: "CalendarCheck",
    color: "from-emerald-500 to-teal-400",
    websiteTypes: [
      {
        name: "Website Penjadwalan Layanan & Booking",
        slug: "website-penjadwalan-layanan-booking",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter." },
          Professional: { available: true, description: "Kalender jadwal buka layanan statis (pengunjung pilih tanggal -> kirim draf booking ke WhatsApp admin)." },
          Custom: { available: true, description: "Sistem booking otomatis (Pengunjung pilih jam kosong -> bayar DP/Lunas -> jadwal terkunci otomatis -> notifikasi pengingat via email/WA)." }
        }
      },
      {
        name: "Website Rental & Penyewaan (Mobil/Alat/Properti)",
        slug: "website-rental-penyewaan",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter." },
          Professional: { available: true, description: "Katalog unit sewaan + kalkulator estimasi sederhana yang mengoper data ke WhatsApp." },
          Custom: { available: true, description: "Sistem ketersediaan tanggal unit real-time, upload SIM/KTP penyewa, persetujuan admin, & penagihan denda keterlambatan." }
        }
      }
    ]
  },
  {
    id: "5",
    title: "Acara, Kepanitiaan & Komunitas",
    slug: "acara-komunitas",
    description: "Platform untuk pendaftaran event, tiket online, hingga website undangan digital pernikahan.",
    iconName: "Ticket",
    color: "from-pink-500 to-rose-400",
    websiteTypes: [
      {
        name: "Website Pendaftaran Event & Tiket",
        slug: "website-pendaftaran-event-tiket",
        packages: {
          Starter: { available: true, description: "Halaman informasi acara, rundown statis, & link form luar (Google Form)." },
          Professional: { available: true, description: "Informasi detail pembicara, jadwal sesi acara, & manajemen pendaftaran via form internal." },
          Custom: { available: true, description: "Beli tiket -> pembagian QR Code unik via email -> scan QR Code oleh panitia di pintu masuk (absensi real-time)." }
        }
      },
      {
        name: "Website Undangan Digital",
        slug: "website-undangan-digital",
        packages: {
          Starter: { available: true, description: "Link web undangan acara/pernikahan, lokasi peta, musik, & kolom ucapan sederhana." },
          Professional: { available: false, reasonNotAvailable: "Tidak butuh paket Professional." },
          Custom: { available: false, reasonNotAvailable: "Tidak butuh paket Custom." }
        }
      }
    ]
  },
  {
    id: "6",
    title: "Yayasan, Keagamaan & Sosial",
    slug: "yayasan-sosial",
    description: "Website resmi yayasan sosial dengan fitur donasi online interaktif dan laporan transparan.",
    iconName: "HeartHandshake",
    color: "from-red-500 to-orange-500",
    websiteTypes: [
      {
        name: "Website Donasi & Galang Dana",
        slug: "website-donasi-galang-dana",
        packages: {
          Starter: { available: true, description: "Informasi yayasan & nomor rekening resmi untuk transfer manual." },
          Professional: { available: true, description: "Menampilkan laporan keuangan bulanan (PDF/Gambar) & daftar kampanye donasi statis." },
          Custom: { available: true, description: "Donatur isi nominal -> bayar via e-wallet/QRIS -> grafik ketercapaian dana naik otomatis secara real-time." }
        }
      }
    ]
  },
  {
    id: "7",
    title: "Media, Publikasi & Portofolio Personal",
    slug: "media-publikasi",
    description: "Solusi untuk portal berita berstandar jurnalisme tinggi atau portofolio personal yang memukau.",
    iconName: "Newspaper",
    color: "from-slate-500 to-slate-400",
    websiteTypes: [
      {
        name: "Website Portal Berita / Media Digital",
        slug: "website-portal-berita-media-digital",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter (media butuh kategori & manajemen rilis yang rapi)." },
          Professional: { available: true, description: "Manajemen jurnalis/editor, penataan kategori berita, pencarian cepat, manajemen iklan banner, & SEO lengkap." },
          Custom: { available: false, reasonNotAvailable: "Tidak butuh paket Custom." } 
        }
      },
      {
        name: "Website Portofolio Personal",
        slug: "website-portofolio-personal",
        packages: {
          Starter: { available: true, description: "Pajang hasil karya foto/desain, riwayat hidup, & tombol kontak." },
          Professional: { available: false, reasonNotAvailable: "Sangat jarang butuh paket Professional." },
          Custom: { available: false, reasonNotAvailable: "Sangat jarang butuh paket Custom." }
        }
      }
    ]
  },
  {
    id: "8",
    title: "Aplikasi Web Internal (Enterprise)",
    slug: "enterprise",
    description: "Sistem aplikasi web khusus (Custom Dashboard) untuk alur kerja dan operasional internal bisnis.",
    iconName: "LayoutDashboard",
    color: "from-indigo-600 to-blue-600",
    websiteTypes: [
      {
        name: "Dashboard Analitik / Portal Klien",
        slug: "dashboard-analitik-portal-klien",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter." },
          Professional: { available: false, reasonNotAvailable: "Tidak ada Paket Professional." },
          Custom: { available: true, description: "Murni aplikasi web untuk alur kerja bisnis internal (Login pengguna -> manajemen inventaris -> monitoring pekerjaan -> laporan keuangan perusahaan)." }
        }
      }
    ]
  }
];

export const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    Building2,
    GraduationCap,
    Briefcase,
    CalendarCheck,
    Ticket,
    HeartHandshake,
    Newspaper,
    LayoutDashboard
  };
  return icons[iconName];
};
