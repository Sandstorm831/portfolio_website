"use client";

import BlogHero from "@/components/ui/blog-hero";
import BlogsNavbar from "@/components/ui/to-blogs-navbar";

export default function BTree() {
  return (
    <div className="flex max-md:flex-col h-dvh bg-charcol">
      <BlogsNavbar />
      <div className="flex flex-col h-full w-full overflow-y-scroll no-scrollbar">
        <BlogHero title="B-Tree" />
      </div>
    </div>
  );
}
