import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

/**
 *
 * @param children Any number of react children component
 * @param backgroundColor Hex string of the color of the background
 * @param textColor Tailwind name of the color for text and line
 * @returns
 */
export default function RootNavbar({
  children,
  backgroundColor,
  textColor,
}: {
  children: ReactNode;
  backgroundColor: string;
  textColor: string;
}) {
  return (
    <motion.div
      animate={{ backgroundColor: backgroundColor }}
      transition={{ delay: 0.6, duration: 0 }}
      className={cn(
        "flex md:flex-col md:justify-between md:h-full max-md:w-full sticky top-0 md:z-10 max-md:z-20 max-md:pb-12",
        {
          "text-paper": textColor === "paper",
          "text-charcol": textColor === "charcol",
        },
      )}
    >
      <div className="mt-8 md:mt-12 flex md:flex-col">
        {children}
        <div
          className={cn(
            "w-20 h-0 max-md:mt-2.5 md:h-32 md:w-0 ml-4 md:ml-[42px] border",
            {
              "border-paper": textColor === "paper",
              "border-charcol": textColor === "charcol",
            },
          )}
        />
      </div>
      <div className="w-full">
        <div
          className={cn(
            "max-md:hidden mb-12 mt-4 ml-4 whitespace-nowrap text-sm font-raleway",
            {
              "text-paper": textColor === "paper",
              "text-charcol": textColor === "charcol",
            },
          )}
        >
          <div className="rotate-270">© 2025</div>
        </div>
      </div>
    </motion.div>
  );
}
