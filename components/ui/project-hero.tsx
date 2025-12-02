import { motion } from "motion/react";

export default function ProjectHero({ title }: { title: string }) {
  return (
    <div className="h-9/10 w-full bg-charcol pr-4 md:pr-20 pl-4 shrink-0">
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={"w-full h-full bg-paper"}
      >
        <div className="w-full h-full">
          <div className="w-full h-full flex justify-center">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ y: "100dvh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.9,
                  ease: [0.87, 0, 0.13, 1],
                }}
                className="font-cormorant text-[48px] ssm:text-6xl sm:text-8xl md:text-[110px] xmd:text-[120px] lg:text-[150px] xlg:text-[180px] text-charcol"
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
