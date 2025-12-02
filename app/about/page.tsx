"use client";

import AboutExperience from "@/components/ui/about-experience";
import AboutSkills from "@/components/ui/about-skills";
import AboutSubTitle from "@/components/ui/about-subtitle";
import AboutText from "@/components/ui/about-text";
import AboutTitle from "@/components/ui/about-title";
import PageTransition from "@/components/ui/page-transition";
import ToWorkNavbar from "@/components/ui/to-work-navbar";
import { yearsPassed } from "@/lib/utils";

export default function About() {
  const professionalExp = yearsPassed(new Date("2022-04-10"));
  const webExp = yearsPassed(new Date("2023-06-10"));
  return (
    <div className="flex max-md:flex-col h-dvh bg-charcol">
      <PageTransition baseColor={"bg-paper"} direction="top" />
      <ToWorkNavbar />
      <div className="z-10 flex flex-col h-full w-full overflow-y-scroll no-scrollbar pb-32">
        <div className="w-full flex flex-col">
          <AboutTitle title="About" />
          <AboutSubTitle />
          <AboutText
            paras={[
              `It all starts with my Operating System. In the first semester of
                college, I decided to switch my OS from Windows to Linux,
                which marks my journey in the software engineering field. From
                that point on I started using terminal (that black screen with
                the blinking cursor you see in movies) as much as I could and
                discovered the underworld of technology, the code that drives
                these beautiful and clickable user interfaces.`,
              `Due to an inherent interest in Mathematics, I gravitated towards
                Machine Learning in my initial days but got out in a year after
                finding out the obvious reality.`,
              `Since then, my curiosity has taken me in many directions:
                open-source software (the kind you can use for free, without
                ads—like VLC), algorithmic trading, machine learning research,
                competitive programming, and more. I've explored a lot of
                paths, but the creation of beautiful, smooth and no-fluff websites
                was common in all fields and I thoroughly enjoyed that.
                It's the part where creativity meets logic and problem-solving
                to create something unique.`,
            ]}
            imgStr="/rg-transparent.png"
          />
          <AboutExperience
            points={[
              `2024 IIT Roorkee Graduate`,
              `${professionalExp} years of experience as a professional software engineer`,
              `${webExp} years of experience in Full-Stack Web
                Development`,
              `1 year as a founding engineer at NWTL`,
            ]}
          />
          <AboutSkills
            skills="TypeScript / JavaScript / Python / C++ / Docker / Git / ReactJS /
          NextJS / NodeJS / ExpressJS / Tailwind CSS / Prisma /
          SocketIO / Framer-Motion"
          />
        </div>
      </div>
    </div>
  );
}
