'use client';

import { useActionState, useEffect } from 'react';
import { loginAction } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';
import { Lock, Mail, AlertCircle, ArrowRight } from 'lucide-react';

const initialState = { error: '', success: false };

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.push('/admin');
    }
  }, [state.success, router]);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 selection:bg-blue-500/30">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.3)] mx-auto mb-6 text-2xl">
            R
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">RuangWeb Admin</h1>
          <p className="text-slate-400">Masuk untuk mengelola layanan & klien</p>
        </div>

        <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

          {state.error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
              <AlertCircle size={20} className="text-red-500 shrink-0" />
              <p className="text-sm text-red-400 font-medium">{state.error}</p>
            </div>
          )}

          <form action={formAction} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="email" 
                  name="email"
                  defaultValue="superadmin@ruangweb.id"
                  placeholder="admin@ruangweb.id"
                  className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="password" 
                  name="password"
                  defaultValue="Password123!"
                  placeholder="••••••••"
                  className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isPending}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-bold rounded-xl py-3.5 mt-4 transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              {isPending ? 'Membuka Brankas...' : 'Masuk Dashboard'}
              {!isPending && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
