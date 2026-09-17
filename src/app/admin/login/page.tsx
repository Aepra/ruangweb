import LoginForm from "./LoginForm";
import Link from "next/link";
import { ArrowLeft, Code2 } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-blue-500/30">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>
        
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <Code2 size={32} />
          </div>
        </div>

        <h2 className="text-center text-3xl font-black text-white tracking-tight">
          Admin Dashboard
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400 font-medium">
          Silakan masuk untuk mengelola sistem RuangWeb.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-slate-900/50 backdrop-blur-xl py-8 px-6 shadow-2xl sm:rounded-3xl sm:px-10 border border-slate-800/80">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
