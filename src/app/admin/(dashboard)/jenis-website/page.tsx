import { db } from "@/lib/db";
import { websiteTypes, serviceCategories } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Plus } from "lucide-react";

export default async function AdminJenisWebsite() {
  const data = await db
    .select({
      id: websiteTypes.id,
      name: websiteTypes.name,
      slug: websiteTypes.slug,
      categoryTitle: serviceCategories.title,
    })
    .from(websiteTypes)
    .leftJoin(serviceCategories, eq(websiteTypes.categoryId, serviceCategories.id));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Jenis Website</h1>
          <p className="text-sm text-slate-400">Kelola varian website untuk tiap kategori layanan</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-lg">
          <Plus size={16} />
          Tambah Jenis
        </button>
      </div>

      <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-[#111] border-b border-white/10 text-slate-400 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Nama Jenis Website</th>
                <th className="px-6 py-4">Kategori Layanan</th>
                <th className="px-6 py-4">URL Slug</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-500">{item.id}</td>
                  <td className="px-6 py-4 font-bold text-white">{item.name}</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold border border-blue-500/20">
                      {item.categoryTitle}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">{item.slug}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-400 hover:text-blue-300 font-medium mr-4">Edit</button>
                    <button className="text-red-400 hover:text-red-300 font-medium">Hapus</button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    Belum ada data jenis website.
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
