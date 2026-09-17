"use server";

import { db } from "@/lib/db";
import { publicComments } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/auth";

export async function adminReplyToComment(replyToId: number | null, message: string) {
  const session = await getSession();
  if (!session) return { success: false, error: "Unauthorized" };

  if (!message || message.trim() === "") return { success: false, error: "Pesan tidak boleh kosong" };
  
  try {
    await db.insert(publicComments).values({
      message: message.trim(),
      isAdminReply: true,
      replyToId: replyToId,
    } as any);
    
    revalidatePath("/");
    revalidatePath("/admin/chat");
    return { success: true };
  } catch (error) {
    console.error("Failed to post admin comment:", error);
    return { success: false, error: "Gagal mengirim balasan" };
  }
}

export async function deleteCommentByAdmin(id: number) {
  const session = await getSession();
  if (!session) return { success: false, error: "Unauthorized" };

  try {
    await db.delete(publicComments).where(eq(publicComments.id, id));
    revalidatePath("/");
    revalidatePath("/admin/chat");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete comment:", error);
    return { success: false, error: "Gagal menghapus pesan" };
  }
}
