"use client";

import PageTransition from "@/components/ui/page-transition";
import ToWorkNavbar from "@/components/ui/to-work-navbar";
import AboutTitle from "@/components/ui/about-title";
import { motion } from "motion/react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const blogs = [
  {
    title: "The Art of Simplicity in Design",
    description:
      "Exploring how minimalism and simplicity can lead to more effective and beautiful user experiences.",
    slug: "art-of-simplicity",
    date: "December 1, 2025",
  },
  {
    title: "Animating with Framer Motion",
    description:
      "A deep dive into creating fluid and engaging animations in React applications using Framer Motion.",
    slug: "animating-with-framer-motion",
    date: "November 15, 2025",
  },
  {
    title: "Crafting a Design System",
    description:
      "The complete guide to building a cohesive and scalable design system from scratch.",
    slug: "crafting-a-design-system",
    date: "October 28, 2025",
  },
  {
    title: "Typography in Modern Web Design",
    description:
      "How to choose and use typography to create readable, accessible, and beautiful websites.",
    slug: "typography-in-modern-web-design",
    date: "October 10, 2025",
  },
];

export default function BlogsPage() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <PageTransition baseColor={"bg-paper"} direction="top" />
      <ToWorkNavbar />
      <div className="z-10 flex flex-col h-full w-full overflow-y-scroll no-scrollbar pb-32">
        <AboutTitle title="Blogs." />
        <div className="ml-8 md:ml-12 xl:ml-28 mr-8 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
              index={index}
              target="_blank"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({
  blog,
  index,
  target,
}: {
  blog: (typeof blogs)[0];
  index: number;
  target: "_self" | "_blank";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      className=" text-charcol py-6 md:pr-6 rounded-lg flex flex-col justify-between"
    >
      <div>
        <h3 className="font-cormorant text-2xl mb-2">{blog.title}</h3>
        <p className="font-raleway text-sm mb-4">{blog.description}</p>
      </div>
      <Link
        href={`/blogs/${blog.slug}`}
        rel="noopener noreferrer"
        target={target}
      >
        <div className="flex font-raleway text-sm mt-4 text-charcol cursor-pointer">
          <span className="hover:underline hover:underline-offset-2 duration-200">
            Read More
          </span>
          &nbsp;&nbsp;
          <span className="flex flex-col justify-center font-light hover:underline">
            <IoIosArrowRoundForward />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
