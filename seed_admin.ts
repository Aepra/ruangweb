import { db } from './src/lib/db';
import { users } from './src/db/schema';
import { hashPassword } from './src/lib/auth';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

async function run() {
  const h = await hashPassword('admin123');
  // Upsert the admin user or insert if not exists
  await db.insert(users).values({
    name: 'Super Admin',
    username: 'admin',
    email: 'admin@ruangweb.com',
    passwordHash: h,
    role: 'super_admin'
  }).onConflictDoNothing();
  console.log('Admin user seeded (username: admin, password: admin123)');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
