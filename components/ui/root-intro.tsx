import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function RootIntro({
  children,
  textColor,
}: {
  children: ReactNode;
  textColor: string;
}) {
  return (
    <div
      className={cn(
        "2xl:h-full max-2xl:w-full 2xl:w-[700px] z-10 flex 2xl:flex-col 2xl:justify-end 2xl:sticky 2xl:top-0 ",
        {
          "text-paper": textColor === "paper",
          "text-charcol": textColor === "charcol",
        },
      )}
    >
      <div className="flex justify-end">
        <div className="flex flex-col font-raleway max-md:mt-4 max-2xl:mt-16 mx-8 mb-12 md:ml-16">
          {children}
        </div>
      </div>
    </div>
  );
}
