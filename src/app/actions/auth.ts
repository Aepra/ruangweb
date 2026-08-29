'use server';


import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { signToken } from "@/lib/auth";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email dan password harus diisi." };
  }

  try {
    const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
    
    if (user.length === 0) {
      return { error: "Email atau password salah." };
    }

    const userData = user[0];
    
    const isValid = password === userData.passwordHash;

    if (!isValid) {
      return { error: "Email atau password salah." };
    }

    const token = await signToken({
      id: userData.id,
      email: userData.email,
      name: userData.name,
      role: userData.role,
    });

    (await cookies()).set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return { success: true };
  } catch (err) {
    console.error("Login error:", err);
    return { error: "Terjadi kesalahan sistem." };
  }
}

export async function logoutAction() {
  (await cookies()).delete("admin_token");
  return { success: true };
}
