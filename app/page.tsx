"use client";

import { useState } from "react";
import PageTransition from "@/components/ui/page-transition";
import Navbar from "@/components/ui/navbar";
import Intro from "@/components/ui/Intro";
import { motion } from "motion/react";

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
    <div className="flex max-md:flex-col h-screen bg-paper">
      <PageTransition
        baseColor={"bg-charcol"}
        isTransitioning={isTransitioning}
      />
      <Navbar />
      <div className="flex max-2xl:flex-col md:overflow-y-scroll no-scrollbar">
        <Intro />
        <div className="2xl:h-full max-2xl:w-full z-10 text-paper flex 2xl:flex-col 2xl:justify-start">
          <div className="flex flex-col font-cormorant mb-12 2xl:mb-32 mt-16 mx-8 2xl:mx-24">
            <Item title="Work" link="/" />
            <Item title="About" link="/" />
            <Item title="Contact" link="/" />
            <Item title="Blogs" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ title, link }: { title: string; link: string }) {
  return (
    <div className="font-medium text-[210px] cursor-pointer origin-[0%_85%] hover:scale-y-120 duration-300 leading-none hover:duration-150 mb-8">
      {title}
    </div>
  );
}
