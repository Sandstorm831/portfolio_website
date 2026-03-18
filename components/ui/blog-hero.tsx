import { motion } from "motion/react";
import { WallPopoutAnimation } from "./coming-from-behind-the-wall";
import { Badge } from "./badge";
import { formatDate, minutesToDuration } from "@/lib/utils";
import { Dot } from "lucide-react";
import { BlogStats } from "@/types";

const Stats: BlogStats = {
  date: new Date("2026-04-18T01:01:01Z"),
  badge: "algorithm",
  timeToRead: 15,
};

export default function BlogHero({ title }: { title: string }) {
  return (
    <div className="h-9/10 w-full bg-charcol pr-4 md:pr-20 pl-4 shrink-0">
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={"w-full h-full relative overflow-hidden"}
      >
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-paper" />
        <div className="w-full h-full">
          <div className="w-full h-full flex justify-center">
            <div className="flex flex-col justify-center">
              <WallPopoutAnimation className="font-cormorant text-xl md:text-3xl lg:text-[36px] text-paper">
                <Badge className="text-sm lg:text-lg">{Stats.badge}</Badge>
              </WallPopoutAnimation>
              <motion.div
                initial={{ y: "100dvh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.9,
                  ease: [0.87, 0, 0.13, 1],
                }}
                className="font-cormorant text-[48px] ssm:text-6xl sm:text-8xl md:text-[110px] xmd:text-[120px] lg:text-[150px] xlg:text-[180px] text-paper"
              >
                {title}
              </motion.div>
              <WallPopoutAnimation
                className="font-cormorant text-lg md:text-3xl text-paper flex items-center"
                fromBelow={false}
              >
                {minutesToDuration(Stats.timeToRead)} to read
                <Dot />
                {formatDate(Stats.date)}
              </WallPopoutAnimation>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
