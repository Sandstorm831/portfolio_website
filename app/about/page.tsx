"use client";

import BlurText from "@/components/ui/BlurText";
import PageTransition from "@/components/ui/page-transition";
import ToWorkNavbar from "@/components/ui/to-work-navbar";
import { yearsPassed } from "@/lib/utils";
import { motion } from "motion/react";

export default function About() {
  const professionalExp = yearsPassed(new Date("2022-04-10"));
  const webExp = yearsPassed(new Date("2023-06-10"));
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <PageTransition baseColor={"bg-paper"} direction="top" />
      <ToWorkNavbar />
      <div className="z-10 flex flex-col h-full w-full overflow-y-scroll no-scrollbar pb-32">
        <div className="w-full flex flex-col">
          <AboutTitle title="About" />
          <AboutSubTitle />
          <AboutText
            paras={[
              `It all starts with my Operating System. In the first semester of
                college, I have decided to switch my OS from windows to Linux,
                which marks my journey in the software engineering field. From
                that point on I started using terminal (that black screen with
                the blinking cursor you see in movies) as much as I can and
                discovered the underworld of technology, the code that drives
                these beautiful and clickable user interfaces.`,
              `Due to an inherent interest in Mathematics, I gravitated towards
                Machine Learning in my initial days but got out in a year after
                finding out the obvious reality.`,
              `Since then, my curiosity has taken me in many directions:
                open-source software (the kind you can use for free, without
                ads—like VLC), algorithmic trading, machine learning research,
                competitive programming, and more. I've explored a lot of
                paths, but creation of beautiful, smooth and no-fluff website
                was common in all fields and I thoroughly enjoyed that.
                It's the part where creativity meets logic and problem
                solving to create something unique.`,
            ]}
            imgStr="/rg-transparent.png"
          />
          <AboutExperience
            points={[
              `2024 IIT Roorkee Graduate`,
              `${professionalExp} years of experience as a professional software engineer`,
              `{webExp} years of experience in Full-Stack Web
                Development`,
              `1 year as a founding engineer at NWTL`,
            ]}
          />
          <AboutSkills
            skills="TypeScript / JavaScript / Python / C++ / Docker / Git / ReactJS /
          NextJS / NodeJS / ExpressJS / Tailwind CSS / Docker / Prisma /
          SocketIO / Framer-Motion"
          />
        </div>
      </div>
    </div>
  );
}

export function AboutTitle({ title }: { title: string }) {
  return (
    <div className="text-7xl ssm:text-9xl md:text-[150px] xlg:text-[180px] text-charcol font-cormorant ml-8 md:mt-32 md:ml-12 xl:ml-28">
      <BlurText text={title} />
    </div>
  );
}

export function AboutSubTitle() {
  return (
    <div className="flex w-full justify-start mt-8">
      <div className="text-3xl font-bold text-charcol font-cormorant w-full md:text-5xl ml-8 max-md:mr-8 md:ml-12 xl:ml-28 md:w-4/5 xl:w-3/5 mr-4 ">
        I&apos;m Rohan. A <span className="whitespace-nowrap">Full-Stack</span>{" "}
        Web Developer, Designer and Problem Solver
      </div>
    </div>
  );
}

export function AboutText({
  paras,
  imgStr,
}: {
  paras: string[];
  imgStr: string;
}) {
  return (
    <div className="flex max-lg:flex-col w-full justify-between mt-2">
      <div className="text-md text-charcol font-raleway w-full max-md:px-8 md:ml-12 xl:ml-28 md:w-4/5 xl:w-3/5 mr-4 max-md:mb-8 flex flex-col">
        {paras.map((para, idx) => {
          return (
            <span key={idx} className="mt-6">
              {para}
            </span>
          );
        })}
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-[300px]">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <img src={imgStr} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function AboutExperience({ points }: { points: string[] }) {
  return (
    <div className="flex flex-col w-full justify-between mt-8">
      <div className="text-3xl font-bold text-charcol font-cormorant w-full ml-8 max-md:mr-8 md:ml-12 xl:ml-28 md:w-4/5 xl:w-3/5 mr-4 ">
        EXPERIENCE
      </div>
      <div className="flex flex-col font-raleway mt-4 text-xl max-md:px-8 md:ml-12 xl:ml-28 w-full md:w-4/5 xl:w-3/5">
        {points.map((point, idx) => {
          return <div key={idx}>• &nbsp;&nbsp;{point}</div>;
        })}
      </div>
    </div>
  );
}

export function AboutSkills({ skills }: { skills: string }) {
  return (
    <div className="flex flex-col w-full justify-between mt-8">
      <div className="text-3xl font-bold text-charcol font-cormorant w-full ml-8 max-md:mr-8 md:ml-12 xl:ml-28 md:w-4/5 xl:w-3/5 mr-4 ">
        SKILLS
      </div>
      <div className="flex font-raleway mt-4 text-xl max-md:px-8 md:ml-12 xl:ml-28 w-full md:w-4/5 xl:w-3/5">
        <div>{skills}</div>
      </div>
    </div>
  );
}
