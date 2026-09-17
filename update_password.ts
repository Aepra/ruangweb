import { db } from './src/lib/db';
import { users } from './src/db/schema';
import { hashPassword } from './src/lib/auth';
import { eq } from 'drizzle-orm';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

async function run() {
  const newPassword = 'ruangwebuangku123';
  const h = await hashPassword(newPassword);

  await db.update(users)
    .set({ passwordHash: h })
    .where(eq(users.username, 'admin'));

  console.log('Password berhasil diupdate!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
