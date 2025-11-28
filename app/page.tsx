"use client";

import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useEffect, useState } from "react";
import PageTransition from "@/components/ui/page-transition";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(true);

  function handleNavigation() {
    setIsTransitioning(true);
    setTimeout(() => {
      // Perform actual navigation here
      // router.push(url)
      setIsTransitioning(false);
    }, 5000);
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#EAE0D5] font-sans">
      <PageTransition
        baseColor={"bg-[#333031]"}
        isTransitioning={isTransitioning}
      />
    </div>
  );
}
