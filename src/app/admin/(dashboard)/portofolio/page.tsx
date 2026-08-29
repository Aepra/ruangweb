import { db } from "@/lib/db";
import { projects, websiteTypes } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import Link from "next/link";
import { Plus, FolderKanban, CheckCircle2, Globe, Calendar } from "lucide-react";
import Image from "next/image";

export default async function PortfolioPage() {
  const allProjects = await db.select({
    id: projects.id,
    title: projects.title,
    clientName: projects.clientName,
    websiteUrl: projects.websiteUrl,
    coverImage: projects.coverImage,
    isFeatured: projects.isFeatured,
    completionDate: projects.completionDate,
    categoryName: websiteTypes.name,
  })
  .from(projects)
  .leftJoin(websiteTypes, eq(projects.websiteTypeId, websiteTypes.id))
  .orderBy(desc(projects.createdAt));

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            <FolderKanban className="text-blue-500" />
            Portofolio Proyek
          </h1>
          <p className="text-slate-400 mt-2">Kelola daftar etalase proyek yang pernah Anda kerjakan.</p>
        </div>
        <Link 
          href="/admin/portofolio/baru"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20"
        >
          <Plus size={18} />
          Tambah Proyek
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.length === 0 ? (
          <div className="col-span-full py-16 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-white/5">
            <FolderKanban size={48} className="text-slate-600 mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Belum ada portofolio</h3>
            <p className="text-slate-400 mb-6">Mulai tambahkan hasil karya terbaik Anda ke dalam etalase.</p>
            <Link 
              href="/admin/portofolio/baru"
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium"
            >
              Buat Portofolio Pertama
            </Link>
          </div>
        ) : (
          allProjects.map((project) => (
            <div key={project.id} className="group flex flex-col bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all shadow-lg">
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.isFeatured && (
                  <div className="absolute top-3 right-3 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-md">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-lg text-white leading-tight">{project.title}</h3>
                </div>
                
                <div className="space-y-2 mb-6">
                  {project.clientName && (
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 size={14} className="text-blue-500" />
                      Klien: <span className="text-slate-300">{project.clientName}</span>
                    </div>
                  )}
                  {project.categoryName && (
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <FolderKanban size={14} className="text-purple-500" />
                      Kategori: <span className="text-slate-300">{project.categoryName}</span>
                    </div>
                  )}
                  {project.completionDate && (
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar size={14} className="text-emerald-500" />
                      Selesai: <span className="text-slate-300">{new Date(project.completionDate).toLocaleDateString('id-ID')}</span>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                  {project.websiteUrl ? (
                    <a 
                      href={project.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Globe size={16} />
                      Kunjungi Web
                    </a>
                  ) : (
                    <span className="text-sm text-slate-500 italic">Offline</span>
                  )}
                  
                  <Link 
                    href={`/admin/portofolio/${project.id}/edit`}
                    className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Edit Detail
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
