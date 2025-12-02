"use client";

import PageTransition from "@/components/ui/page-transition";
import ToWorkNavbar from "@/components/ui/to-work-navbar";
import AboutTitle from "@/components/ui/about-title";
import { Blog } from "@/types";
import BlogCard from "@/components/ui/blog-card";

const blogs: Blog[] = [
  {
    title: "Password Cracking",
    description:
      "Exploring the realm of password cracking and how some state-of-the-art password crackers and work",
    link: "https://medium.com/vlgiitr/password-cracking-1b14e0844404",
    type: "external",
  },
  {
    title: "Optimizer: diving deep into Neural Networks",
    description:
      "A deep dive into optimizers used in machine learning, deep learning and LLMs",
    link: "https://medium.com/vlgiitr/optimizer-diving-into-deep-neural-networks-94a6ee28f7c5",
    type: "external",
  },
  {
    title: "ResNet-50",
    description: "The complete guide to working of ResNet-50 neural network",
    link: "https://medium.com/@gargrohan138/resnet-50-810cf6f02799",
    type: "external",
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
            <BlogCard index={index} blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
