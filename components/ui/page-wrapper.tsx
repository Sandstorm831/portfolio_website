import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function PageWrapper({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <div className={cn("flex max-md:flex-col h-dvh bg-paper", color)}>
      {children}
    </div>
  );
}
