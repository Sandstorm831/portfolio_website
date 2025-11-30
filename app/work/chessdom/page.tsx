"use client";

import { motion, easeInOut } from "motion/react";
import ProjectNavbar from "@/components/ui/project-navbar";

export default function Work() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <ProjectNavbar />
      <div className="flex flex-col h-full w-full">
        <div className="flex justify-center h-full">
          <div className="h-9/10 w-full bg-charcol pr-4 md:pr-20 pl-4">
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "+100%" }}
              transition={{
                duration: 0.6,
                ease: easeInOut,
              }}
              className={"w-full h-full bg-paper"}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
