import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

async function main() {
  const sql = neon(process.env.DATABASE_URL!);
  console.log('Dropping public schema cascade...');
  await sql`DROP SCHEMA IF EXISTS public CASCADE;`;
  await sql`CREATE SCHEMA public;`;
  await sql`GRANT ALL ON SCHEMA public TO public;`;
  console.log('Dropped successfully.');
}

main().catch(console.error);
