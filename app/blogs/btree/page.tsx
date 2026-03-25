"use client";

import BlogHero from "@/components/ui/blog-hero";
import PageWrapper from "@/components/ui/page-wrapper";
import BlogsNavbar from "@/components/ui/to-blogs-navbar";
import { BlogStats } from "@/types";
import ExcalidrawViewer from "@/components/ExcalidrawWrapper";

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
        <div>
          Befor you go on and assume it&apos;s binary tree, I must tell you that
          there is no full-form for b-trees apart from b-trees itself. Also,
          B-Tree are very different from binary trees themselves. Here&apos;s a
          quick look on the structures of both the trees
        </div>
        <img src={'/blogs/btree/btree.svg'} />
      </div>
    </PageWrapper>
  );
}
