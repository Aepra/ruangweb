import { servicesData, getIconComponent } from "@/data/services";
import { packageDetails } from "@/data/packageDetails";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, ChevronRight, Info, Users, ShieldAlert, PlusCircle } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
    websiteSlug: string;
  }>;
}

export function generateStaticParams() {
  const params: { slug: string; websiteSlug: string }[] = [];
  
  servicesData.forEach((category) => {
    category.websiteTypes.forEach((website) => {
      params.push({
        slug: category.slug,
        websiteSlug: website.slug,
      });
    });
  });

  return params;
}

export default async function WebsiteDetail({ params }: PageProps) {
  const resolvedParams = await params;
  
  const category = servicesData.find((s) => s.slug === resolvedParams.slug);
  if (!category) notFound();

  const websiteType = category.websiteTypes.find((w) => w.slug === resolvedParams.websiteSlug);
  if (!websiteType) notFound();

  const Icon = getIconComponent(category.iconName);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* Full Width Header */}
      <div className="bg-[#0f172a] border-b border-white/10 pt-24 pb-8 px-6 lg:px-12">
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
          <ChevronRight size={14} />
          <Link href={`/layanan/${category.slug}`} className="hover:text-white transition-colors">{category.title}</Link>
          <ChevronRight size={14} />
          <span className="text-blue-400">{websiteType.name}</span>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-xl`}>
              {Icon && <Icon size={32} />}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {websiteType.name}
              </h1>
              <p className="text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
                Bandingkan spesifikasi fitur dan pilih paket yang paling sesuai dengan skala dan kebutuhan operasional Anda.
              </p>
            </div>
          </div>
          
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-white text-slate-900 hover:bg-slate-200 rounded-xl text-sm font-bold transition-colors shadow-lg flex items-center justify-center"
          >
            Konsultasi Kustom via WhatsApp
          </a>
        </div>
      </div>

      {/* Full Width Content (3 Columns side-by-side) */}
      <div className="w-full px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full items-stretch">
          
          {(['Starter', 'Professional', 'Custom'] as const).map((pkgName) => {
            const isAvailable = websiteType.packages[pkgName].available;
            const pkgSpecificData = websiteType.packages[pkgName];
            const pkgGenericData = packageDetails[pkgName];

            const themeColor = pkgName === 'Starter' ? 'emerald' : pkgName === 'Professional' ? 'blue' : 'purple';
            const borderGlow = pkgName === 'Professional' ? 'border-blue-500/30 shadow-[0_0_40px_rgba(37,99,235,0.1)]' : 'border-white/10';

            if (!isAvailable) {
              return (
                <div key={pkgName} className="bg-[#131B2B]/50 border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center opacity-70 h-full min-h-[400px]">
                  <XCircle className="text-slate-600 mb-4" size={48} />
                  <h2 className="text-2xl font-bold text-slate-500 mb-2">Paket {pkgName}</h2>
                  <p className="text-sm text-slate-500 max-w-xs">{pkgSpecificData.reasonNotAvailable || "Tidak tersedia untuk layanan ini."}</p>
                </div>
              );
            }

            return (
              <div key={pkgName} className={`bg-[#131B2B] border ${borderGlow} rounded-3xl overflow-hidden flex flex-col relative`}>
                
                {/* Popular / Advanced Badges */}
                {pkgName === 'Professional' && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-[10px] font-bold px-4 py-1.5 rounded-bl-xl text-white tracking-widest uppercase shadow-lg">
                    Paling Direkomendasikan
                  </div>
                )}
                {pkgName === 'Custom' && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-[10px] font-bold px-4 py-1.5 rounded-bl-xl text-white tracking-widest uppercase shadow-lg">
                    Sistem Kompleks
                  </div>
                )}

                {/* Card Header */}
                <div className={`p-8 pb-6 border-b border-white/5 bg-gradient-to-b from-${themeColor}-500/5 to-transparent`}>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className={`text-${themeColor}-400 shrink-0`} size={28} />
                    <h2 className="text-2xl font-extrabold text-white leading-tight">{pkgGenericData.title.split('—')[0].trim()}</h2>
                  </div>
                  
                  {/* Harga */}
                  <div className="mb-6">
                    <span className="text-slate-400 text-sm mr-2">Mulai</span>
                    <span className="text-3xl font-extrabold text-white">
                      {(pkgGenericData as any).price.replace('Mulai ', '')}
                    </span>
                  </div>
                  
                  <div className="bg-[#0B0F19] rounded-xl p-4 border border-white/5 shadow-inner">
                    <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <Info size={14} className={`text-${themeColor}-400`} />
                      Fokus Utama Layanan
                    </div>
                    <p className="text-sm text-white leading-relaxed">{pkgSpecificData.description}</p>
                  </div>
                </div>

                {/* Card Body (Scrollable if needed, or flex grow) */}
                <div className="p-8 flex-grow flex flex-col space-y-8">
                  
                  {/* Gambaran Umum */}
                  <div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      <strong className="text-slate-200">Gambaran:</strong> {pkgGenericData.gambaran}
                    </p>
                  </div>

                  <hr className="border-white/5" />

                  {/* Yang didapatkan */}
                  <div>
                    <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wide">
                      <div className={`w-2 h-2 rounded-sm bg-${themeColor}-500`} />
                      Yang Didapatkan Client
                    </h4>
                    <ul className="space-y-3">
                      {pkgGenericData.didapatkan.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                          <span className={`text-${themeColor}-500 mt-1 shrink-0`}>✓</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="border-white/5" />

                  {/* Pengunjung */}
                  <div>
                    <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wide">
                      <Users size={16} className={`text-${themeColor}-400`} />
                      Hak Akses Pengunjung
                    </h4>
                    <ul className="space-y-3">
                      {pkgGenericData.pengunjung.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 shrink-0`} />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Add-on Opsional */}
                    {(pkgGenericData as any).addonOpsional && (
                      <div className="mt-5 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                        <p className="text-[11px] font-bold text-amber-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <PlusCircle size={14} /> Opsi Add-on Khusus
                        </p>
                        <ul className="space-y-2.5">
                          {(pkgGenericData as any).addonOpsional.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-amber-100">
                              <CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <hr className="border-white/5" />

                  {/* Admin */}
                  <div>
                    <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wide">
                      <ShieldAlert size={16} className={`text-${themeColor}-400`} />
                      Kapabilitas Admin
                    </h4>
                    <ul className="space-y-3">
                      {pkgGenericData.admin.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 shrink-0`} />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Role Admin Khusus */}
                    {pkgGenericData.contohAdmin && (
                      <div className="mt-4 bg-[#0B0F19] rounded-xl p-4 border border-white/5">
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3">Contoh Pembagian Peran</p>
                        <div className="space-y-3">
                          {pkgGenericData.contohAdmin.map((item, idx) => {
                            const [role, desc] = item.split(': ');
                            return (
                              <div key={idx}>
                                <span className="block text-xs font-bold text-slate-200 mb-0.5">{role}</span>
                                <span className="block text-xs text-slate-400 leading-relaxed">{desc}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                {/* Card Footer */}
                <div className="p-8 pt-6 border-t border-white/5 bg-slate-900/30 mt-auto">
                  <div className="mb-4">
                    <p className="text-xs text-slate-500 italic">"{pkgGenericData.contoh}"</p>
                  </div>
                  <a 
                    href={`https://wa.me/1234567890?text=Halo, saya tertarik dengan paket ${pkgName} untuk pembuatan ${websiteType.name}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`block w-full py-4 rounded-xl text-sm font-bold text-center text-white transition-all hover:-translate-y-1 ${
                      pkgName === 'Starter' ? 'bg-emerald-600 hover:bg-emerald-500 shadow-[0_10px_20px_-10px_rgba(5,150,105,0.5)]' : 
                      pkgName === 'Professional' ? 'bg-blue-600 hover:bg-blue-500 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)]' : 
                      'bg-purple-600 hover:bg-purple-500 shadow-[0_10px_20px_-10px_rgba(147,51,234,0.5)]'
                    }`}
                  >
                    Pilih Paket {pkgName}
                  </a>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </main>
  );
}
