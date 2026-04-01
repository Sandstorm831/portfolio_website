"use client";

import { BlogContentBlock } from "@/components/ui/blog-content-block";
import BlogHero from "@/components/ui/blog-hero";
import BlogImageBlock from "@/components/ui/blog-image-block";
import BlogSectionHeading from "@/components/ui/blog-section-heading";
import BlogTextBlock from "@/components/ui/blog-text-block";
import PageWrapper from "@/components/ui/page-wrapper";
import BlogsNavbar from "@/components/ui/to-blogs-navbar";
import { BlogStats } from "@/types";

const stats: BlogStats = {
  date: new Date("2026-04-18T01:01:01Z"),
  badge: "algorithm",
  timeToRead: 15,
};

function InlineCodeBlock({ children }: { children: string }) {
  return (
    <code className="bg-[#1E1E2E] text-paper rounded px-1.5 pt-1 font-mono font-medium">
      {children}
    </code>
  );
}

export default function BTree() {
  return (
    <PageWrapper color="bg-charcol">
      <BlogsNavbar />
      <div className="flex flex-col h-full w-full overflow-y-scroll no-scrollbar">
        <BlogHero title="B-Tree" stats={stats} />
        <BlogTextBlock textColor="text-paper">
          Befor you go on and assume it&apos;s full form as Binary tree, I must
          tell you that there is no full-form for B-trees apart from B-trees
          itself. Also, B-Tree are very different from Binary trees themselves.
          Here&apos;s a quick look on the structures of both the trees.
        </BlogTextBlock>
        <BlogImageBlock
          src="/blogs/btree/btree.svg"
          alt="Btree-vs-BinaryTree"
          description="structural differences between a Binary-Tree and a B-Tree"
        />
        <BlogTextBlock textColor="text-paper">
          Now you understand that B-trees are not Binary tree, we can proceed to
          understand that what are they fundamentally, what is their function
          and why they are needed at the first place.
        </BlogTextBlock>
        <BlogSectionHeading
          textColor="text-paper"
          heading="What is B-Trees ?"
        />
        <BlogTextBlock textColor="text-paper">
          Fundamentally, B-Tree is also a data-structure to store data in way
          that makes it favourable in certain use cases. Here each node stores
          more than <span className="font-mono">1</span> element and each node
          points to{" "}
          <span className="font-mono px-1">
            1 + (number of elements in that node)
          </span>{" "}
          children with root node can be an exception. B-tree is constructed in
          such a manner that all the elements in the child node which is left of
          an element are smaller than that element and the all the element in
          the child node which is right to the element is bigger than that
          element. While elements are themselves sorted in a node.
        </BlogTextBlock>
        <BlogImageBlock
          src="/blogs/btree/btree_struct.svg"
          alt="structure of btree"
          description="comparison of elements and children"
        />
        <BlogContentBlock>
          <div className="w-full text-lg lg:text-xl font-raleway text-paper">
            Here are a few structural characteristics that every b-tree follows
          </div>
          <ol className="pl-2 pt-4">
            <li className="text-md lg:text-ld text-paper gap-x-1">
              1.&nbsp; <InlineCodeBlock>degree</InlineCodeBlock> :&nbsp; This
              defines minimum and maximum number of{" "}
              <InlineCodeBlock>keys</InlineCodeBlock> and{" "}
              <InlineCodeBlock>children</InlineCodeBlock> a node can hold.
              <ol className="pl-4 pt-2">
                <li className="text-md lg:text-ld text-paper gap-x-1">
                  •&nbsp; <InlineCodeBlock>degree - 1</InlineCodeBlock> : &nbsp;
                  minimum number of <InlineCodeBlock>keys</InlineCodeBlock> a
                  node must have
                </li>
                <li className="text-md lg:text-ld text-paper gap-x-1">
                  •&nbsp; <InlineCodeBlock>2 x degree - 1</InlineCodeBlock> :
                  &nbsp; maximum number of{" "}
                  <InlineCodeBlock>keys</InlineCodeBlock> a node can have
                </li>
                <li className="text-md lg:text-ld text-paper gap-x-1">
                  •&nbsp; <InlineCodeBlock>2 x degree</InlineCodeBlock> : &nbsp;
                  maximum number of <InlineCodeBlock>children</InlineCodeBlock>{" "}
                  a node can have
                </li>
                <li className="text-md lg:text-ld text-paper gap-x-1">
                  •&nbsp; <InlineCodeBlock>keys + 1</InlineCodeBlock> : &nbsp;
                  number of <InlineCodeBlock>children</InlineCodeBlock> a node
                  have
                </li>
              </ol>
            </li>
          </ol>
        </BlogContentBlock>
      </div>
    </PageWrapper>
  );
}
