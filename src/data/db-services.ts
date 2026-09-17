import { db } from '@/lib/db';

export async function getDbServices() {
  const allServices = await db.query.services.findMany({
    with: {
      packages: {
        orderBy: (packages, { asc }) => [asc(packages.id)],
      },
      featureMatrix: {
        orderBy: (featureMatrix, { asc }) => [asc(featureMatrix.id)],
      },
    },
    orderBy: (services, { asc }) => [asc(services.id)],
  });

  // Map to the structure expected by the frontend
  return allServices.map((service) => ({
    ...service,
    packages: service.packages.map((pkg) => {
      const finalPrice = pkg.basePrice - (pkg.basePrice * (pkg.discountPercentage / 100));
      
      const formattedPrice = pkg.isCustomPrice 
        ? "Sesuai Kebutuhan" 
        : `Rp ${finalPrice.toLocaleString('id-ID')}`;
        
      const originalPrice = pkg.isCustomPrice
        ? ""
        : `Rp ${pkg.basePrice.toLocaleString('id-ID')}`;

      return {
        ...pkg,
        price: formattedPrice,
        originalPrice: pkg.discountPercentage > 0 ? originalPrice : null,
        discount: pkg.discountPercentage > 0 ? pkg.discountPercentage : null,
        desc: pkg.description,
      };
    }),
  }));
}
