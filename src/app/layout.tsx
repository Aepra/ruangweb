import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RuangWeb - Jasa Pembuatan Website Profesional",
  description: "Jasa pembuatan website profesional, cepat, dan modern untuk bisnis Anda. Buat website impian Anda sekarang bersama RuangWeb.",
  keywords: [
    "ruang web",
    "ruangweb",
    "jasa pembuatan website",
    "jasa pembuatan web",
    "buat web",
    "pesan web",
    "bikin website",
    "jasa bikin web",
    "web developer indonesia",
    "jasa programmer",
    "jasa website perusahaan",
    "website company profile",
    "jasa website instansi",
    "jasa website sekolah",
    "jasa website desa",
    "jasa website toko online",
    "website e-commerce",
    "website custom",
    "web design indonesia",
    "jasa desain web",
    "jasa website murah",
    "jasa website profesional",
    "jasa website terpercaya",
    "pembuat website terbaik",
    "jasa web SEO",
    "bikin web murah"
  ],
  verification: {
    google: "3ADFfyTYllKTIDJ0Yl9PAnMADqA3D37F0qrxPKQAfAc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
