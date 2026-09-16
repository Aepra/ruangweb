"use client";

import { useEffect, useState } from "react";
import { trackVisitor } from "@/app/actions/visitor";
import { Users } from "lucide-react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    trackVisitor().then((res) => {
      setCount(res.count);
    });
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-300 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 shadow-inner">
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      <Users size={16} className="text-emerald-400" />
      <span>{count.toLocaleString('id-ID')} Pengunjung Unik</span>
    </div>
  );
}
