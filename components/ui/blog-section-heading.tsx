import { cn } from "@/lib/utils";

export default function BlogSectionHeading({
  textColor,
  heading,
}: {
  textColor: string;
  heading: string;
}) {
  return (
    <div className="w-full flex justify-center pb-5">
      <div
        className={cn(
          "w-4/5 2xl:w-1/2 font-bold text-3xl md:text-5xl pt-4 font-cormorant",
          textColor,
        )}
      >
        {heading}
      </div>
    </div>
  );
}
