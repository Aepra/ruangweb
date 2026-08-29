'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  LogOut,
  ChevronDown,
  ChevronRight,
  Package,
  Users,
  FileText,
  Globe
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { logoutAction } from '@/app/actions/auth';

export type NavItemData = {
  id: string;
  title: string;
  icon: React.ElementType;
  path?: string;
  badge?: number | string;
  shortcut?: string;
  children?: NavItemData[];
};

export type NavGroupData = {
  heading?: string;
  items: NavItemData[];
};

const adminNavGroups: NavGroupData[] = [
  {
    items: [
      { id: 'overview', title: 'Overview', icon: LayoutDashboard, path: '/admin' },
    ]
  },
  {
    heading: 'Layanan',
    items: [
      { id: 'kategori', title: 'Kategori Layanan', icon: Package, path: '/admin/layanan' },
      { id: 'jenis', title: 'Jenis Website', icon: LayoutDashboard, path: '/admin/jenis-website' },
      { id: 'paket', title: 'Konfigurasi Paket', icon: Settings, path: '/admin/paket-website' },
    ]
  },
  {
    heading: 'Etalase',
    items: [
      { 
        id: 'portofolio', 
        title: 'Portofolio Proyek', 
        icon: FileText, 
        children: [
          { id: 'portofolio-semua', title: 'Semua Proyek', icon: LayoutDashboard, path: '/admin/portofolio' },
          { id: 'portofolio-baru', title: 'Tambah Baru', icon: FileText, path: '/admin/portofolio/baru' },
        ]
      },
    ]
  },
  {
    heading: 'Sistem',
    items: [
      { id: 'pengguna', title: 'Pengguna', icon: Users, path: '/admin/pengguna' },
      { id: 'sop', title: 'SOP & Arsitektur', icon: FileText, path: '/admin/arsitektur' },
    ]
  }
];

const bottomItems: NavItemData[] = [
  { id: 'home_web', title: 'Kembali ke Website', icon: Globe, path: '/' },
  { id: 'logout', title: 'Log out', icon: LogOut },
];

function WorkspaceSwitcher({ activeWorkspace }: { activeWorkspace: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const current = activeWorkspace;

  return (
    <div className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-2 py-2 mb-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors select-none group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[6px] bg-blue-600 text-white flex items-center justify-center font-semibold text-[13px] shadow-sm">
            {current.charAt(0)}
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-[13px] font-medium leading-none mb-1 text-white truncate max-w-[120px]">{current}</span>
            <span className="text-[11px] text-slate-400 leading-none">RuangWeb Workspace</span>
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors shrink-0" strokeWidth={1.5} />
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-[52px] left-0 w-full bg-[#111] border border-white/10 rounded-lg shadow-xl z-50 py-1 flex flex-col gap-0.5 animate-in fade-in zoom-in-95 duration-100">
            <div 
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 mx-1 text-[13px] rounded-md cursor-pointer transition-colors bg-blue-500/10 text-blue-400 font-medium`}
            >
              {current}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function NavItem({ 
  item, 
  currentPath,
  level = 0
}: { 
  item: NavItemData; 
  currentPath: string; 
  level?: number;
}) {
  const router = useRouter();
  const isActive = item.path === currentPath || (item.path !== '/admin' && item.path && currentPath.startsWith(item.path));
  const hasChildren = !!item.children;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = async () => {
    if (item.id === 'logout') {
      await logoutAction();
      return;
    }
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div 
        className={`group flex items-center justify-between px-2.5 py-[7px] rounded-[6px] cursor-pointer transition-all duration-200 select-none
          ${isActive 
            ? 'bg-white/10 text-white font-medium' 
            : 'text-slate-400 hover:bg-white/5 hover:text-white'
          }
        `}
        style={{ paddingLeft: `${level * 12 + 10}px` }}
        onClick={handleClick}
      >
        <div className="flex items-center gap-2.5">
          <item.icon 
            className={`w-[16px] h-[16px] transition-colors
              ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}
            `} 
            strokeWidth={1.5} 
          />
          <span className="text-[13px] tracking-wide truncate">
            {item.title}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {item.shortcut && (
             <kbd className="hidden group-hover:inline-flex items-center justify-center h-5 px-1.5 text-[10px] font-medium font-mono text-slate-500 bg-black/50 border border-white/10 rounded-[4px] shadow-xs">
               {item.shortcut}
             </kbd>
          )}
          {item.badge && (
            <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[10px] font-medium rounded-full bg-blue-500/10 text-blue-400">
              {item.badge}
            </span>
          )}
          {hasChildren && (
            <ChevronRight 
              className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
              strokeWidth={2}
            />
          )}
        </div>
      </div>

      {hasChildren && (
        <div 
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden min-h-0 relative flex flex-col gap-0.5 mt-0.5">
            <div 
              className="absolute top-0 bottom-0 border-l border-white/10"
              style={{ left: `${level * 12 + 17.5}px` }}
            />
            {item.children!.map(child => (
              <NavItem 
                key={child.id} 
                item={child} 
                currentPath={currentPath}
                level={level + 1} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SidebarNav({ 
  className = '',
  activeWorkspace = 'RuangWeb',
}: { 
  className?: string,
  activeWorkspace?: string,
}) {
  const currentPath = usePathname();

  return (
    <div className={`flex flex-col w-[260px] h-full bg-[#080808] border-r border-white/5 p-3 font-sans text-slate-300 ${className}`}>
      <WorkspaceSwitcher activeWorkspace={activeWorkspace} />

      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col gap-4 mt-2">
        {adminNavGroups.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-0.5">
            {group.heading && (
              <span className="px-2.5 mb-1 text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                {group.heading}
              </span>
            )}
            {group.items.map(item => (
              <NavItem 
                key={item.id} 
                item={item} 
                currentPath={currentPath}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-0.5">
        {bottomItems.map(item => (
          <NavItem 
            key={item.id} 
            item={item} 
            currentPath={currentPath} 
          />
        ))}
      </div>
    </div>
  );
}
