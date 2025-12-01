"use client";

import ProjectNavbar from "@/components/ui/project-navbar";
import ProjectHero from "@/components/ui/project-hero";

export default function ChessSH() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <ProjectNavbar />
      <div className="flex flex-col h-full w-full overflow-y-scroll no-scrollbar">
        <ProjectHero title="CHESS-SH" />
      </div>
    </div>
  );
}
