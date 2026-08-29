import { db } from "@/lib/db";
import { websiteTypes } from "@/db/schema";
import PortfolioForm from "./PortfolioForm";

export default async function NewPortfolioPage() {
  const types = await db.select().from(websiteTypes);
  
  return (
    <div>
      <PortfolioForm websiteTypes={types} />
    </div>
  );
}
