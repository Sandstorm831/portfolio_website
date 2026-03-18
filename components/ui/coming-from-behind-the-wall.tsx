import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { ReactNode } from "react";

export function WallPopoutAnimation({
  children,
  className,
  delay = 1.2,
  duration = 0.6,
  fromBelow = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  fromBelow?: boolean
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: fromBelow ? "100%" : "-100%"}}
        animate={{ y: 0 }}
        transition={{
          delay: delay,
          duration: duration,
          ease: [0.87, 0, 0.13, 1],
        }}
        className={cn(
          "font-cormorant text-paper",
          className,
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}
