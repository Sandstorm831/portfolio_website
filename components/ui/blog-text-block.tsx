import { cn } from "@/lib/utils";
import { BlogContentBlock } from "./blog-content-block";

export default function BlogTextBlock({
  children,
  textColor = "text-paper",
  className
}: {
  children: React.ReactNode;
  textColor: string;
  className?: string
}) {
  return (
    <BlogContentBlock className={className}>
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
