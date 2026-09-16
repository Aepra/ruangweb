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

    const insertedWebsiteType = await db.insert(websiteTypes).values({
      categoryId,
      name: "Umum",
      slug: "umum",
    }).returning({ id: websiteTypes.id });

    const websiteTypeId = insertedWebsiteType[0].id;

    for (const pkg of category.packages) {
      await db.insert(websitePackages).values({
        websiteTypeId,
        packageType: pkg.name === "Profesional" ? "Professional" : pkg.name,
        isAvailable: true,
        description: pkg.desc,
      });
    }
  }

  console.log("Seeding complete!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
