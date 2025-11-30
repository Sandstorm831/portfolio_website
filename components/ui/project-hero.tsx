import { motion, easeInOut } from "motion/react";

export default function ProjectHero({title} : {title: string}) {
  return (
    <div className="h-9/10 w-full bg-charcol pr-4 md:pr-20 pl-4">
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{
          duration: 0.6,
          ease: easeInOut,
        }}
        className={"w-full h-full bg-paper"}
      >
        <div className="w-full h-full">
          <div className="w-full h-full flex justify-center">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 100 }}
                transition={{
                  default: {
                    delay: 0.6,
                    duration: 0.3,
                    ease: (x: number) => x,
                  },
                }}
                className="font-cormorant text-4xl ssm:text-6xl sm:text-8xl md:text-[110px] xmd:text-[120px] lg:text-[150px] xlg:text-[180px] duration-300 text-charcol"
              >
                {title}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
