import Link from "next/link";
import BlurText from "./BlurText";
import { cn } from "@/lib/utils";
import { MapItem } from "@/types";
import BlurChild from "./BlurChild";

export default function RootMapper({
  textColor,
  mapItems,
  direction,
}: {
  textColor: string;
  mapItems: MapItem[];
  direction: "top" | "bottom";
}) {
  return (
    <div
      className={cn(
        "2xl:h-full max-2xl:w-full z-10 flex 2xl:flex-col 2xl:justify-start",
        {
          "text-paper": textColor === "paper",
          "text-charcol": textColor === "charcol",
        }
      )}
    >
      <div className="flex flex-col font-cormorant mb-12 2xl:mb-32 mt-8 mx-8 2xl:mx-24">
        {mapItems.map((item, idx) => {
          return (
            <Item
              key={idx}
              title={item.title}
              link={item.link}
              direction={direction}
              delay={item.delay}
              subtitle={item.subtitle === undefined ? undefined : item.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
}

function Item({
  title,
  link,
  delay,
  direction,
  subtitle = undefined,
}: {
  title: string;
  link: string;
  delay: number;
  direction: "top" | "bottom";
  subtitle?: string;
}) {
  return (
    <Link
      href={link}
      className="flex flex-col font-medium text-[48px] ssm:text-6xl sm:text-8xl md:text-[110px] xmd:text-[120px] lg:text-[150px] xlg:text-[180px] cursor-pointer max-lg:mb-4"
    >
      <BlurChild delay={delay} direction={direction}>
        <div className="origin-[0%_85%] hover:scale-y-110 duration-300 leading-none hover:duration-150">
          {title}
        </div>
      </BlurChild>
      {subtitle === undefined || subtitle === "" ? null : (
        <BlurText
          text={"+ " + subtitle}
          delay={delay + 600}
          direction={direction}
          className="font-medium text-[13px] sm:text-[18px] lg:text-2xl mb-4 font-raleway"
        />
      )}
      {}
    </Link>
  );
}
