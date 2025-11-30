"use client";

import ProjectNavbar from "@/components/ui/project-navbar";
import ProjectHero from "@/components/ui/project-hero";
import ProjectBrief from "@/components/ui/project-brief";
import { FaArrowRight } from "react-icons/fa6";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function NWTL() {
  const techStack = ["TypeScript", "NextJS", "Tailwind CSS"];
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <ProjectNavbar />
      <div className="flex flex-col h-full w-full overflow-y-scroll no-scrollbar">
        <ProjectHero title="NWTL" />
        <ProjectBrief
          brief="A website built in NextJS for NWTL : a semi-conductor material startup
          redefining precision at nano-scale"
          responsibilities="Everything, developed the whole project from building to deploying  on my
              own"
          webLink="https://nwtl.in"
          techStack={techStack}
        />
        <div className="w-full flex justify-center mt-8">
          <div className="w-11/12 xl:w-4/5">
            <img src={"/work/nwtl/nwtl1.png"} />
          </div>
        </div>
        <div className="w-full flex justify-center mt-16 mb-8">
          <div className="w-4/5 2xl:w-1/2 text-lg text-paper font-raleway">
            As the Founding Engineer and current Technical Advisor of NWTL, I
            made sure that website doesn&apos;t only convey about the product
            and contact information but also the vision of the company and
            it&apos;s future trajectory
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <div className="w-11/12 xl:w-4/5">
            <img src={"/work/nwtl/nwtl2.png"} />
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <div className="w-11/12 xl:w-4/5">
            <img src={"/work/nwtl/nwtl3.png"} />
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <div className="w-11/12 xl:w-4/5">
            <img src={"/work/nwtl/nwtl4.png"} />
          </div>
        </div>
        <div className="w-full flex justify-center mt-16 mb-8">
          <div className="w-4/5 2xl:w-1/2 flex justify-center text-lg text-paper font-cormorant mr-4">
            <motion.div
              ref={ref}
              initial={{ y: "40%", opacity: 0 }}
              animate={
                isVisible
                  ? { y: "0%", opacity: 100, transition: { duration: 0.3 } }
                  : { y: "40%", opacity: 0, transition: { duration: 0.1 } }
              }
            >
              <a
                href="https://nwtl.in"
                target="_blank"
                rel="noopener noreferer"
                className="bg-paper text-charcol rounded-full py-3 px-6 font-medium text-2xl flex hover:scale-105 hover:cursor-pointer duration-200"
              >
                Check it out&nbsp;{" "}
                <span className="flex flex-col justify-center font-light">
                  <IoIosArrowRoundForward />
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-16 mb-32">
          <div className="w-11/12 xl:w-4/5 flex justify-between text-xl text-paper font-cormorant">
            <Link
              href={"/"}
              className="flex font-bold hover:underline hover:underline-offset-4 duration-200"
            >
              <span className="flex flex-col justify-center">
                <IoIosArrowBack />
              </span>{" "}
              {" LEFT"}
            </Link>
            <Link
              href={"/"}
              className="flex font-bold hover:underline hover:underline-offset-4 duration-200"
            >
              {"RIGHT "}{" "}
              <span className="flex flex-col justify-center">
                <IoIosArrowForward />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
