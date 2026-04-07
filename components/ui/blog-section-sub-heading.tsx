import { cn } from "@/lib/utils";

export default function BlogSectionSubHeading({
  textColor,
  subHeading,
}: {
  textColor: string;
  subHeading: string;
}) {
  return (
    <div className="w-full flex justify-center pb-2">
      <div
        className={cn(
          "w-4/5 2xl:w-1/2 font-bold text-xl md:text-3xl pt-2 font-cormorant",
          textColor,
        )}
      >
        {subHeading}
      </div>
    </div>
  );
}
