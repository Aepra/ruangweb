import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

async function main() {
  const sql = neon(process.env.DATABASE_URL!);
  
  console.log('Creating site_stats table if not exists...');
  await sql`
    CREATE TABLE IF NOT EXISTS "site_stats" (
      "id" serial PRIMARY KEY NOT NULL,
      "total_visitors" integer DEFAULT 0 NOT NULL
    );
  `;
  console.log('Table site_stats is ready!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
