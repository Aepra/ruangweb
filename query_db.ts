import { db } from "./src/lib/db";
import { siteStats } from "./src/db/schema";
import { sql } from "drizzle-orm";

async function main() {
  try {
    const data = await db.select().from(siteStats);
    console.log("siteStats rows:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

main().catch(console.error);
