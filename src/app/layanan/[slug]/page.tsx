import { servicesData, getIconComponent } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

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
          {service.websiteTypes.map((type, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col h-full hover:border-slate-700 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-6">
                {type.name}
              </h3>
              
              {/* Quick Preview of Packages */}
              <div className="space-y-4 mb-8 flex-grow">
                {['Starter', 'Professional', 'Custom'].map((pkgName) => {
                  const pkg = type.packages[pkgName as keyof typeof type.packages];
                  return (
                    <div key={pkgName} className="flex items-start gap-3">
                      {pkg.available ? (
                        <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                      ) : (
                        <XCircle className="text-slate-600 shrink-0 mt-0.5" size={20} />
                      )}
                      <div>
                        <span className={`font-semibold ${pkg.available ? 'text-slate-200' : 'text-slate-500'}`}>
                          Paket {pkgName}
                        </span>
                        {pkg.available && (
                          <p className="text-sm text-slate-400 mt-1 line-clamp-2">{pkg.description}</p>
                        )}
                        {!pkg.available && pkg.reasonNotAvailable && (
                          <p className="text-sm text-slate-600 mt-1">{pkg.reasonNotAvailable}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Link 
                href={`/layanan/${service.slug}/${type.slug}`}
                className="mt-auto flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
              >
                Lihat Penjelasan Detail Paket
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
