import { servicesData, getIconComponent } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function LayananDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const Icon = getIconComponent(service.iconName);

  return (
    <main className="min-h-screen bg-slate-950 pb-24">
      {/* Header Section */}
      <div className="relative pt-32 pb-16 px-6 md:px-12 border-b border-slate-800/50 overflow-hidden">
        {/* Background glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-br ${service.color} blur-[120px] opacity-10 pointer-events-none`} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Kembali ke Kategori Utama
          </Link>
          
          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <div className={`w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-xl`}>
              {Icon && <Icon size={40} />}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <h2 className="text-2xl font-bold text-white mb-8">Pilih Jenis Website:</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {service.websiteTypes.map((type, index) => {
            const isUndangan = type.slug === 'website-undangan-digital' || type.name.includes('Undangan');
            
            return (
            <div 
              key={index} 
              className={`border rounded-3xl p-8 flex flex-col transition-all duration-300 relative overflow-hidden group
                ${isUndangan 
                  ? 'bg-[#FDFBF7] border-[#E8E1C8] shadow-[0_20px_50px_-12px_rgba(255,255,255,0.05)] text-slate-800 max-w-sm mx-auto aspect-[3/4] w-full' 
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700 h-full'
                }
              `}
              style={isUndangan ? {
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`
              } : {}}
            >
              {/* Cute aesthetic decorative elements for Undangan */}
              {isUndangan && (
                <>
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-pink-300/30 blur-3xl rounded-full" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-200/30 blur-3xl rounded-full" />
                </>
              )}

              <h3 className={`text-2xl font-bold mb-6 relative z-10 ${isUndangan ? 'text-slate-800 font-serif' : 'text-white'}`}>
                {type.name}
              </h3>
              
              {/* Quick Preview of Packages */}
              <div className="space-y-4 mb-8 flex-grow relative z-10">
                {['Starter', 'Professional', 'Custom'].map((pkgName) => {
                  const pkg = type.packages[pkgName as keyof typeof type.packages];
                  return (
                    <div key={pkgName} className="flex items-start gap-3">
                      {pkg.available ? (
                        <CheckCircle2 className={`${isUndangan ? 'text-pink-500' : 'text-emerald-400'} shrink-0 mt-0.5`} size={20} />
                      ) : (
                        <XCircle className={`${isUndangan ? 'text-slate-300' : 'text-slate-600/50'} shrink-0 mt-0.5`} size={20} />
                      )}
                      <div>
                        <span className={`font-semibold ${pkg.available ? (isUndangan ? 'text-slate-800' : 'text-slate-200') : (isUndangan ? 'text-slate-400' : 'text-slate-500')}`}>
                          Paket {pkgName}
                        </span>
                        {pkg.available && (
                          <p className={`text-sm mt-1 line-clamp-2 ${isUndangan ? 'text-slate-600' : 'text-slate-400'}`}>{pkg.description}</p>
                        )}
                        {!pkg.available && pkg.reasonNotAvailable && (
                          <p className={`text-sm mt-1 ${isUndangan ? 'text-slate-400' : 'text-slate-600'}`}>{pkg.reasonNotAvailable}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Link 
                href={`/layanan/${service.slug}/${type.slug}`}
                className={`mt-auto flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold transition-all duration-300 relative z-10 shadow-lg group-hover:-translate-y-1
                  ${isUndangan 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-400 hover:to-rose-300 text-white shadow-pink-500/25 hover:shadow-pink-500/40' 
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                  }
                `}
              >
                {isUndangan ? 'Lihat Paket' : 'Lihat Penjelasan Detail Paket'}
                <ArrowRight size={18} className={isUndangan ? "group-hover:translate-x-1 transition-transform" : ""} />
              </Link>
            </div>
          )})}
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
