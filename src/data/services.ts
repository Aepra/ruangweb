import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  CalendarCheck, 
  Ticket, 
  HeartHandshake, 
  Newspaper, 
  LayoutDashboard,
  ShoppingCart,
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
    id: "profil-usaha",
    title: "Website Profil Usaha & Instansi",
    slug: "profil-usaha",
    description: "Tingkatkan kredibilitas dengan website profil resmi untuk PT, CV, Yayasan, hingga Sekolah & Instansi Pemerintah.",
    iconName: "Briefcase",
    color: "from-blue-500 to-indigo-500",
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
        name: "Website Profil Sekolah & Institusi",
        slug: "website-profil-sekolah-institusi",
        packages: {
          Starter: { available: true, description: "Profil sekolah, fasilitas, visi-misi, & CMS berita kegiatan." },
          Professional: { available: true, description: "Kelola data guru/staf, struktur organisasi, unduhan modul, galeri alumni, & statistik pengunjung." },
          Custom: { available: false, reasonNotAvailable: "Tidak butuh Custom (kecuali jika digabung dengan PPDB/CBT)." }
        }
      },
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
        name: "Website Layanan Kesehatan Publik (Puskesmas/Klinik)",
        slug: "website-layanan-kesehatan-publik-puskesmas-klinik",
        packages: {
          Starter: { available: true, description: "Profil puskesmas, jadwal dokter statis, & kontak WhatsApp." },
          Professional: { available: true, description: "Jadwal dokter dinamis, pengolahan media edukasi kesehatan, & pengumuman internal." },
          Custom: { available: true, description: "Sistem pengambil nomor antrean online real-time, integrasi BPJS/rekam medis dasar, & portal cek ketersediaan kamar." }
        }
      },
      {
        name: "Website Donasi & Galang Dana",
        slug: "website-donasi-galang-dana",
        packages: {
          Starter: { available: true, description: "Informasi yayasan & nomor rekening resmi untuk transfer manual." },
          Professional: { available: true, description: "Menampilkan laporan keuangan bulanan (PDF/Gambar) & daftar kampanye donasi statis." },
          Custom: { available: true, description: "Donatur isi nominal -> bayar via e-wallet/QRIS -> grafik ketercapaian dana naik otomatis secara real-time." }
        }
      },
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
    id: "toko-online",
    title: "Website Toko Online & Penjualan",
    slug: "toko-online",
    description: "Perluas jangkauan pasar dan mudahkan pelanggan berbelanja dengan katalog digital atau E-Commerce otomatis.",
    iconName: "ShoppingCart",
    color: "from-emerald-500 to-teal-400",
    websiteTypes: [
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
    id: "acara-undangan",
    title: "Undangan Digital",
    slug: "acara-undangan",
    description: "Sebarkan momen bahagia Anda dengan undangan digital estetik yang memukau untuk pernikahan atau acara lainnya.",
    iconName: "Ticket",
    color: "from-pink-500 to-rose-400",
    websiteTypes: [
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
    id: "aplikasi-custom",
    title: "Sistem Aplikasi Custom",
    slug: "aplikasi-custom",
    description: "Otomatisasi bisnis Anda dengan aplikasi manajemen internal, sistem booking, akademik, hingga portal kasir.",
    iconName: "LayoutDashboard",
    color: "from-amber-500 to-orange-500",
    websiteTypes: [
      {
        name: "Dashboard Analitik / Portal Klien",
        slug: "dashboard-analitik-portal-klien",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter." },
          Professional: { available: false, reasonNotAvailable: "Tidak ada Paket Professional." },
          Custom: { available: true, description: "Murni aplikasi web untuk alur kerja bisnis internal (Login pengguna -> manajemen inventaris -> monitoring pekerjaan -> laporan keuangan perusahaan)." }
        }
      },
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
        name: "Website Pelayanan Administrasi & Dokumen Warga",
        slug: "website-pelayanan-administrasi-dokumen-warga",
        packages: {
          Starter: { available: false, reasonNotAvailable: "Tidak ada Paket Starter (karena butuh formulir & alur verifikasi)." },
          Professional: { available: true, description: "Warga hanya mengunduh formulir kosong & melihat syarat administrasi." },
          Custom: { available: true, description: "Full aplikasi warga (Warga login -> isi formulir -> upload KKK/KTP -> admin/staf verifikasi -> surat diterbitkan -> notifikasi)." }
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
    LayoutDashboard,
    ShoppingCart
  };
  return icons[iconName];
};
