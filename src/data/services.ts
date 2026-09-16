import { 
  Building2, 
  GraduationCap, 
  Building, 
  UserSquare2, 
  Calculator, 
  CalendarCheck, 
  LayoutGrid,
} from "lucide-react";

export type FeatureStatus = boolean | string;

export interface FeatureMatrixItem {
  feature: string;
  starter: FeatureStatus;
  professional: FeatureStatus;
  custom: FeatureStatus;
}

export interface PackageFeatureGroup {
  title?: string;
  items: string[];
}

export interface PackageDetail {
  name: "Starter" | "Profesional" | "Custom";
  price: string;
  desc: string;
  fullDetails?: PackageFeatureGroup[];
}

export interface ServiceData {
  slug: string;
  title: string;
  iconName: string;
  color: string;
  description: string;
  longDescription?: string;
  packages: PackageDetail[];
  featureMatrix: FeatureMatrixItem[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "website-desa",
    title: "Website Desa",
    iconName: "Building2",
    color: "from-emerald-500 to-teal-400",
    description: "Tingkatkan transparansi dan pelayanan publik desa dengan website resmi yang modern dan profesional.",
    longDescription: "Hadirkan inovasi digital ke desa Anda. Website desa bukan hanya sebagai identitas online, tetapi juga sebagai portal informasi, promosi potensi desa (UMKM & Pariwisata), hingga melayani masyarakat secara lebih cepat dan efisien.",
    packages: [
      { 
        name: "Starter", 
        price: "Rp 750.000",
        desc: "Website resmi desa untuk informasi dasar dan pengelolaan konten. Sudah dilengkapi CMS dasar untuk mengelola Profil Desa, Perangkat Desa, Berita, Galeri, UMKM, & Wisata secara mandiri.",
        fullDetails: [
          {
            title: "Halaman (Tampilan Publik):",
            items: [
              "Beranda", "Profil Desa", "Sejarah Desa", "Visi & Misi", "Struktur Pemerintahan", 
              "Perangkat Desa", "Potensi Desa", "Destinasi Wisata", "UMKM", "Galeri", "Kontak & Lokasi"
            ]
          },
          {
            title: "Fitur Admin (CMS):",
            items: [
              "Login admin aman", 
              "Edit informasi profil desa", 
              "Kelola perangkat desa", 
              "Kelola berita sederhana", 
              "Kelola galeri", 
              "Kelola informasi wisata", 
              "Kelola UMKM", 
              "Kelola informasi kontak & lokasi", 
              "Tampilan Responsive di HP, tablet, dan komputer"
            ]
          }
        ]
      },
      { 
        name: "Profesional", 
        price: "Rp 1.500.000",
        desc: "Website desa yang lebih aktif dengan pengelolaan data yang lebih lengkap. Semua fitur Starter ditambah: Pengumuman, Statistik Desa, Download Dokumen Publik, & Dashboard Lanjutan.",
        fullDetails: [
          {
            title: "Semua fitur Starter, ditambah:",
            items: [
              "CMS berita lebih lengkap", 
              "Pengumuman desa (Papan informasi digital)", 
              "Kategori potensi desa", 
              "Manajemen UMKM lebih lengkap (kategori, filter)", 
              "Galeri berdasarkan kategori/kegiatan", 
              "Statistik & data demografi penduduk", 
              "Fitur download dokumen/regulasi desa", 
              "Pencarian informasi lanjutan", 
              "Dashboard statistik website di panel admin", 
              "Manajemen akun admin (banyak pengguna)", 
              "Statistik pengunjung terintegrasi", 
              "SEO yang lebih lengkap untuk Google"
            ]
          }
        ]
      },
      { 
        name: "Custom", 
        price: "Sesuai Kebutuhan",
        desc: "Sistem digital desa yang dibuat khusus sesuai kebutuhan pelayanan masyarakat. Mendukung Pengajuan Surat Online, Pengaduan Warga, Database Penduduk, & Notifikasi Otomatis.",
        fullDetails: [
          {
            title: "Contoh Sistem Pelayanan Khusus:",
            items: [
              "Pengajuan surat keterangan secara online oleh warga", 
              "Sistem pengaduan masyarakat terpadu", 
              "Database kependudukan lengkap", 
              "Dashboard data desa komprehensif", 
              "Tracking status pengajuan warga", 
              "Notifikasi progres via WhatsApp / Email", 
              "Generate template surat otomatis (PDF)", 
              "Multi-level akses pengguna (Kades, Sekdes, Warga)", 
              "Integrasi sistem atau API pihak ketiga"
            ]
          }
        ]
      }
    ],
    featureMatrix: [
      { feature: "Website profil", starter: true, professional: true, custom: true },
      { feature: "CMS dasar", starter: true, professional: true, custom: true },
      { feature: "Berita", starter: true, professional: "Advanced", custom: true },
      { feature: "Galeri", starter: true, professional: "Advanced", custom: true },
      { feature: "UMKM", starter: true, professional: "Advanced", custom: true },
      { feature: "Wisata", starter: true, professional: "Advanced", custom: true },
      { feature: "Pengumuman", starter: false, professional: true, custom: true },
      { feature: "Statistik desa", starter: false, professional: true, custom: true },
      { feature: "Dokumen", starter: false, professional: true, custom: true },
      { feature: "Dashboard lanjutan", starter: false, professional: true, custom: true },
      { feature: "Layanan surat", starter: false, professional: false, custom: true },
      { feature: "Pengaduan", starter: false, professional: false, custom: true },
      { feature: "Database penduduk", starter: false, professional: false, custom: true },
      { feature: "Sistem khusus", starter: false, professional: false, custom: true },
    ]
  },
  {
    slug: "website-sekolah",
    title: "Website Sekolah",
    iconName: "GraduationCap",
    color: "from-blue-500 to-indigo-500",
    description: "Hadirkan wajah digital sekolah yang profesional, informatif, dan mudah dikelola.",
    longDescription: "Website sekolah dapat digunakan untuk menyampaikan informasi kepada siswa, orang tua, guru, dan masyarakat sekaligus membantu sekolah mengelola konten secara mandiri.",
    packages: [
      { 
        name: "Starter", 
        price: "Rp 750.000",
        desc: "Website profil sekolah yang lengkap, bisa dikelola sendiri, dan memiliki absensi sederhana.",
        fullDetails: [
          {
            title: "Fitur Website:",
            items: [
              "Beranda", "Profil Sekolah", "Sejarah Sekolah", "Visi & Misi", "Struktur Organisasi",
              "Guru & Tenaga Kependidikan", "Fasilitas Sekolah", "Ekstrakurikuler", "Prestasi Sekolah & Siswa",
              "Galeri Foto", "Kontak & Lokasi Sekolah", "Informasi Pendaftaran", "Desain responsif untuk HP, tablet, dan komputer"
            ]
          },
          {
            title: "CMS / Admin Sekolah:",
            items: [
              "Login ke dashboard", "Mengubah informasi sekolah", "Menambah, mengubah, dan menghapus data guru/staf",
              "Mengelola ekstrakurikuler", "Mengelola prestasi", "Mengelola galeri", "Mengelola informasi kontak dan lokasi",
              "Mengelola konten website"
            ]
          },
          {
            title: "Absensi Sederhana:",
            items: [
              "Absensi masuk dan pulang", "Check-in / check-out", "Rekap kehadiran", "Riwayat absensi", "Admin dapat melihat data kehadiran"
            ]
          }
        ]
      },
      { 
        name: "Profesional", 
        price: "Rp 2.500.000",
        desc: "Website sekolah yang lebih aktif sebagai pusat informasi, dengan CMS lebih lengkap serta absensi menggunakan verifikasi wajah dan lokasi sekolah.",
        fullDetails: [
          {
            title: "Pusat Informasi Sekolah:",
            items: [
              "Berita Sekolah", "Pengumuman", "Agenda Kegiatan Sekolah", "Informasi Akademik",
              "Informasi Kegiatan Siswa", "Informasi Prestasi", "Artikel / Informasi Edukasi",
              "Dokumentasi Kegiatan", "Video Sekolah"
            ]
          },
          {
            title: "Dokumen & Materi:",
            items: [
              "Upload dokumen", "Download dokumen", "Modul pembelajaran", "Materi sekolah", "Formulir",
              "Panduan atau informasi untuk siswa dan orang tua"
            ]
          },
          {
            title: "CMS Lebih Lengkap:",
            items: [
              "Mengelola berita", "Mengelola pengumuman", "Mengelola agenda", "Mengelola dokumen",
              "Mengelola materi", "Mengelola video", "Mengelola galeri berdasarkan kategori",
              "Mengelola informasi akademik", "Mengelola seluruh konten website melalui dashboard"
            ]
          },
          {
            title: "Absensi dengan Verifikasi Wajah:",
            items: [
              "Check-in menggunakan verifikasi wajah", "Check-out menggunakan verifikasi wajah",
              "Verifikasi identitas sebelum absensi", "Mencegah absensi dilakukan oleh orang lain"
            ]
          },
          {
            title: "Validasi Lokasi Sekolah:",
            items: [
              "Sistem memeriksa lokasi pengguna ketika melakukan absensi",
              "Absensi hanya dapat dilakukan dalam radius yang ditentukan dari lokasi sekolah",
              "Koordinat sekolah dapat ditentukan oleh admin",
              "Data waktu absensi tercatat",
              "Data lokasi absensi tercatat",
              "Admin dapat melihat rekap kehadiran"
            ]
          },
          {
            title: "Dashboard Absensi:",
            items: [
              "Rekap kehadiran", "Riwayat absensi", "Data masuk dan pulang", "Status kehadiran",
              "Data keterlambatan", "Monitoring absensi melalui dashboard", "Export data laporan"
            ]
          }
        ]
      },
      { 
        name: "Custom", 
        price: "Sesuai Kebutuhan",
        desc: "Untuk sekolah yang membutuhkan sistem digital khusus, seperti akademik, portal siswa/guru, e-learning, CBT, perpustakaan, pembayaran, dan sistem lainnya.",
        fullDetails: [
          {
            title: "Sistem Akademik & Portal:",
            items: [
              "Data siswa, guru, kelas, jadwal pelajaran", "Manajemen nilai & rapor",
              "Portal Siswa (Lihat nilai, jadwal, materi, absen)",
              "Portal Guru (Input nilai, absensi, jadwal mengajar)"
            ]
          },
          {
            title: "E-Learning & CBT (Ujian Online):",
            items: [
              "Materi pembelajaran & tugas", "Pengumpulan tugas online", 
              "Bank soal & Ujian CBT dengan timer", "Penilaian otomatis & Rekap hasil"
            ]
          },
          {
            title: "Sistem Terpadu Lanjutan:",
            items: [
              "Absensi Lanjutan (jadwal kerja, shift, cuti, izin, sakit)",
              "Sistem Perpustakaan (buku, anggota, sirkulasi)",
              "Sistem Pembayaran (tagihan SPP, riwayat bayar)",
              "Integrasi Sistem (API, notifikasi, mesin fingerprint)"
            ]
          }
        ]
      }
    ],
    featureMatrix: [
      { feature: "Website Profil Sekolah", starter: true, professional: true, custom: true },
      { feature: "CMS Dasar", starter: true, professional: true, custom: true },
      { feature: "Guru & Staf", starter: true, professional: true, custom: true },
      { feature: "Fasilitas", starter: true, professional: true, custom: true },
      { feature: "Ekstrakurikuler", starter: true, professional: true, custom: true },
      { feature: "Prestasi", starter: true, professional: true, custom: true },
      { feature: "Galeri", starter: true, professional: true, custom: true },
      { feature: "Berita", starter: false, professional: true, custom: true },
      { feature: "Pengumuman", starter: false, professional: true, custom: true },
      { feature: "Agenda Sekolah", starter: false, professional: true, custom: true },
      { feature: "Informasi Akademik", starter: false, professional: true, custom: true },
      { feature: "Dokumen & Materi", starter: false, professional: true, custom: true },
      { feature: "Video", starter: false, professional: true, custom: true },
      { feature: "Absensi Sederhana", starter: true, professional: true, custom: true },
      { feature: "Verifikasi Wajah", starter: false, professional: true, custom: true },
      { feature: "Validasi Koordinat Lokasi", starter: false, professional: true, custom: true },
      { feature: "Dashboard Absensi", starter: "Dasar", professional: "Lengkap", custom: "Custom" },
      { feature: "Portal Siswa", starter: false, professional: false, custom: true },
      { feature: "Portal Guru", starter: false, professional: false, custom: true },
      { feature: "E-Learning", starter: false, professional: false, custom: true },
      { feature: "CBT / Ujian Online", starter: false, professional: false, custom: true },
      { feature: "Sistem Akademik", starter: false, professional: false, custom: true },
      { feature: "Sistem Perpustakaan", starter: false, professional: false, custom: true },
      { feature: "Sistem Pembayaran", starter: false, professional: false, custom: true },
      { feature: "Integrasi Sistem", starter: false, professional: false, custom: true },
    ]
  },
  {
    slug: "website-instansi",
    title: "Website Instansi",
    iconName: "Building",
    color: "from-indigo-500 to-purple-500",
    description: "Bangun kehadiran digital instansi yang profesional, informatif, dan mudah dikelola.",
    longDescription: "Website instansi membantu masyarakat mendapatkan informasi layanan, berita, pengumuman, dokumen, serta informasi resmi lainnya dengan lebih mudah.",
    packages: [
      { 
        name: "Starter", 
        price: "Rp 1.000.000",
        desc: "Website resmi instansi + CMS dasar + absensi sederhana. Cocok untuk instansi yang fokus pada profil, informasi layanan, dan informasi resmi.",
        fullDetails: [
          {
            title: "Fitur Website:",
            items: [
              "Beranda Instansi", "Profil Instansi", "Sejarah Instansi", "Visi & Misi", "Dasar Hukum",
              "Struktur Organisasi", "Informasi Layanan Publik", "Informasi Program/Kegiatan",
              "Peta Lokasi Kantor", "Kontak Instansi", "Desain responsif untuk HP, tablet, dan komputer"
            ]
          },
          {
            title: "CMS / Admin Instansi:",
            items: [
              "Login ke dashboard", "Mengubah informasi profil instansi", "Mengelola struktur organisasi",
              "Mengelola layanan publik", "Mengelola informasi kegiatan", "Mengelola galeri",
              "Mengelola kontak dan lokasi", "Mengelola konten website"
            ]
          },
          {
            title: "Absensi Sederhana:",
            items: [
              "Check-in / check-out", "Data kehadiran", "Riwayat absensi", "Rekap kehadiran",
              "Admin dapat melihat data absensi"
            ]
          }
        ]
      },
      { 
        name: "Profesional", 
        price: "Rp 2.500.000",
        desc: "Website instansi + pusat informasi + buku tamu digital + absensi wajah & lokasi. Cocok untuk instansi yang ingin mulai mendigitalisasi pengelolaan informasi dan aktivitas kantor.",
        fullDetails: [
          {
            title: "Pusat Informasi Publik:",
            items: [
              "CMS Berita Instansi", "Berita Kegiatan", "Pengumuman Resmi", "Artikel / Informasi Publik",
              "Galeri Dokumentasi", "Agenda Kegiatan", "FAQ Layanan", "Informasi Program Instansi"
            ]
          },
          {
            title: "Portal Dokumen Publik:",
            items: [
              "Upload dokumen", "Download dokumen", "Dokumen layanan", "Peraturan", "Formulir",
              "Laporan", "Informasi publik lainnya (dapat dikelompokkan)"
            ]
          },
          {
            title: "Dashboard & Manajemen User:",
            items: [
              "Statistik pengunjung & konten", "Dashboard admin", "Mendukung multi-user (Admin, Editor, Penulis) dengan hak akses berbeda"
            ]
          },
          {
            title: "Buku Tamu Digital:",
            items: [
              "Form buku tamu online", "Pencatatan Nama, Instansi asal, Keperluan, & Tujuan bagian",
              "Waktu kunjungan & Riwayat", "Pencarian data pengunjung & Export laporan"
            ]
          },
          {
            title: "Absensi dengan Verifikasi Wajah & Lokasi:",
            items: [
              "Check-in & Check-out menggunakan verifikasi wajah", 
              "Validasi radius lokasi dari koordinat kantor",
              "Pencatatan data waktu & lokasi absensi", "Dashboard monitoring & rekap absensi"
            ]
          }
        ]
      },
      { 
        name: "Custom", 
        price: "Sesuai Kebutuhan",
        desc: "Website + sistem digital instansi. Cocok untuk kebutuhan yang lebih kompleks seperti pelayanan online, pengaduan, antrean, administrasi, dashboard pimpinan, dan integrasi sistem.",
        fullDetails: [
          {
            title: "Pelayanan Publik:",
            items: [
              "Sistem Pengajuan Perizinan Online", "Sistem Pengajuan Administrasi", "Sistem Antrean Online",
              "Sistem Pengaduan Masyarakat", "Ticketing Pelayanan", "Tracking Status Pengajuan", "Database Riwayat Pelayanan"
            ]
          },
          {
            title: "Sistem Administrasi:",
            items: [
              "Pengelolaan data masyarakat", "Pengelolaan data pegawai", "Manajemen dokumen",
              "Sistem surat-menyurat", "Pengajuan dan persetujuan dokumen", "Arsip digital"
            ]
          },
          {
            title: "Sistem Absensi & Buku Tamu Lanjutan:",
            items: [
              "Absensi: Penjadwalan, shift, izin, sakit, cuti, lembur, persetujuan berjenjang, integrasi fingerprint",
              "Buku Tamu: Registrasi pengunjung, QR Code check-in, Notifikasi kunjungan, Kartu pengunjung"
            ]
          },
          {
            title: "Integrasi & Dashboard Eksekutif:",
            items: [
              "Terhubung dengan sistem pemerintahan, kepegawaian, API, dan e-sign",
              "Dashboard Eksekutif pimpinan (Statistik pelayanan, pengaduan, aktivitas kinerja)"
            ]
          }
        ]
      }
    ],
    featureMatrix: [
      { feature: "Website Profil Instansi", starter: true, professional: true, custom: true },
      { feature: "Sejarah Instansi", starter: true, professional: true, custom: true },
      { feature: "Visi & Misi", starter: true, professional: true, custom: true },
      { feature: "Dasar Hukum", starter: true, professional: true, custom: true },
      { feature: "Struktur Organisasi", starter: true, professional: true, custom: true },
      { feature: "Layanan Publik", starter: true, professional: true, custom: true },
      { feature: "Peta & Kontak", starter: true, professional: true, custom: true },
      { feature: "CMS Dasar", starter: true, professional: true, custom: true },
      { feature: "Berita Instansi", starter: false, professional: true, custom: true },
      { feature: "Pengumuman Resmi", starter: false, professional: true, custom: true },
      { feature: "Agenda Kegiatan", starter: false, professional: true, custom: true },
      { feature: "Galeri", starter: true, professional: true, custom: true },
      { feature: "FAQ Layanan", starter: false, professional: true, custom: true },
      { feature: "Dokumen Publik", starter: false, professional: true, custom: true },
      { feature: "Statistik Pengunjung", starter: false, professional: true, custom: true },
      { feature: "Multi-Level User", starter: false, professional: true, custom: true },
      { feature: "Absensi Sederhana", starter: true, professional: true, custom: true },
      { feature: "Verifikasi Wajah", starter: false, professional: true, custom: true },
      { feature: "Validasi Lokasi", starter: false, professional: true, custom: true },
      { feature: "Dashboard Absensi", starter: "Dasar", professional: "Lengkap", custom: "Custom" },
      { feature: "Buku Tamu Digital", starter: false, professional: true, custom: true },
      { feature: "Statistik Buku Tamu", starter: false, professional: true, custom: true },
      { feature: "Sistem Pengaduan", starter: false, professional: false, custom: true },
      { feature: "Sistem Perizinan", starter: false, professional: false, custom: true },
      { feature: "Sistem Antrean", starter: false, professional: false, custom: true },
      { feature: "Tracking Pelayanan", starter: false, professional: false, custom: true },
      { feature: "Sistem Administrasi", starter: false, professional: false, custom: true },
      { feature: "Integrasi Fingerprint", starter: false, professional: false, custom: true },
      { feature: "Dashboard Eksekutif", starter: false, professional: false, custom: true },
      { feature: "Integrasi Sistem/API", starter: false, professional: false, custom: true },
    ]
  },
  {
    slug: "website-tokoh",
    title: "Website Tokoh",
    iconName: "UserSquare2",
    color: "from-amber-500 to-orange-400",
    description: "Bangun profil digital yang profesional untuk memperkenalkan diri, karya, pengalaman, dan gagasan kepada masyarakat.",
    longDescription: "Website tokoh menjadi tempat resmi untuk menyampaikan informasi tentang seorang tokoh secara lebih terarah, tanpa bergantung sepenuhnya pada media sosial.",
    packages: [
      { 
        name: "Starter", 
        price: "Rp 500.000",
        desc: "Profil digital profesional untuk memperkenalkan siapa Anda, pengalaman, karya, dan pencapaian Anda.",
        fullDetails: [
          {
            title: "Fitur Website:",
            items: [
              "Beranda", "Profil / Biografi", "Riwayat Pendidikan", "Riwayat Karier / Pengalaman",
              "Visi & Misi / Prinsip", "Karya & Prestasi", "Galeri Foto", "Kontak", 
              "Tautan Media Sosial", "Desain responsif untuk HP, tablet, dan komputer"
            ]
          },
          {
            title: "CMS / Admin:",
            items: [
              "Login ke dashboard", "Mengubah profil", "Mengelola riwayat pendidikan", 
              "Mengelola pengalaman", "Menambahkan prestasi", "Mengelola galeri",
              "Mengubah informasi kontak", "Mengatur tautan media sosial"
            ]
          },
          {
            title: "Kontak Publik:",
            items: [
              "Formulir kontak sederhana", "Tombol WhatsApp", "Email", "Media sosial"
            ]
          }
        ]
      },
      { 
        name: "Profesional", 
        price: "Rp 1.500.000",
        desc: "Website tokoh yang aktif untuk menyampaikan berita, gagasan, kegiatan, karya, dan dokumentasi kepada publik.",
        fullDetails: [
          {
            title: "Berita & Publikasi:",
            items: [
              "Berita kegiatan", "Artikel / tulisan", "Opini & gagasan", "Press release",
              "Pengumuman", "Dokumentasi kegiatan"
            ]
          },
          {
            title: "Agenda & Kegiatan:",
            items: [
              "Kalender kegiatan", "Jadwal acara", "Detail kegiatan", "Lokasi kegiatan",
              "Dokumentasi kegiatan", "Riwayat kegiatan"
            ]
          },
          {
            title: "Karya & Pencapaian:",
            items: [
              "Portofolio", "Karya", "Penghargaan", "Prestasi", "Kontribusi", "Proyek yang dikerjakan"
            ]
          },
          {
            title: "Galeri & Dashboard:",
            items: [
              "Galeri berdasarkan kegiatan", "Video & Album dokumentasi", 
              "Statistik pengunjung & artikel", "Dashboard pengelolaan konten", "Manajemen admin multi-user"
            ]
          }
        ]
      },
      { 
        name: "Custom", 
        price: "Sesuai Kebutuhan",
        desc: "Platform digital khusus untuk komunitas, kegiatan, komunikasi publik, organisasi, atau kebutuhan kampanye tertentu.",
        fullDetails: [
          {
            title: "Sistem Komunitas / Relawan:",
            items: [
              "Pendaftaran anggota", "Database anggota & relawan", "Manajemen komunitas", 
              "Pembagian kelompok/wilayah", "Dashboard anggota", "Riwayat aktivitas"
            ]
          },
          {
            title: "Pendaftaran Kegiatan & Donasi:",
            items: [
              "Pendaftaran peserta", "Konfirmasi pendaftaran", "QR Code & Check-in", "Rekap peserta",
              "Halaman donasi", "Integrasi payment gateway", "Laporan transaksi & donasi"
            ]
          },
          {
            title: "Sistem Komunikasi & Wilayah:",
            items: [
              "Formulir aspirasi / pengaduan", "Kotak pesan masyarakat", "Newsletter & Notifikasi", 
              "Integrasi WhatsApp / Email", "Pemetaan lokasi kegiatan wilayah"
            ]
          },
          {
            title: "Dashboard Khusus:",
            items: [
              "Aktivitas website", "Data anggota & dukungan", "Statistik komunikasi publik", "Laporan kegiatan"
            ]
          }
        ]
      }
    ],
    featureMatrix: [
      { feature: "Profil Tokoh", starter: true, professional: true, custom: true },
      { feature: "Biografi & Riwayat Hidup", starter: true, professional: true, custom: true },
      { feature: "Pendidikan & Pengalaman", starter: true, professional: true, custom: true },
      { feature: "Visi & Misi / Prinsip", starter: true, professional: true, custom: true },
      { feature: "Karya & Prestasi", starter: true, professional: true, custom: true },
      { feature: "Galeri", starter: true, professional: true, custom: true },
      { feature: "Media Sosial", starter: true, professional: true, custom: true },
      { feature: "Kontak Publik", starter: true, professional: true, custom: true },
      { feature: "CMS Dasar", starter: true, professional: true, custom: true },
      { feature: "Berita", starter: false, professional: true, custom: true },
      { feature: "Artikel / Opini", starter: false, professional: true, custom: true },
      { feature: "Press Release", starter: false, professional: true, custom: true },
      { feature: "Agenda Kegiatan", starter: false, professional: true, custom: true },
      { feature: "Portofolio Lengkap", starter: true, professional: true, custom: true },
      { feature: "Galeri Terkategori", starter: false, professional: true, custom: true },
      { feature: "Video", starter: false, professional: true, custom: true },
      { feature: "Statistik Pengunjung", starter: false, professional: true, custom: true },
      { feature: "Multi-Level Admin", starter: false, professional: true, custom: true },
      { feature: "Pendaftaran Kegiatan", starter: false, professional: false, custom: true },
      { feature: "Sistem Komunitas", starter: false, professional: false, custom: true },
      { feature: "Database Anggota", starter: false, professional: false, custom: true },
      { feature: "Sistem Aspirasi / Pesan", starter: false, professional: false, custom: true },
      { feature: "Newsletter / Notifikasi", starter: false, professional: false, custom: true },
      { feature: "Donasi Online", starter: false, professional: false, custom: true },
      { feature: "QR Check-in Kegiatan", starter: false, professional: false, custom: true },
      { feature: "Pemetaan Wilayah", starter: false, professional: false, custom: true },
      { feature: "Dashboard Khusus", starter: false, professional: false, custom: true },
      { feature: "Integrasi Sistem/API", starter: false, professional: false, custom: true },
    ]
  },
  {
    slug: "aplikasi-kasir",
    title: "Aplikasi Kasir (POS)",
    iconName: "Calculator",
    color: "from-pink-500 to-rose-400",
    description: "Kasir digital yang sederhana, lengkap, dan terjangkau untuk membantu bisnis mencatat transaksi, mengelola produk, dan memantau penjualan.",
    longDescription: "Cocok untuk warung, toko, kedai, kafe, laundry, usaha retail, dan berbagai jenis UMKM.",
    packages: [
      { 
        name: "Starter", 
        price: "Rp 750.000",
        desc: "Kasir digital untuk usaha kecil. Sudah mencakup transaksi, produk, stok dasar, struk, dan laporan penjualan.",
        fullDetails: [
          {
            title: "Kasir & Transaksi:",
            items: [
              "Input transaksi penjualan", "Pencarian produk", "Keranjang transaksi", "Penghitungan total otomatis",
              "Penghitungan kembalian", "Diskon", "Pembatalan transaksi", "Riwayat transaksi", "Detail transaksi", "Cetak struk"
            ]
          },
          {
            title: "Manajemen Produk:",
            items: [
              "Tambah, edit, hapus produk", "Kategori produk", "Harga jual", "Foto produk", "Kode produk", "Stok produk"
            ]
          },
          {
            title: "Laporan Penjualan:",
            items: [
              "Rekap penjualan harian, mingguan, bulanan", "Total omzet", "Riwayat transaksi", "Produk terlaris"
            ]
          },
          {
            title: "Pengguna & Struk:",
            items: [
              "Login admin & akun kasir", "Hak akses dasar", "Struk digital", "Cetak printer thermal", "Nomor transaksi & Tanggal waktu"
            ]
          }
        ]
      },
      { 
        name: "Profesional", 
        price: "Rp 1.500.000",
        desc: "Kasir + manajemen usaha. Ditambah inventory, barcode, supplier, laporan laba, multi-kasir, shift, dan pengelolaan kas.",
        fullDetails: [
          {
            title: "Inventory & Barcode:",
            items: [
              "Stok masuk & keluar", "Penyesuaian stok", "Riwayat perubahan stok", "Stok minimum",
              "Notifikasi stok menipis", "Supplier & Riwayat pembelian", "Scan barcode produk & QR Code", "Dukungan barcode scanner"
            ]
          },
          {
            title: "Penjualan Lanjutan:",
            items: [
              "Promo & Harga khusus", "Retur penjualan", "Riwayat pembatalan", "Berbagai metode pembayaran"
            ]
          },
          {
            title: "Laporan Bisnis & Kasir:",
            items: [
              "Laporan omzet & perkiraan laba", "Laporan stok, produk terlaris, produk kurang laku", "Export laporan ke Excel",
              "Multi-kasir & Shift kasir", "Rekap transaksi per kasir", "Pembukaan/penutupan shift", "Kas masuk/keluar"
            ]
          }
        ]
      },
      { 
        name: "Custom", 
        price: "Sesuai Kebutuhan",
        desc: "POS yang dibuat mengikuti kebutuhan bisnis (multi-cabang, membership, pembayaran online, akuntansi, marketplace).",
        fullDetails: [
          {
            title: "Multi-Cabang & Membership:",
            items: [
              "Banyak cabang, stok per cabang, transfer stok", "Dashboard pusat cabang", "Database pelanggan & Membership level",
              "Loyalty point, reward, voucher, promo member"
            ]
          },
          {
            title: "Pembayaran & Karyawan:",
            items: [
              "Tunai, Transfer, QRIS, E-wallet, Payment gateway", "Data karyawan, role & hak akses",
              "Absensi karyawan", "Komisi & Target penjualan"
            ]
          },
          {
            title: "Integrasi & Sistem Khusus:",
            items: [
              "Integrasi Sistem akuntansi, Marketplace, E-commerce", "Integrasi WhatsApp & Sistem gudang",
              "Sistem khusus Restoran/Kafe/Laundry/Apotek/Grosir/Rental/Franchise", "Dashboard Bisnis Komprehensif"
            ]
          }
        ]
      }
    ],
    featureMatrix: [
      { feature: "Transaksi Penjualan", starter: true, professional: true, custom: true },
      { feature: "Total & Kembalian Otomatis", starter: true, professional: true, custom: true },
      { feature: "Diskon", starter: true, professional: true, custom: true },
      { feature: "Riwayat Transaksi", starter: true, professional: true, custom: true },
      { feature: "Produk & Kategori", starter: true, professional: true, custom: true },
      { feature: "Stok Produk", starter: true, professional: true, custom: true },
      { feature: "Cetak Struk", starter: true, professional: true, custom: true },
      { feature: "Laporan Penjualan", starter: true, professional: true, custom: true },
      { feature: "Produk Terlaris", starter: true, professional: true, custom: true },
      { feature: "Admin & Kasir", starter: true, professional: true, custom: true },
      { feature: "Stok Masuk/Keluar", starter: false, professional: true, custom: true },
      { feature: "Notifikasi Stok Menipis", starter: false, professional: true, custom: true },
      { feature: "Supplier", starter: false, professional: true, custom: true },
      { feature: "Barcode / QR Scanner", starter: false, professional: true, custom: true },
      { feature: "Retur Penjualan", starter: false, professional: true, custom: true },
      { feature: "Laporan Laba", starter: false, professional: true, custom: true },
      { feature: "Export Excel", starter: false, professional: true, custom: true },
      { feature: "Multi-Kasir", starter: false, professional: true, custom: true },
      { feature: "Shift Kasir", starter: false, professional: true, custom: true },
      { feature: "Kas Masuk/Keluar", starter: false, professional: true, custom: true },
      { feature: "Multi-Cabang", starter: false, professional: false, custom: true },
      { feature: "Transfer Stok Cabang", starter: false, professional: false, custom: true },
      { feature: "Membership & Loyalty", starter: false, professional: false, custom: true },
      { feature: "Payment Gateway", starter: false, professional: false, custom: true },
      { feature: "QRIS Terintegrasi", starter: false, professional: false, custom: true },
      { feature: "Manajemen Karyawan", starter: false, professional: false, custom: true },
      { feature: "Integrasi Akuntansi", starter: false, professional: false, custom: true },
      { feature: "Integrasi Marketplace", starter: false, professional: false, custom: true },
      { feature: "Dashboard Bisnis", starter: false, professional: false, custom: true },
      { feature: "Sistem Khusus", starter: false, professional: false, custom: true },
    ]
  },
  {
    slug: "sistem-absensi",
    title: "Sistem Absensi",
    iconName: "CalendarCheck",
    color: "from-cyan-500 to-blue-500",
    description: "Pantau kehadiran karyawan atau siswa secara real-time dan terpusat dari mana saja.",
    longDescription: "Sistem absensi digital membuat proses perekapan kehadiran jauh lebih transparan dan hemat waktu, membebaskan staf HR Anda dari pekerjaan administratif yang berulang.",
    packages: [
      { 
        name: "Starter", 
        price: "Rp 1.500.000",
        desc: "Sistem Absensi Online dasar via Web (Check In/Out). Admin dapat melihat Laporan Kehadiran Dasar dan mengekspor data ke Excel.",
        fullDetails: [
          {
            title: "Absensi & Laporan Dasar:",
            items: [
              "Check-In & Check-Out via Browser Hape", "Riwayat Presensi per Karyawan",
              "Dashboard Rekap Harian untuk HR", "Export Laporan Presensi ke Excel",
              "Manajemen Data Karyawan Sederhana"
            ]
          }
        ]
      },
      { 
        name: "Profesional", 
        price: "Rp 3.000.000",
        desc: "Keamanan lebih ketat dengan Deteksi Lokasi (GPS) dan Foto Selfie (Geotagging) saat absen. Dilengkapi dengan Rekap Gaji & Tunjangan otomatis berdasarkan kehadiran.",
        fullDetails: [
          {
            title: "Validasi Kehadiran Tingkat Lanjut:",
            items: [
              "Semua fitur Starter", "Pembatasan Jarak Absen via Geolocation GPS",
              "Validasi Wajah via Foto Selfie (Geotagging)", "Penghitungan Uang Makan / Transport Otomatis",
              "Laporan Keterlambatan Terperinci", "Dashboard Pantauan Realtime Karyawan Aktif"
            ]
          }
        ]
      },
      { 
        name: "Custom", 
        price: "Sesuai Kebutuhan",
        desc: "Solusi HR Terpadu. Termasuk Pengajuan Cuti/Lembur dengan persetujuan berjenjang, Integrasi Mesin Fingerprint fisik, dan Manajemen Shift Kerja dinamis.",
        fullDetails: [
          {
            title: "Sistem Human Resource (HRIS):",
            items: [
              "Modul Pengajuan Cuti & Lembur dengan Approval Berjenjang",
              "Penjadwalan Shift Kerja Fleksibel (Pagi/Siang/Malam)",
              "Integrasi Langsung Mesin Fingerprint (Tarik Data Otomatis)",
              "Sistem Penggajian Lengkap dengan Slip Gaji PDF",
              "Penilaian Kinerja Karyawan (KPI)"
            ]
          }
        ]
      }
    ],
    featureMatrix: [
      { feature: "Absen Masuk & Pulang", starter: true, professional: true, custom: true },
      { feature: "Laporan & Export Excel", starter: true, professional: true, custom: true },
      { feature: "Deteksi Lokasi GPS", starter: false, professional: true, custom: true },
      { feature: "Foto Selfie Presensi", starter: false, professional: true, custom: true },
      { feature: "Rekap Gaji & Tunjangan", starter: false, professional: true, custom: true },
      { feature: "Pengajuan Cuti / Lembur", starter: false, professional: false, custom: true },
      { feature: "Integrasi Fingerprint Fisik", starter: false, professional: false, custom: true },
      { feature: "Penjadwalan Shift Kerja", starter: false, professional: false, custom: true },
    ]
  },
  {
    slug: "custom-lainnya",
    title: "Website Toko Online / Lainnya",
    iconName: "LayoutGrid",
    color: "from-slate-500 to-slate-400",
    description: "Website untuk toko, UMKM, jasa, komunitas, maupun bisnis dengan kebutuhan khusus.",
    longDescription: "Mulai dari katalog produk sederhana hingga sistem toko online dengan transaksi dan pengelolaan pesanan.",
    packages: [
      { 
        name: "Starter", 
        price: "Rp 850.000",
        desc: "Katalog & Toko Online Dasar. Cocok untuk bisnis yang ingin memiliki website produk profesional dan menerima pesanan secara langsung melalui WhatsApp.",
        fullDetails: [
          {
            title: "Katalog & Pemesanan Dasar:",
            items: [
              "Beranda & Katalog produk", "Kategori, Detail, Deskripsi & Varian produk", 
              "Foto produk & Harga", "Tombol pesan melalui WhatsApp", "Keranjang sederhana & Form pemesanan"
            ]
          },
          {
            title: "Informasi & Admin:",
            items: [
              "Informasi kontak & lokasi", "Galeri", "Desain responsive (HP, tablet, laptop)",
              "Login & Dashboard admin", "Kelola produk, kategori & informasi toko"
            ]
          }
        ]
      },
      { 
        name: "Profesional", 
        price: "Rp 2.500.000",
        desc: "Toko Online dengan Sistem Pesanan. Cocok untuk bisnis yang sudah membutuhkan proses pemesanan lebih terstruktur dan pengelolaan toko yang lebih lengkap.",
        fullDetails: [
          {
            title: "Toko Online & Pembayaran:",
            items: [
              "Keranjang belanja & Checkout otomatis", "Data pelanggan & Riwayat pesanan", 
              "Status pesanan, Kode promo & diskon", "Transfer manual & Upload bukti pembayaran", 
              "Verifikasi pembayaran oleh admin"
            ]
          },
          {
            title: "Pengiriman & Stok:",
            items: [
              "Perhitungan ongkos kirim & Pilihan metode pengiriman", "Data alamat, Nomor resi, Status pengiriman",
              "Variasi & Stok produk"
            ]
          },
          {
            title: "Dashboard Lanjutan:",
            items: [
              "Manajemen pelanggan, pesanan, & stok", "Laporan penjualan, rekap transaksi & statistik toko"
            ]
          }
        ]
      },
      { 
        name: "Custom", 
        price: "Sesuai Kebutuhan",
        desc: "Untuk bisnis atau organisasi yang membutuhkan sistem di luar fitur toko online standar.",
        fullDetails: [
          {
            title: "Integrasi Pembayaran Otomatis:",
            items: [
              "Payment Gateway (QRIS, VA, E-Wallet)", "Verifikasi pembayaran otomatis"
            ]
          },
          {
            title: "Sistem Lanjutan & Afiliasi:",
            items: [
              "Sistem reseller, afiliasi, dropship", "Membership & loyalty", "Multi-toko / multi-cabang"
            ]
          },
          {
            title: "Integrasi & ERP:",
            items: [
              "Integrasi marketplace, WhatsApp API, Pelacakan resi otomatis", "Manajemen gudang & sistem supplier",
              "Sistem pembelian & Akuntansi", "Aplikasi mobile, Integrasi API, ERP, Sistem khusus sesuai alur bisnis"
            ]
          }
        ]
      }
    ],
    featureMatrix: [
      { feature: "Katalog Produk", starter: true, professional: true, custom: true },
      { feature: "Kategori Produk", starter: true, professional: true, custom: true },
      { feature: "Detail & Varian Produk", starter: true, professional: true, custom: true },
      { feature: "Foto Produk", starter: true, professional: true, custom: true },
      { feature: "Order via WhatsApp", starter: true, professional: true, custom: true },
      { feature: "Keranjang Belanja", starter: true, professional: true, custom: true },
      { feature: "Form Checkout", starter: true, professional: true, custom: true },
      { feature: "Manajemen Produk", starter: true, professional: true, custom: true },
      { feature: "Dashboard Admin", starter: true, professional: true, custom: true },
      { feature: "Data Pelanggan", starter: false, professional: true, custom: true },
      { feature: "Riwayat Pesanan", starter: false, professional: true, custom: true },
      { feature: "Manajemen Stok", starter: false, professional: true, custom: true },
      { feature: "Kode Promo & Diskon", starter: false, professional: true, custom: true },
      { feature: "Perhitungan Ongkos Kirim", starter: false, professional: true, custom: true },
      { feature: "Manajemen Pengiriman", starter: false, professional: true, custom: true },
      { feature: "Nomor Resi", starter: false, professional: true, custom: true },
      { feature: "Laporan Penjualan", starter: false, professional: true, custom: true },
      { feature: "Transfer Manual", starter: false, professional: true, custom: true },
      { feature: "Upload Bukti Pembayaran", starter: false, professional: true, custom: true },
      { feature: "Payment Gateway", starter: false, professional: false, custom: true },
      { feature: "QRIS Otomatis", starter: false, professional: false, custom: true },
      { feature: "Virtual Account", starter: false, professional: false, custom: true },
      { feature: "Reseller / Afiliasi", starter: false, professional: false, custom: true },
      { feature: "Multi-Cabang", starter: false, professional: false, custom: true },
      { feature: "Integrasi Marketplace", starter: false, professional: false, custom: true },
      { feature: "ERP / Sistem Khusus", starter: false, professional: false, custom: true },
    ]
  }
];

export const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    Building2,
    GraduationCap,
    Building,
    UserSquare2,
    Calculator,
    CalendarCheck,
    LayoutGrid
  };
  return icons[iconName];
};
