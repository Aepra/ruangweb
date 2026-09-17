'use server'

import { db } from '@/lib/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { verifyPassword, loginUser, logoutUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function loginAction(prevState: any, formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (!username || !password) {
    return { error: 'Username and password are required' };
  }

  try {
    const user = await db.query.users.findFirst({
      where: eq(users.username, username),
    });

    if (!user) {
      return { error: 'Invalid username or password' };
    }

    const isValid = await verifyPassword(password, user.passwordHash);

    if (!isValid) {
      return { error: 'Invalid username or password' };
    }

    await loginUser({
      id: user.id,
      name: user.name,
      username: user.username,
      role: user.role,
    });

  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An unexpected error occurred' };
  }
  
  redirect('/admin');
}

export async function logoutAction() {
  await logoutUser();
  redirect('/admin/login');
}
