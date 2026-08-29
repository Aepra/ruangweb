import { db } from "@/lib/db";
import { serviceCategories, websiteTypes, users } from "@/db/schema";
import { count } from "drizzle-orm";
import { Users, Layers, LayoutTemplate, Activity } from "lucide-react";

export default async function AdminOverview() {
  const [categoriesCount] = await db.select({ value: count() }).from(serviceCategories);
  const [websitesCount] = await db.select({ value: count() }).from(websiteTypes);
  const [usersCount] = await db.select({ value: count() }).from(users);

  const stats = [
    { title: "Kategori Layanan", value: categoriesCount.value, icon: Layers, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "Varian Website", value: websitesCount.value, icon: LayoutTemplate, color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { title: "Pengelola", value: usersCount.value, icon: Users, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { title: "Sesi Aktif", value: "1", icon: Activity, color: "text-amber-500", bg: "bg-amber-500/10" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-[#111] border border-white/5 p-6 rounded-2xl flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                <Icon className={stat.color} size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
