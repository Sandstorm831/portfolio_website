"use client";

import PageTransition from "@/components/ui/page-transition";
import Navbar from "@/components/ui/navbar";
import Intro from "@/components/ui/Intro";
import HomeMapper from "@/components/ui/home-mapper";

export default function Home() {
  return (
    <div className="flex max-md:flex-col h-screen bg-paper">
      <PageTransition baseColor={"bg-charcol"} />
      <Navbar />
      <div className="flex max-2xl:flex-col md:overflow-y-scroll no-scrollbar">
        <Intro />
        <HomeMapper />
      </div>
    </div>
  );
}
