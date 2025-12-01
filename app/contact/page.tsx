"use client";

import AboutTitle from "@/components/ui/about-title";
import BlurText from "@/components/ui/BlurText";
import PageTransition from "@/components/ui/page-transition";
import ToWorkNavbar from "@/components/ui/to-work-navbar";

export default function About() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <PageTransition baseColor={"bg-paper"} direction="top" />
      <ToWorkNavbar />
      <div className="z-10 flex flex-col h-full w-full overflow-y-scroll no-scrollbar pb-32">
        <div className="w-full flex flex-col">
          <ContactTitle title="Hello." />
        </div>
      </div>
    </div>
  );
}

export function ContactTitle({ title }: { title: string }) {
  return (
    <div className="text-7xl ssm:text-9xl md:text-[150px] xlg:text-[180px] text-charcol font-cormorant ml-8 md:mt-32 md:ml-12 xl:ml-28">
      <BlurText text={title} />
    </div>
  );
}
