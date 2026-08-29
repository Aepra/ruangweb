import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />
      <Hero />
      <Catalog />
    </main>
  );
}
