"use client";

import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  function handleNavigation() {
    setIsTransitioning(true);
    setTimeout(() => {
      // Perform actual navigation here
      // router.push(url)
      setIsTransitioning(false);
    }, 5000);
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="font-cormorant text-5xl">
        hello, <span className="font-raleway text-xl">how are you</span>
      </div>
      <AnimatePresence>
        {isTransitioning ? (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.6,
              ease: easeInOut,
            }}
            className="fixed top-0 left-0 w-full h-full bg-black z-90"
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <button onClick={() => handleNavigation()}> Go to Another Page

      </button>
    </div>
  );
}
