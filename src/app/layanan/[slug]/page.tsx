import { getIconComponent } from "@/data/services";
import { getDbServices } from "@/data/db-services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Minus } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const servicesData = await getDbServices();
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function LayananDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const servicesData = await getDbServices();
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const Icon = getIconComponent(service.iconName);
  const waLink = "https://wa.me/6285796508390?text=";

  // Function to map service colors to light theme variants
  const getVibrantColors = (colorString: string) => {
    if (colorString.includes('emerald') || colorString.includes('teal')) return 'bg-emerald-100 text-emerald-600 border-emerald-200';
    if (colorString.includes('blue') || colorString.includes('indigo')) return 'bg-blue-100 text-blue-600 border-blue-200';
    if (colorString.includes('amber') || colorString.includes('orange')) return 'bg-amber-100 text-amber-600 border-amber-200';
    if (colorString.includes('pink') || colorString.includes('rose')) return 'bg-rose-100 text-rose-600 border-rose-200';
    if (colorString.includes('purple')) return 'bg-purple-100 text-purple-600 border-purple-200';
    return 'bg-blue-100 text-blue-600 border-blue-200';
  };
  const vibrantTheme = getVibrantColors(service.color);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-24 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />

      {/* Header Section */}
      <div className="relative pt-12 pb-16 px-6 md:px-12 overflow-hidden bg-white border-b border-slate-200/60 shadow-sm">
        {/* Background Decorative Element */}
        <div className={`absolute top-0 right-0 w-96 h-96 ${vibrantTheme.split(' ')[0]} rounded-full blur-[100px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3`} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={16} />
            Kembali ke Daftar Layanan
          </Link>
          
          <div className="flex flex-col md:flex-row gap-6 md:items-center mb-12">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
                {service.longDescription || service.description}
              </p>
            </div>
          </div>

          {/* Rincian Paket (Textual) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {service.packages.map((pkg, idx) => {
              // Highlight colors based on index
              const cardColors = [
                "border-blue-200 bg-white hover:border-blue-400 hover:shadow-blue-500/10", // Starter
                "border-emerald-200 bg-emerald-50/30 hover:border-emerald-400 hover:shadow-emerald-500/10 transform md:-translate-y-2 relative shadow-md", // Pro
                "border-amber-200 bg-white hover:border-amber-400 hover:shadow-amber-500/10" // Custom
              ];
              const priceColors = [
                "text-blue-600",
                "text-emerald-600",
                "text-amber-600"
              ];
              const dotColors = [
                "text-blue-400",
                "text-emerald-400",
                "text-amber-400"
              ];

              return (
                <div key={idx} className={`border-2 rounded-3xl p-8 flex flex-col h-full shadow-sm transition-all duration-300 ${cardColors[idx]}`}>
                  {idx === 1 && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      Rekomendasi
                    </div>
                  )}
                  <div className="flex flex-col mb-6 border-b border-slate-100 pb-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-2xl font-extrabold text-slate-800">Paket {pkg.name}</h3>
                      {pkg.discount && (
                        <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-red-500 text-white shadow-sm animate-pulse">
                          HEMAT {pkg.discount}%
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col mb-3">
                      {pkg.originalPrice && (
                        <p className="text-sm text-slate-400 line-through mb-1">{pkg.originalPrice}</p>
                      )}
                      <p className={`text-2xl font-black ${priceColors[idx]}`}>{pkg.price}</p>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{pkg.desc}</p>
                  </div>
                  
                  <div className="flex-grow space-y-6">
                    {((pkg.fullDetails as any[]) || []).map((detailGroup: any, gIdx: number) => (
                      <div key={gIdx}>
                        {detailGroup.title && (
                          <h4 className="text-slate-800 font-bold text-sm mb-3">
                            {detailGroup.title}
                          </h4>
                        )}
                        <ul className="space-y-2.5">
                          {(detailGroup.items || []).map((item: any, iIdx: number) => (
                            <li key={iIdx} className="flex items-start gap-2.5">
                              <span className={`${dotColors[idx]} mt-0.5 shrink-0`}><Check size={16} strokeWidth={3} /></span>
                              <span className="text-slate-600 text-sm leading-relaxed font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Feature Comparison Table Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-24">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-rose-500 uppercase tracking-wider mb-3">Detail & Spesifikasi</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Tabel Perbandingan Fitur</h2>
          <p className="text-slate-600 text-lg">Bandingkan rincian fitur antar paket untuk menentukan yang paling sesuai dengan kebutuhan Anda.</p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50">
          
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-slate-50 border-b-2 border-slate-200 text-slate-800 font-bold p-3 md:p-6">
            <div className="col-span-1 text-[10px] md:text-lg flex items-center leading-tight">Fitur Utama</div>
            <div className="col-span-1 text-center px-1">
              <div className="text-xs md:text-xl mb-0.5 md:mb-1 text-blue-700 font-black">Starter</div>
              <div className="text-[9px] md:text-sm font-bold text-slate-500">{service.packages[0].price}</div>
            </div>
            <div className="col-span-1 text-center px-1 border-x border-slate-200 bg-emerald-50/50">
              <div className="text-xs md:text-xl text-emerald-700 mb-0.5 md:mb-1 font-black md:hidden">Pro</div>
              <div className="hidden md:block text-xl text-emerald-700 mb-1 font-black">Profesional</div>
              <div className="text-[9px] md:text-sm font-bold text-slate-500">{service.packages[1].price}</div>
            </div>
            <div className="col-span-1 text-center px-1">
              <div className="text-xs md:text-xl mb-0.5 md:mb-1 text-amber-700 font-black">Custom</div>
              <div className="text-[9px] md:text-sm font-bold text-slate-500">{service.packages[2].price}</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {service.featureMatrix.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-4 p-2.5 md:p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                <div className="col-span-1 font-bold text-slate-700 flex items-center text-[10px] md:text-base pr-1 leading-tight">
                  {row.feature}
                </div>
                
                {/* Starter */}
                <div className="col-span-1 flex items-center justify-center text-slate-600 px-0.5">
                  {typeof row.starter === "boolean" ? (
                    row.starter ? <Check className="text-blue-500 w-4 h-4 md:w-6 md:h-6" strokeWidth={3} /> : <Minus className="text-slate-300 w-4 h-4 md:w-6 md:h-6" />
                  ) : (
                    <span className="text-[9px] md:text-sm font-bold text-blue-600 text-center leading-tight break-words">{row.starter}</span>
                  )}
                </div>
                
                {/* Profesional */}
                <div className="col-span-1 flex items-center justify-center text-slate-600 border-x border-slate-100 bg-emerald-50/20 px-0.5">
                  {typeof row.professional === "boolean" ? (
                    row.professional ? <Check className="text-emerald-500 w-4 h-4 md:w-6 md:h-6" strokeWidth={3} /> : <Minus className="text-slate-300 w-4 h-4 md:w-6 md:h-6" />
                  ) : (
                    <span className="text-[9px] md:text-sm font-bold text-emerald-600 text-center leading-tight break-words">{row.professional}</span>
                  )}
                </div>
                
                {/* Custom */}
                <div className="col-span-1 flex items-center justify-center text-slate-600 px-0.5">
                  {typeof row.custom === "boolean" ? (
                    row.custom ? <Check className="text-amber-500 w-4 h-4 md:w-6 md:h-6" strokeWidth={3} /> : <Minus className="text-slate-300 w-4 h-4 md:w-6 md:h-6" />
                  ) : (
                    <span className="text-[9px] md:text-sm font-bold text-amber-600 text-center leading-tight break-words">{row.custom}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="grid grid-cols-4 p-3 md:p-6 bg-slate-50 border-t-2 border-slate-200">
            <div className="col-span-1"></div>
            <div className="col-span-1 flex justify-center px-1">
              <a 
                href={`${waLink}Halo%20Admin%20RuangWeb,%20saya%20mau%20pesan%20layanan%20${encodeURIComponent(service.title)}%20paket%20Starter.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center text-center px-1 md:px-4 py-2 md:py-3.5 rounded-lg md:rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold transition-colors border border-blue-200 shadow-sm text-[10px] md:text-base"
              >
                <span className="md:hidden">Pilih</span>
                <span className="hidden md:inline">Pilih Starter</span>
              </a>
            </div>
            <div className="col-span-1 flex justify-center px-1">
              <a 
                href={`${waLink}Halo%20Admin%20RuangWeb,%20saya%20mau%20pesan%20layanan%20${encodeURIComponent(service.title)}%20paket%20Profesional.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center text-center px-1 md:px-4 py-2 md:py-3.5 rounded-lg md:rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-md shadow-emerald-500/30 transition-all hover:-translate-y-1 text-[10px] md:text-base"
              >
                <span className="md:hidden">Pilih</span>
                <span className="hidden md:inline">Pilih Profesional</span>
              </a>
            </div>
            <div className="col-span-1 flex justify-center px-1">
              <a 
                href={`${waLink}Halo%20Admin%20RuangWeb,%20saya%20mau%20pesan%20layanan%20${encodeURIComponent(service.title)}%20paket%20Custom.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center text-center px-1 md:px-4 py-2 md:py-3.5 rounded-lg md:rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-700 font-bold transition-colors border border-amber-200 shadow-sm text-[10px] md:text-base"
              >
                <span className="md:hidden">Pilih</span>
                <span className="hidden md:inline">Pilih Custom</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </main>
  );
}
