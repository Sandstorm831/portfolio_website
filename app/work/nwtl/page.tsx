"use client";

import ProjectNavbar from "@/components/ui/project-navbar";
import ProjectHero from "@/components/ui/project-hero";
import ProjectBrief from "@/components/ui/project-brief";
import ProjectImageShelf from "@/components/ui/project-image-shelf";
import ProjectTextBlock from "@/components/ui/project-text-block";
import ProjectButton from "@/components/ui/project-button";
import ProjectNavigator from "@/components/ui/project-navigator";

export default function NWTL() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <ProjectNavbar />
      <div className="flex flex-col h-full w-full overflow-y-scroll no-scrollbar">
        <ProjectHero title="NWTL" />
        <ProjectBrief
          brief="A website built in NextJS for NWTL : a semiconductor material startup
          redefining precision at nanoscale"
          responsibilities="Everything, I developed the whole project from building to deploying on my
              own"
          webLink="https://nwtl.in"
          techStack={["TypeScript", "NextJS", "Tailwind CSS"]}
        />
        <ProjectImageShelf images={["/work/nwtl/nwtl1.png"]} />
        <ProjectTextBlock
          text="As the Founding Engineer and current Technical Advisor of NWTL, I made
        sure that the website not only conveys the product and contact
        information but also the vision of the company and its future
        trajectory"
        />
        <ProjectImageShelf
          images={[
            "/work/nwtl/nwtl2.png",
            "/work/nwtl/nwtl3.png",
            "/work/nwtl/nwtl4.png",
            "/work/nwtl/nwtl5.png",
          ]}
        />
        <ProjectButton buttonText="Check it out" link="https://nwtl.in" />
        <ProjectNavigator
          rightNavigator={{ text: "CHESSDOM", link: "/work/chessdom" }}
        />
      </div>
    </div>
  );
}
