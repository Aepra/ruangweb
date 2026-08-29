import { db } from "../lib/db";
import { users, serviceCategories, websiteTypes, websitePackages } from "./schema";
import { servicesData } from "../data/services";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

async function main() {
  console.log("Seeding database...");

  // 1. Seed User (Superadmin)
  console.log("Seeding user...");
  await db.insert(users).values({
    name: "Super Admin",
    email: "superadmin@ruangweb.id",
    passwordHash: "Password123!", // In a real app, use bcrypt hash
    role: "super_admin",
  }).onConflictDoNothing();

  // 2. Seed Service Categories & Website Types & Packages
  console.log("Seeding services data...");
  for (const category of servicesData) {
    const insertedCategory = await db.insert(serviceCategories).values({
      title: category.title,
      slug: category.slug,
      description: category.description,
      iconName: category.iconName,
      color: category.color,
    }).returning({ id: serviceCategories.id });
    
    const categoryId = insertedCategory[0].id;

    for (const websiteType of category.websiteTypes) {
      const insertedWebsiteType = await db.insert(websiteTypes).values({
        categoryId,
        name: websiteType.name,
        slug: websiteType.slug,
      }).returning({ id: websiteTypes.id });

      const websiteTypeId = insertedWebsiteType[0].id;

      // Starter
      await db.insert(websitePackages).values({
        websiteTypeId,
        packageType: "Starter",
        isAvailable: websiteType.packages.Starter.available,
        description: websiteType.packages.Starter.description,
        reasonNotAvailable: websiteType.packages.Starter.reasonNotAvailable,
      });

      // Professional
      await db.insert(websitePackages).values({
        websiteTypeId,
        packageType: "Professional",
        isAvailable: websiteType.packages.Professional.available,
        description: websiteType.packages.Professional.description,
        reasonNotAvailable: websiteType.packages.Professional.reasonNotAvailable,
      });

      // Custom
      await db.insert(websitePackages).values({
        websiteTypeId,
        packageType: "Custom",
        isAvailable: websiteType.packages.Custom.available,
        description: websiteType.packages.Custom.description,
        reasonNotAvailable: websiteType.packages.Custom.reasonNotAvailable,
      });
    }
  }

  console.log("Seeding complete!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
