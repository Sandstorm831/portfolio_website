"use client";

import PageTransition from "@/components/ui/page-transition";
import HomeNavbar from "@/components/ui/home-navbar";
import HomeIntro from "@/components/ui/home-intro";
import HomeMapper from "@/components/ui/home-mapper";
import PageWrapper from "@/components/ui/page-wrapper";

export default function Home() {
  return (
    <PageWrapper color="bg-paper">
      <PageTransition baseColor={"bg-charcol"} direction="bottom" />
      <HomeNavbar />
      <div className="flex max-2xl:flex-col md:overflow-y-scroll no-scrollbar">
        <HomeIntro />
        <HomeMapper textColor="paper" />
      </div>
    </PageWrapper>
  );
}
