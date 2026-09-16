import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

async function main() {
  const sql = neon(process.env.DATABASE_URL!);
  
  console.log('Creating public_comments table if not exists...');
  await sql`
    CREATE TABLE IF NOT EXISTS "public_comments" (
      "id" serial PRIMARY KEY NOT NULL,
      "message" text NOT NULL,
      "is_admin_reply" boolean DEFAULT false NOT NULL,
      "reply_to_id" integer,
      "created_at" timestamp DEFAULT now() NOT NULL
    );
  `;
  console.log('Table public_comments is ready!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
