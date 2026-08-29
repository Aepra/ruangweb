import { db } from "@/lib/db";
import { invitationCategories } from "@/db/schema";
import { Plus } from "lucide-react";

export default async function AdminUndanganKategori() {
  const categories = await db.select().from(invitationCategories);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Kategori Undangan</h1>
          <p className="text-sm text-slate-400">Kelola kategori untuk undangan digital (contoh: Pernikahan, Ulang Tahun)</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-lg">
          <Plus size={16} />
          Tambah Kategori
        </button>
      </div>

      <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-[#111] border-b border-white/10 text-slate-400 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4 w-24">ID</th>
                <th className="px-6 py-4">Nama Kategori</th>
                <th className="px-6 py-4">URL Slug</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-500">{cat.id}</td>
                  <td className="px-6 py-4 font-bold text-white">{cat.name}</td>
                  <td className="px-6 py-4 font-mono text-xs">{cat.slug}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-400 hover:text-blue-300 font-medium mr-4">Edit</button>
                    <button className="text-red-400 hover:text-red-300 font-medium">Hapus</button>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                    Belum ada data kategori undangan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
