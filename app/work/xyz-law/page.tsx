"use client";

import ProjectBrief from "@/components/ui/project-brief";
import ProjectButton from "@/components/ui/project-button";
import ProjectHero from "@/components/ui/project-hero";
import ProjectImageShelf from "@/components/ui/project-image-shelf";
import ProjectNavbar from "@/components/ui/project-navbar";
import ProjectNavigator from "@/components/ui/project-navigator";
import ProjectTextBlock from "@/components/ui/project-text-block";

export default function XYZLaw() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <ProjectNavbar />
      <div className="flex flex-col h-full w-full overflow-y-scroll no-scrollbar">
        <ProjectHero title="XYZ-Law" />
        <ProjectBrief
          brief="An attempt to improve upon the design of an established law firm website"
          responsibilities="Everything, I made this whole design revamp completely on my own"
          webLink="https://xyz-law.vercel.app"
          githubLink="https://github.com/Sandstorm831/xyz-law"
          techStack={["TypeScript", "NextJS", "Tailwind CSS"]}
        />
        <ProjectImageShelf
          images={[
            "/work/xyz-law/xyz-law-1.png",
            "/work/xyz-law/xyz-law-2.png",
          ]}
        />
        <ProjectTextBlock
          text="Law firm websites usually try to look very professional which ultimately
                doesn't create a very friendly image for the company. Through the color palette
                and minimal design elements, this was an attempt to make law firm websites more
                friendly and approachable"
        />
        <ProjectImageShelf
          images={[
            "/work/xyz-law/xyz-law-3.png",
            "/work/xyz-law/xyz-law-4.png",
          ]}
        />
        <ProjectButton
          buttonText="Check it out"
          link="https://xyz-law.vercel.app/"
        />
        <ProjectNavigator
          leftNavigator={{ text: "CHESSDOM", link: "/work/chessdom" }}
        />
      </div>
    </div>
  );
}
