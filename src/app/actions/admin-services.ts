'use server'

import { db } from '@/lib/db';
import { packages } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function updatePackageAction(id: number, basePrice: number, discountPercentage: number) {
  try {
    await db.update(packages)
      .set({
        basePrice,
        discountPercentage,
      })
      .where(eq(packages.id, id));
    
    revalidatePath('/admin/services');
    revalidatePath('/layanan');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    console.error('Update package error:', error);
    return { error: 'Failed to update package' };
  }
}
