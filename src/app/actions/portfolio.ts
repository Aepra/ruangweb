"use server";


import { db } from "@/lib/db";
import { projects, projectDocumentations, projectTechnologies } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createProjectAction(data: {
  title: string;
  slug: string;
  clientName: string;
  description: string;
  websiteUrl: string;
  coverImage: string;
  websiteTypeId: number;
  isFeatured: boolean;
  completionDate?: Date;
  technologies: string[];
  documentations: { title: string; imageUrl: string; description: string }[];
}) {
  try {
    // Insert Main Project
    const [newProject] = await db.insert(projects).values({
      title: data.title,
      slug: data.slug,
      clientName: data.clientName,
      description: data.description,
      websiteUrl: data.websiteUrl,
      coverImage: data.coverImage,
      websiteTypeId: data.websiteTypeId,
      isFeatured: data.isFeatured,
      completionDate: data.completionDate || new Date(),
    }).returning();

    // Insert Technologies
    if (data.technologies.length > 0) {
      const techInserts = data.technologies.map(tech => ({
        projectId: newProject.id,
        name: tech,
      }));
      await db.insert(projectTechnologies).values(techInserts);
    }

    // Insert Documentations
    if (data.documentations.length > 0) {
      const docInserts = data.documentations.map((doc, index) => ({
        projectId: newProject.id,
        title: doc.title,
        imageUrl: doc.imageUrl,
        description: doc.description,
        orderIndex: index,
      }));
      await db.insert(projectDocumentations).values(docInserts);
    }

    revalidatePath("/admin/portofolio");
    return { success: true, id: newProject.id };
  } catch (error: any) {
    console.error("Failed to create project:", error);
    return { error: error.message || "Failed to save project" };
  }
}
