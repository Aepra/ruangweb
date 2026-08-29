import { db } from "@/lib/db";
import { invitationCategories } from "@/db/schema";
import { ArrowLeft, Save, Upload } from "lucide-react";
import Link from "next/link";

export default async function AdminUndanganBaru() {
  const categories = await db.select().from(invitationCategories);

  return (
    <div className="max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <Link href="/admin/undangan" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-4">
            <ArrowLeft size={16} />
            Kembali ke Daftar Undangan
          </Link>
          <h1 className="text-2xl font-bold text-white mb-1">Tambah Undangan Baru</h1>
          <p className="text-sm text-slate-400">Buat data undangan digital klien baru</p>
        </div>
      </div>

      <div className="bg-[#0A0A0A] border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-300">Judul Undangan <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="title"
                placeholder="Romeo & Juliet"
                className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-300">URL Slug <span className="text-red-500">*</span></label>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-white/10 bg-white/5 text-slate-400 text-sm">
                  ruangweb.id/u/
                </span>
                <input 
                  type="text" 
                  name="slug"
                  placeholder="romeo-juliet"
                  className="flex-1 bg-[#111] border border-white/10 rounded-r-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-300">Nama Klien (Mempelai/Yang Punya Acara) <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="clientName"
                placeholder="Romeo Montague & Juliet Capulet"
                className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-300">Kategori Undangan <span className="text-red-500">*</span></label>
              <div className="relative">
                <select 
                  name="categoryId"
                  className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled selected>Pilih kategori...</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-300">Tanggal Acara</label>
              <input 
                type="datetime-local" 
                name="eventDate"
                className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-300">URL Demo / Tautan Eksternal</label>
              <input 
                type="url" 
                name="demoUrl"
                placeholder="https://..."
                className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
              />
            </div>
            
          </div>

          {/* Photo Upload Section */}
          <div className="pt-4 border-t border-white/5">
            <label className="block text-sm font-bold text-slate-300 mb-4">Foto Sampul Undangan (Opsional)</label>
            <div className="border-2 border-dashed border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center bg-white/[0.01] hover:bg-white/[0.02] hover:border-blue-500/50 transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Upload size={24} />
              </div>
              <p className="text-white font-medium mb-1">Pilih gambar sampul</p>
              <p className="text-slate-500 text-sm">SVG, PNG, JPG atau GIF (Maks. 2MB)</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex items-center justify-end gap-4">
            <Link href="/admin/undangan" className="px-6 py-3 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
              Batal
            </Link>
            <button 
              type="button" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25"
            >
              <Save size={18} />
              Simpan Undangan
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
