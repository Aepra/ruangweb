import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SidebarNav } from "@/components/ui/dashboard-sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get("admin_token")?.value;
  if (!token) return redirect("/admin/login");

  const user = await verifyToken(token) as any;
  if (!user) return redirect("/admin/login");

  return (
    <div className="flex h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* Sidebar */}
      <div className="hidden md:block h-full shrink-0">
        <SidebarNav activeWorkspace="RuangWeb Pusat" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        
        {/* Topbar */}
        <header className="h-14 border-b border-white/5 bg-[#080808]/80 backdrop-blur-md flex items-center justify-between px-6 shrink-0">
          <div className="md:hidden font-bold text-white">RW Admin</div>
          <div className="hidden md:flex flex-1" />
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-white capitalize">{user.name}</p>
              <p className="text-xs text-slate-500">{user.email}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold uppercase text-xs">
              {user.name.substring(0,2)}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>

      </div>

    </div>
  );
}
