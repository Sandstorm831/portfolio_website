import { motion } from "motion/react";
import { ReactNode } from "react";

export function RevealText({
  children,
  duration = 1.2,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  duration: number;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{
        ease: [0.22, 1, 0.36, 1],
        duration: duration,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MaskedRevealText({
  children,
  duration = 1.2,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  duration: number;
  delay: number;
  className?: string;
}) {
  return (
    <div className="relative overflow-hidden inline-block">
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-110%" }}
        transition={{
          duration: 1,
          delay: delay + 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 bg-charcol"
      ></motion.div>
    </div>
  );
}
