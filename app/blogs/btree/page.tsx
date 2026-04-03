"use client";

import { ListItem } from "@/components/compounds/list-items";
import { BlogContentBlock } from "@/components/ui/blog-content-block";
import BlogHero from "@/components/ui/blog-hero";
import BlogImageBlock from "@/components/ui/blog-image-block";
import BlogSectionHeading from "@/components/ui/blog-section-heading";
import BlogTextBlock from "@/components/ui/blog-text-block";
import { InlineCodeBlock } from "@/components/ui/inline-code-block";
import PageWrapper from "@/components/ui/page-wrapper";
import BlogsNavbar from "@/components/ui/to-blogs-navbar";
import { BlogStats, ListItemArrayProps } from "@/types";

const stats: BlogStats = {
  date: new Date("2026-04-18T01:01:01Z"),
  badge: "algorithm",
  timeToRead: 15,
};

const BTREE_TERMS: ListItemArrayProps = [
  {
    code: "keys",
    label: "Number of elements a node holds",
    imageSrc: "/blogs/btree/btree_keys.svg",
    imageAlt: "keys",
  },
  {
    code: "children",
    label: "nodes that a given node points to via its child pointers.",
    imageSrc: "/blogs/btree/btree_child.svg",
    imageAlt: "children",
  },
  {
    code: "root node",
    label: "node of the tree that doesn't have any parent nodes",
    imageSrc: "/blogs/btree/btree_root.svg",
    imageAlt: "root node",
  },
  {
    code: "leaf node",
    label: "node of the tree that doesn't have any child nodes",
    imageSrc: "/blogs/btree/btree_leaf.svg",
    imageAlt: "leaf node",
  },
  {
    code: "degree",
    label: (
      <>
        This defines minimum and maximum number of{" "}
        <InlineCodeBlock>keys</InlineCodeBlock> and{" "}
        <InlineCodeBlock>children</InlineCodeBlock> a node can hold.
      </>
    ),
    bullets: [
      {
        code: "degree - 1",
        label: "minimum number of keys a node must have (except root node)",
      },
      {
        code: "2 x degree - 1",
        label: "maximum number of keys a node can have",
      },
      {
        code: "2 x degree",
        label: "maximum number of children a node can have",
      },
      { code: "keys + 1", label: "number of children a node have" },
    ],
  },
  {
    code: "self-balancing tree",
    label:
      "insertion and deletion works in such a way the all the leaf nodes always remain at the same level",
  },
];

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
          <ListItem listItemProps={BTREE_TERMS} textColor="text-paper" />
        </BlogContentBlock>
      </div>
    </PageWrapper>
  );
}
