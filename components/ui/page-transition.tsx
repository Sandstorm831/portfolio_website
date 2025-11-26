import { cn } from "@/lib/utils";
import { AnimatePresence, easeInOut, motion } from "motion/react";

export default function PageTransition({
  baseColor,
  isTransitioning,
}: {
  baseColor: string;
  isTransitioning: boolean
}) {
  return (
    <AnimatePresence>
      {isTransitioning ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "+100%" }}
          transition={{
            duration: 0.6,
            ease: easeInOut,
          }}
          className={cn("fixed top-0 left-0 w-full h-full", baseColor)}
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );
}
