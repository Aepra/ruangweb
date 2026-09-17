"use server";

import { db } from "@/lib/db";
import { publicComments } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getComments() {
  try {
    const allComments = await db.select().from(publicComments).orderBy(asc(publicComments.createdAt));
    return { success: true, data: allComments };
  } catch (error) {
    console.error("Failed to get comments:", error);
    return { success: false, data: [] };
  }
}

export async function postComment(message: string, replyToId: number | null = null) {
  if (!message || message.trim() === "") return { success: false, error: "Pesan tidak boleh kosong" };
  
  const finalMessage = message.trim();
  
  try {
    await db.insert(publicComments).values({
      message: finalMessage,
      isAdminReply: false, // Public comments are never admin replies
      replyToId: replyToId,
    } as any);
    
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to post comment:", error);
    return { success: false, error: "Gagal mengirim pesan" };
  }
}
