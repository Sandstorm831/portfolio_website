"use client";

import { useState } from "react";
import PageTransition from "@/components/ui/page-transition";
import Navbar from "@/components/ui/navbar";
import Intro from "@/components/ui/Intro";

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
    <div className="flex max-md:flex-col h-screen bg-paper font-sans">
      <PageTransition
        baseColor={"bg-charcol"}
        isTransitioning={isTransitioning}
      />
      <Navbar />
      <Intro />
    </div>
  );
}
