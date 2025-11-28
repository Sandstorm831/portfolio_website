import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex md:flex-col md:justify-between text-paper md:h-full max-md:w-full z-10 max-md:sticky">
      <div className="mt-8 md:mt-12 ml-4 md:ml-8 flex md:flex-col">
        <a
          href="https://www.linkedin.com/in/rohan-garg-1b6b40200/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <CiLinkedin className="max-md:mr-8 md:mb-8 text-2xl cursor-pointer" />
        </a>
        <a
          href="https://x.com/Rodes30947083"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaXTwitter className="max-md:mr-8 md:mb-8 text-2xl cursor-pointer" />
        </a>
        <a
          href="https://github.com/Sandstorm831"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaGithub className="max-md:mr-8 md:mb-8 text-2xl cursor-pointer" />
        </a>
        <div className="w-20 h-0 max-md:mt-2.5 md:h-32 md:w-0 md:ml-2.5  border  border-paper" />
      </div>
      <div className="max-md:hidden text-paper rotate-270 mb-12 ml-6 text-sm font-raleway">
        © 2025
      </div>
    </div>
  );
}
