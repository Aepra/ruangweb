import { db } from "@/lib/db";
import { digitalInvitations, invitationCategories } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function AdminUndangan() {
  const data = await db
    .select({
      id: digitalInvitations.id,
      title: digitalInvitations.title,
      slug: digitalInvitations.slug,
      clientName: digitalInvitations.clientName,
      status: digitalInvitations.status,
      categoryName: invitationCategories.name,
    })
    .from(digitalInvitations)
    .leftJoin(invitationCategories, eq(digitalInvitations.categoryId, invitationCategories.id))
    .orderBy(desc(digitalInvitations.createdAt));

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Undangan Digital</h1>
          <p className="text-sm text-slate-400">Kelola semua undangan digital klien Anda</p>
        </div>
        <Link href="/admin/undangan/baru" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-lg">
          <Plus size={16} />
          Tambah Undangan
        </Link>
      </div>

      <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-[#111] border-b border-white/10 text-slate-400 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Nama / Judul</th>
                <th className="px-6 py-4">Klien</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">URL Slug</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-bold text-white">{item.title}</td>
                  <td className="px-6 py-4 text-slate-300">{item.clientName}</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold border border-blue-500/20">
                      {item.categoryName}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">{item.slug}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      item.status === 'published' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-400 hover:text-blue-300 font-medium mr-4">Edit</button>
                    <button className="text-red-400 hover:text-red-300 font-medium">Hapus</button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    Belum ada data undangan digital.
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
