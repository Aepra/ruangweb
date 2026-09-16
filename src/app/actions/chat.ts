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
  
  let isAdminReply = false;
  let finalMessage = message.trim();

  // Cek apakah pesan diawali dengan kode rahasia admin
  const secretCode = process.env.ADMIN_CHAT_CODE || "/27";
  
  if (finalMessage.startsWith(secretCode)) {
    isAdminReply = true;
    // Hapus kode rahasia dari pesan yang akan ditampilkan
    finalMessage = finalMessage.replace(secretCode, "").trim();
  }
  
  try {
    await db.insert(publicComments).values({
      message: finalMessage,
      isAdminReply: isAdminReply,
      replyToId: replyToId,
    } as any);
    
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to post comment:", error);
    return { success: false, error: "Gagal mengirim pesan" };
  }
}

export async function deleteComment(id: number, inputCode: string) {
  const secretCode = process.env.ADMIN_CHAT_CODE || "/27";
  
  if (inputCode !== secretCode) {
    return { success: false, error: "Kode admin salah!" };
  }

  try {
    await db.delete(publicComments).where(eq(publicComments.id, id));
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete comment:", error);
    return { success: false, error: "Gagal menghapus pesan" };
  }
}
