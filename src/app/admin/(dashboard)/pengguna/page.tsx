import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { Plus } from "lucide-react";

export default async function AdminPengguna() {
  const data = await db.select().from(users);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Pengelola Sistem</h1>
          <p className="text-sm text-slate-400">Kelola admin dan staff yang memiliki akses ke dashboard</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-lg">
          <Plus size={16} />
          Tambah Pengelola
        </button>
      </div>

      <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-[#111] border-b border-white/10 text-slate-400 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Nama Lengkap</th>
                <th className="px-6 py-4">Alamat Email</th>
                <th className="px-6 py-4">Role / Akses</th>
                <th className="px-6 py-4">Tgl Dibuat</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((user) => (
                <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs uppercase shrink-0">
                      {user.name.substring(0, 2)}
                    </div>
                    {user.name}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {user.role.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {new Date(user.createdAt).toLocaleDateString('id-ID', {
                      year: 'numeric', month: 'short', day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-400 hover:text-blue-300 font-medium mr-4">Edit</button>
                    <button className="text-red-400 hover:text-red-300 font-medium">Hapus</button>
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
