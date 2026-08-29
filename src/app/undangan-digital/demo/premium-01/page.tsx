"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CoverSection from "@/components/undangan/premium-01/CoverSection";
import HeroSection from "@/components/undangan/premium-01/HeroSection";
import QuoteSection from "@/components/undangan/premium-01/QuoteSection";
import CoupleMessage from "@/components/undangan/premium-01/CoupleMessage";
import LoveStory from "@/components/undangan/premium-01/LoveStory";
import WeddingEvents from "@/components/undangan/premium-01/WeddingEvents";
import Gallery from "@/components/undangan/premium-01/Gallery";
import DigitalGift from "@/components/undangan/premium-01/DigitalGift";
import WishForm from "@/components/undangan/premium-01/WishForm";
import Footer from "@/components/undangan/premium-01/Footer";
import BottomNav from "@/components/undangan/premium-01/BottomNav";
import MusicPlayer from "@/components/undangan/premium-01/MusicPlayer";

export default function Premium01Demo() {
  const [isOpened, setIsOpened] = useState(false);
  const [showCover, setShowCover] = useState(true);

  // Lock scroll on cover
  useEffect(() => {
    document.body.style.overflow = isOpened ? "unset" : "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpened]);

  const handleOpen = () => {
    setIsOpened(true);
    // Hide cover after exit animation
    setTimeout(() => setShowCover(false), 900);
  };

  return (
    <main className="bg-[#F9F6F1] min-h-screen">
      
      <AnimatePresence>
        {showCover && (
          <CoverSection onOpen={handleOpen} isVisible={!isOpened} />
        )}
      </AnimatePresence>

      {/* Main content - always rendered but below cover */}
      <div style={{ visibility: isOpened ? 'visible' : 'hidden' }} className="pb-20">
        <HeroSection />
        <QuoteSection />
        <CoupleMessage />
        <LoveStory />
        <WeddingEvents />
        <Gallery />
        <DigitalGift />
        <WishForm />
        <Footer />
      </div>

      {isOpened && (
        <>
          <BottomNav />
          <MusicPlayer />
        </>
      )}
    </main>
  );
}
