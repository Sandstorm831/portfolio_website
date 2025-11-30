"use client";

import ProjectNavbar from "@/components/ui/project-navbar";
import ProjectHero from "@/components/ui/project-hero";
import ProjectBrief from "@/components/ui/project-brief";

export default function NWTL() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <ProjectNavbar />
      <div className="flex flex-col h-full w-full overflow-y-scroll no-scrollbar">
        <ProjectHero title="NWTL" />
        <ProjectBrief
          brief="A website built in NextJS for NWTL : a semi-conductor material startup
          redefining precision at nano-scale"
          responsibilities="Everything, developed the whole project from start to finish on my
              own"
          webLink="https://nwtl.in"
        />
      </div>
    </div>
  );
}
