import { cn } from "@/lib/utils";
import { AnimatePresence, easeInOut, motion } from "motion/react";

/**
 *
 * @param baseColor TailwindCSS background color className
 * @param direction Animation direction, "top" or "bottom"
 * @returns AnimatePresence component to animate smooth page transitions
 */
export default function PageTransition({
  baseColor,
  direction = "bottom",
}: {
  baseColor: string;
  direction: "bottom" | "top";
}) {
  const dir = direction === "bottom" ? "-100%" : "+100%";
  return (
    <AnimatePresence>
      {
        <motion.div
          initial={{ y: dir }}
          animate={{ y: "0%" }}
          exit={{ y: "+100%" }}
          transition={{
            duration: 0.6,
            ease: easeInOut,
          }}
          className={cn("fixed top-0 left-0 w-full h-lvh", baseColor)}
        ></motion.div>
      }
    </AnimatePresence>
  );
}
