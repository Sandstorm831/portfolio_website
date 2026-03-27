import { cn } from "@/lib/utils";
import { BlogContentBlock } from "./blog-content-block";

export default function BlogTextBlock({
  children,
  textColor = "text-paper",
}: {
  children: React.ReactNode;
  textColor: string;
}) {
  return (
    <BlogContentBlock>
      <div
        className={cn(
          "w-full text-lg lg:text-xl font-raleway",
          textColor,
        )}
      >
        {children}
      </div>
    </BlogContentBlock>
  );
}
