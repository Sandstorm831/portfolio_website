import { Blog } from "@/types";
import { motion } from "motion/react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function BlogCard({
  blog,
  index,
}: {
  blog: Blog;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      className=" text-charcol py-6 md:pr-6 rounded-lg flex flex-col justify-between"
    >
      <div>
        <div className="font-cormorant text-3xl mb-2">{blog.title}</div>
        <p className="font-raleway text-md mb-4">{blog.description}</p>
      </div>
      {blog.type === "internal" ? (
        <Link href={`/blogs/${blog.slug}`}>
          <div className="flex font-raleway text-md mt-4 text-charcol cursor-pointer">
            <span className="hover:underline hover:underline-offset-2">
              Read More
            </span>
            &nbsp;&nbsp;
            <span className="flex flex-col justify-center font-light hover:underline">
              <IoIosArrowRoundForward />
            </span>
          </div>
        </Link>
      ) : (
        <a href={blog.link} rel="noopener noreferrer" target="_blank">
          <div className="flex font-raleway text-md mt-4 text-charcol cursor-pointer">
            <span className="hover:underline hover:underline-offset-2">
              Read More
            </span>
            &nbsp;&nbsp;
            <span className="flex flex-col justify-center font-light hover:underline">
              <IoIosArrowRoundForward />
            </span>
          </div>
        </a>
      )}
    </motion.div>
  );
}
