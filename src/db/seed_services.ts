import { db } from "../lib/db";
import { services, packages, featureMatrix } from "./schema";
import { servicesData } from "../data/services";

async function main() {
  console.log("Starting seeder...");
  
  for (const service of servicesData) {
    console.log(`Seeding service: ${service.title}`);
    
    // Insert Service
    const [insertedService] = await db.insert(services).values({
      slug: service.slug,
      title: service.title,
      iconName: service.iconName,
      color: service.color,
      description: service.description,
      longDescription: service.longDescription || null,
    }).returning();
    
    // Insert Packages
    for (const pkg of service.packages) {
      // Parse basePrice from string (e.g., "Rp 750.000", "Mulai Rp 500.000", "Sesuai Kebutuhan")
      let basePrice = 0;
      let isCustomPrice = false;
      
      const priceMatch = pkg.price.replace(/[^\d]/g, '');
      if (priceMatch) {
        basePrice = parseInt(priceMatch, 10);
      } else {
        isCustomPrice = true;
      }
      
      await db.insert(packages).values({
        serviceId: insertedService.id,
        name: pkg.name,
        basePrice,
        discountPercentage: 0,
        isCustomPrice,
        description: pkg.desc,
        fullDetails: pkg.fullDetails || null,
      });
    }
    
    // Insert Feature Matrix
    if (service.featureMatrix) {
      for (const feature of service.featureMatrix) {
        await db.insert(featureMatrix).values({
          serviceId: insertedService.id,
          feature: feature.feature,
          starter: String(feature.starter),
          professional: String(feature.professional),
          custom: String(feature.custom),
        });
      }
    }
  }
  
  console.log("Seeding completed!");
}

main().catch((err) => {
  console.error("Error seeding data:", err);
  process.exit(1);
});
