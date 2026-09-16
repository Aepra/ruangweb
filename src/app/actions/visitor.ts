"use server";

import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { siteStats } from "@/db/schema";
import { sql } from "drizzle-orm";

export async function trackVisitor() {
  try {
    // 1. Get current stats or create if not exists
    let stats = await db.select().from(siteStats).limit(1);
    
    if (stats.length === 0) {
      const inserted = await db.insert(siteStats).values({ totalVisitors: 0 }).returning();
      stats = inserted;
    }

    const cookieStore = await cookies();
    const hasVisited = cookieStore.get("ruangweb_visited");

    // 2. If new visitor
    if (!hasVisited) {
      // Increment in DB
      await db.update(siteStats).set({ totalVisitors: sql`${siteStats.totalVisitors} + 1` });
      
      // Set cookie for 1 year
      cookieStore.set("ruangweb_visited", "true", {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
      });

      return { count: stats[0].totalVisitors + 1 };
    }

    // 3. Return current count (already visited)
    return { count: stats[0].totalVisitors };
  } catch (error) {
    console.error("Failed to track visitor:", error);
    return { count: 0 };
  }
}
