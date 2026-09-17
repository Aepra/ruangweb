'use client'

import { useState } from 'react';
import { updatePackageAction } from '@/app/actions/admin-services';
import { ChevronDown, ChevronUp, Save, CheckCircle2, Tag, Percent } from 'lucide-react';

export default function ServicesList({ services }: { services: any[] }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {services.map((service) => (
        <div key={service.id} className="bg-slate-900/50 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-slate-700/60 transition-all duration-200">
          {/* Service Header */}
          <button
            className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left"
            onClick={() => toggleExpand(service.id)}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Tag size={18} className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm md:text-base">{service.title}</h3>
                <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">{service.description}</p>
              </div>
            </div>
            <div className="ml-4 shrink-0 p-1.5 rounded-lg bg-slate-800/60 text-slate-400">
              {expandedId === service.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>

          {/* Package Editor */}
          {expandedId === service.id && (
            <div className="border-t border-slate-800/60 px-4 md:px-6 py-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Daftar Paket</p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {service.packages.map((pkg: any) => (
                  <PackageEditor key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PackageEditor({ pkg }: { pkg: any }) {
  const [basePrice, setBasePrice] = useState(String(pkg.basePrice));
  const [discountPercentage, setDiscountPercentage] = useState(String(pkg.discountPercentage));
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await updatePackageAction(pkg.id, Number(basePrice) || 0, Number(discountPercentage) || 0);
    setIsSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const numBase = Number(basePrice) || 0;
  const numDiscount = Math.min(100, Math.max(0, Number(discountPercentage) || 0));
  const currentPrice = numBase - (numBase * (numDiscount / 100));

  const packageColors: Record<number, string> = {
    0: 'border-blue-500/30 bg-blue-500/5',
    1: 'border-emerald-500/30 bg-emerald-500/5',
    2: 'border-amber-500/30 bg-amber-500/5',
  };
  const accentColors: Record<number, string> = {
    0: 'text-blue-400 bg-blue-500/10',
    1: 'text-emerald-400 bg-emerald-500/10',
    2: 'text-amber-400 bg-amber-500/10',
  };
  const idx = pkg.isCustomPrice ? 2 : (pkg.name?.toLowerCase().includes('starter') ? 0 : pkg.name?.toLowerCase().includes('professional') || pkg.name?.toLowerCase().includes('profesional') ? 1 : 0);

  return (
    <div className={`rounded-xl border p-4 flex flex-col gap-4 ${packageColors[idx] || 'border-slate-700/50 bg-slate-800/30'}`}>
      {/* Package Name */}
      <div className="flex items-center justify-between">
        <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${accentColors[idx] || 'text-slate-400 bg-slate-700/50'}`}>
          {pkg.name}
        </span>
        {numDiscount > 0 && !pkg.isCustomPrice && (
          <span className="text-xs font-black text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-full">
            -{numDiscount}%
          </span>
        )}
      </div>

      {pkg.isCustomPrice ? (
        <div className="flex-1 flex items-center justify-center py-4">
          <p className="text-slate-500 text-sm italic">Harga: Sesuai Kebutuhan</p>
        </div>
      ) : (
        <>
          {/* Inputs */}
          <div className="space-y-3">
            {/* Base Price */}
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Harga Asli (Rp)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold">Rp</span>
                <input
                  type="number"
                  value={basePrice}
                  onChange={(e) => setBasePrice(e.target.value)}
                  className="w-full bg-slate-950/60 border border-slate-700/60 text-white text-sm font-medium rounded-lg pl-10 pr-3 py-2.5 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-slate-600"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Discount */}
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Persentase Diskon</label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={discountPercentage}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || (Number(val) >= 0 && Number(val) <= 100)) {
                      setDiscountPercentage(val);
                    }
                  }}
                  onBlur={(e) => {
                    if (e.target.value === '') setDiscountPercentage('0');
                  }}
                  className="w-full bg-slate-950/60 border border-slate-700/60 text-white text-sm font-medium rounded-lg pl-3 pr-10 py-2.5 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-slate-600"
                  placeholder="0"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <Percent size={14} />
                </span>
              </div>
            </div>
          </div>

          {/* Price Preview */}
          <div className="bg-slate-950/50 border border-slate-700/40 rounded-lg p-3 text-center">
            {numDiscount > 0 && (
              <p className="text-slate-500 text-xs line-through mb-0.5">Rp {numBase.toLocaleString('id-ID')}</p>
            )}
            <p className="text-white font-black text-lg">Rp {currentPrice.toLocaleString('id-ID')}</p>
            {numDiscount > 0 && (
              <p className="text-emerald-400 text-xs font-semibold mt-0.5">Hemat Rp {(numBase - currentPrice).toLocaleString('id-ID')}</p>
            )}
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={isSaving || saved}
            className={`w-full flex justify-center items-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${
              saved
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30 disabled:opacity-60'
            }`}
          >
            {saved ? (
              <><CheckCircle2 size={16} /> Tersimpan!</>
            ) : isSaving ? (
              <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Menyimpan...</>
            ) : (
              <><Save size={16} /> Simpan Harga</>
            )}
          </button>
        </>
      )}
    </div>
  );
}
