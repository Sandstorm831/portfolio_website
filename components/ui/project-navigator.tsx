import { NavigatorType } from "@/types";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ProjectNavigator({
  leftNavigator,
  rightNavigator,
}: {
  leftNavigator?: NavigatorType;
  rightNavigator?: NavigatorType;
}) {
  return (
    <div className="w-full flex justify-center mt-16 mb-32">
      <div className="w-11/12 xl:w-4/5 flex justify-between text-xl text-paper font-cormorant">
        {leftNavigator ? (
          <Link
            href={leftNavigator.link}
            className="flex font-bold hover:underline hover:underline-offset-4 duration-200"
          >
            <span className="flex flex-col justify-center">
              <IoIosArrowBack />
            </span>{" "}
            {leftNavigator.text}
          </Link>
        ) : (
          <div></div>
        )}
        {rightNavigator ? (
          <Link
            href={rightNavigator.link}
            className="flex font-bold hover:underline hover:underline-offset-4 duration-200"
          >
            {rightNavigator.text}{" "}
            <span className="flex flex-col justify-center">
              <IoIosArrowForward />
            </span>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
