'use client';

import { useState, useEffect, useRef } from 'react';
import { User, LayoutDashboard, LogOut, LogIn, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface SessionState {
  isLoggedIn: boolean;
  name?: string;
  loading: boolean;
}

export default function NavUserDropdown() {
  const [session, setSession] = useState<SessionState>({ isLoggedIn: false, loading: true });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/auth/check')
      .then((r) => r.json())
      .then((data) => setSession({ ...data, loading: false }))
      .catch(() => setSession({ isLoggedIn: false, loading: false }));
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    setSession({ isLoggedIn: false, loading: false });
    setIsOpen(false);
    window.location.reload();
  };

  if (session.loading) {
    return (
      <div className="ml-1 md:ml-2 w-8 h-8 rounded-lg bg-slate-100 animate-pulse" />
    );
  }

  return (
    <div className="relative ml-1 md:ml-2" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 p-1.5 md:p-2 rounded-lg transition-all ${
          session.isLoggedIn
            ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
            : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
        }`}
        title={session.isLoggedIn ? `Logged in as ${session.name}` : 'Admin Login'}
      >
        {session.isLoggedIn ? (
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-[10px] font-black shadow-sm">
            {session.name?.charAt(0).toUpperCase()}
          </div>
        ) : (
          <User size={18} />
        )}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} text-slate-400`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          {session.isLoggedIn ? (
            <>
              {/* User Info */}
              <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
                <p className="text-xs text-slate-500 font-medium">Masuk sebagai</p>
                <p className="text-sm font-bold text-slate-800 truncate">{session.name}</p>
              </div>
              {/* Menu Items */}
              <div className="p-1.5">
                <Link
                  href="/admin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  <LayoutDashboard size={16} className="text-blue-500" />
                  Dashboard Admin
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors w-full text-left"
                >
                  <LogOut size={16} className="text-red-400" />
                  Keluar
                </button>
              </div>
            </>
          ) : (
            <div className="p-1.5">
              <Link
                href="/admin/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <LogIn size={16} className="text-blue-500" />
                Login Admin
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
