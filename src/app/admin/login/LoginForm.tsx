'use client'

import { useActionState } from 'react';
import { loginAction } from '@/app/actions/admin-auth';
import { LogIn, KeyRound, User } from 'lucide-react';

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-1.5">
          Username
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-slate-500" />
          </div>
          <input 
            type="text" 
            name="username" 
            id="username" 
            required 
            className="block w-full pl-12 pr-4 py-3 border border-slate-700/60 rounded-xl leading-5 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all" 
            placeholder="Masukkan username" 
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1.5">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <KeyRound className="h-5 w-5 text-slate-500" />
          </div>
          <input 
            type="password" 
            name="password" 
            id="password" 
            required 
            className="block w-full pl-12 pr-4 py-3 border border-slate-700/60 rounded-xl leading-5 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all" 
            placeholder="Masukkan password" 
          />
        </div>
      </div>
      
      {state?.error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
          <p className="text-red-400 text-sm font-medium text-center">{state.error}</p>
        </div>
      )}

      <button 
        type="submit" 
        disabled={isPending}
        className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-900/20 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-6"
      >
        <LogIn size={18} />
        {isPending ? 'Memproses...' : 'Masuk Sekarang'}
      </button>
    </form>
  );
}
