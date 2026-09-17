import { db } from '@/lib/db';
import ServicesList from './ServicesList';

export default async function AdminServicesPage() {
  const allServices = await db.query.services.findMany({
    with: {
      packages: true,
    }
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Layanan & Paket</h1>
        <p className="text-slate-500 text-sm mt-1">
          Klik layanan untuk mengatur harga dan diskon. Perubahan akan langsung tampil di halaman publik.
        </p>
      </div>

      <ServicesList services={allServices} />
    </div>
  );
}
