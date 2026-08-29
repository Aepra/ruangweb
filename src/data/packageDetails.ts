export const packageDetails = {
  Starter: {
    title: "STARTER — Website Informasi + CMS Dasar",
    price: "Mulai Rp 500.000",
    gambaran: "Starter ditujukan untuk client yang ingin memiliki website resmi dan bisa mengubah isinya sendiri tanpa bergantung pada developer. Website sudah dilengkapi sistem database dan Content Management System (CMS).",
    didapatkan: [
      "Website responsive untuk berbagai perangkat",
      "Halaman Beranda, Profil, Layanan, Berita, Galeri & Kontak",
      "Domain dan Hosting (Jika termasuk paket)",
      "Database & Admin Dashboard",
      "CMS untuk mengelola konten website",
      "Optimasi SEO Dasar & Integrasi Google Maps"
    ],
    pengunjung: [
      "Membuka dan melihat informasi website",
      "Membaca berita, artikel, dan galeri",
      "Mencari informasi sederhana",
      "Menghubungi melalui tombol WhatsApp atau Form Kontak",
      "Tidak ada akun pengguna sebagai fitur standar."
    ],
    admin: [
      "1 Akun Admin Utama",
      "Login ke dashboard untuk mengelola seluruh halaman",
      "Menambah, mengedit, menghapus, atau menyimpan artikel (draft)",
      "Mengelola album galeri foto",
      "Mengubah informasi profil, alamat, dan nomor kontak"
    ],
    contoh: "Saya ingin punya website dan bisa mengubah isinya sendiri."
  },
  Professional: {
    title: "PROFESSIONAL — Website + CMS Tingkat Lanjut",
    price: "Mulai Rp 3.500.000",
    gambaran: "Professional ditujukan untuk client dengan skala yang lebih besar, memiliki lebih banyak data, dan website perlu dikelola oleh beberapa orang secara bersamaan. Fokus utamanya adalah pengelolaan konten secara terstruktur dan pembagian peran.",
    didapatkan: [
      "Semua fitur Paket Starter",
      "CMS Tingkat Lanjut dengan manajemen kategori",
      "Multi-Admin (Hak akses untuk Editor, Staff, dll)",
      "Pencarian & Filter kategori",
      "Manajemen Dokumen & File",
      "Statistik Kunjungan",
      "Catatan Aktivitas (Activity Log) para pengelola"
    ],
    pengunjung: [
      "Semua yang ada di Starter",
      "Mencari & mem-filter informasi secara mendalam",
      "Mengunduh dokumen-dokumen publik",
      "Mengisi berbagai jenis form lanjutan",
      "Secara default, pengunjung tidak memiliki akun pribadi."
    ],
    addonOpsional: [
      "Mulai Rp300.000 untuk penambahan fitur 'Akun Pengguna Dasar'",
      "User bisa Register, Login, dan Logout",
      "User memiliki Dashboard Profil dan Pengaturan Akun sendiri",
      "Penting: Akun ini hanya untuk informasi dasar (belum termasuk fitur pengajuan, upload dokumen rahasia, atau alur kerja khusus)."
    ],
    admin: [
      "Super Admin dapat membuat akun pengelola lain (Staff/Editor)",
      "Memberikan batasan hak akses (Permission) per akun",
      "Mengelola direktori dokumen & event/kegiatan",
      "Melihat laporan statistik aktivitas website",
      "Mengatur struktur data & kategori dengan lebih leluasa"
    ],
    contohAdmin: [
      "Admin Utama: Bisa mengatur semuanya termasuk akun staf.",
      "Editor: Hanya bisa membuat dan menyetujui artikel.",
      "Staff Publikasi: Hanya bisa mengelola galeri & dokumen."
    ],
    contoh: "Saya ingin mengelola website yang lebih lengkap dan melibatkan beberapa pengelola."
  },
  Custom: {
    title: "CUSTOM — Sistem Web App Khusus",
    price: "Mulai Rp 10.000.000",
    gambaran: "Custom digunakan ketika website sudah berubah bentuk menjadi sebuah sistem yang menjalankan suatu proses bisnis (alur kerja/workflow). Pada paket ini, fitur akun pengguna merupakan inti dari keseluruhan sistem (bukan sekadar tambahan).",
    didapatkan: [
      "Semua fitur paket Professional sebagai pondasi dasar",
      "Sistem Akun Pengguna (Register & Login)",
      "Dashboard Khusus Pengguna (Member Area)",
      "Formulir Pengajuan Terstruktur & Upload Dokumen",
      "Sistem Verifikasi & Persetujuan (Approval) Admin",
      "Tracking Status (Pelacakan Proses bagi User)",
      "Notifikasi Sistem & Workflow Kustom",
      "Integrasi API Pihak Ketiga (Sesuai kebutuhan)"
    ],
    pengunjung: [
      "Pengunjung anonim bebas melihat halaman informasi publik.",
      "Pengunjung bisa Registrasi & Login untuk menjadi User.",
      "User memiliki Dashboard Profil mereka sendiri.",
      "User bisa membuat pengajuan, melampirkan dokumen persyaratan.",
      "User melacak riwayat dan status permohonan mereka secara mandiri."
    ],
    admin: [
      "Dapat disesuaikan dengan struktur persetujuan instansi:",
      "Admin Penerima: Mengecek kelengkapan dokumen pengajuan user.",
      "Reviewer: Memverifikasi keabsahan data pengguna.",
      "Approver/Pimpinan: Memberikan persetujuan akhir (ACC) pada sistem.",
      "Seluruh alur kerja (workflow) tercatat oleh sistem (Log Audit)."
    ],
    contoh: "Saya ingin website sekaligus menjalankan proses atau sistem kerja khusus."
  }
};
