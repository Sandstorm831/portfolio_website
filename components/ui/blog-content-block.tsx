import { cn } from "@/lib/utils"

export function BlogContentBlock({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("w-full flex justify-center pb-8", className)}>
      <div className="w-4/5 2xl:w-1/2 ">{children}</div>
    </div>
  );
}
