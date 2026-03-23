"use client";

import BlogHero from "@/components/ui/blog-hero";
import PageWrapper from "@/components/ui/page-wrapper";
import BlogsNavbar from "@/components/ui/to-blogs-navbar";
import { BlogStats } from "@/types";

const stats: BlogStats = {
  date: new Date("2026-04-18T01:01:01Z"),
  badge: "algorithm",
  timeToRead: 15,
};


export default function BTree() {
  return (
    <PageWrapper color="bg-charcol">
      <BlogsNavbar />
      <div className="flex flex-col h-full w-full overflow-y-scroll no-scrollbar">
        <BlogHero title="B-Tree" stats={stats} />
      </div>
    </PageWrapper>
  );
}
