"use client";

import PageTransition from "@/components/ui/page-transition";
import ToWorkNavbar from "@/components/ui/to-work-navbar";
import WorkIntro from "@/components/ui/work-intro";
import WorkMapper from "@/components/ui/work-mapper";

export default function Work() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <PageTransition baseColor={"bg-paper"} direction="top" />
      <ToWorkNavbar />
      <div className="flex max-2xl:flex-col md:overflow-y-scroll no-scrollbar">
        <WorkIntro />
        <WorkMapper textColor="charcol" />
      </div>
    </div>
  );
}
