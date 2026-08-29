import { db } from "@/lib/db";
import { websitePackages, websiteTypes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Plus, CheckCircle2, XCircle } from "lucide-react";

export default async function AdminPaketWebsite() {
  const data = await db
    .select({
      id: websitePackages.id,
      packageType: websitePackages.packageType,
      isAvailable: websitePackages.isAvailable,
      websiteTypeName: websiteTypes.name,
      reasonNotAvailable: websitePackages.reasonNotAvailable,
    })
    .from(websitePackages)
    .leftJoin(websiteTypes, eq(websitePackages.websiteTypeId, websiteTypes.id));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Konfigurasi Paket</h1>
          <p className="text-sm text-slate-400">Kelola ketersediaan paket (Starter/Pro/Custom) tiap jenis website</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-lg">
          <Plus size={16} />
          Tambah Konfigurasi
        </button>
      </div>

      <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-[#111] border-b border-white/10 text-slate-400 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Jenis Website</th>
                <th className="px-6 py-4">Paket</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Keterangan (Bila Tdk Tersedia)</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-500">{item.id}</td>
                  <td className="px-6 py-4 font-bold text-white">{item.websiteTypeName}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      item.packageType === 'Starter' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      item.packageType === 'Professional' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' :
                      'bg-purple-500/10 text-purple-400 border-purple-500/20'
                    }`}>
                      {item.packageType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {item.isAvailable ? (
                      <span className="flex items-center gap-1.5 text-emerald-500 font-medium text-xs">
                        <CheckCircle2 size={16} /> Tersedia
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-red-500 font-medium text-xs">
                        <XCircle size={16} /> Tidak
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400 max-w-xs truncate">
                    {item.reasonNotAvailable || '-'}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-400 hover:text-blue-300 font-medium mr-4">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
