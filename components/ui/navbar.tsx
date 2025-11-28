import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex md:flex-col md:justify-between text-paper md:h-full max-md:w-full z-10">
      <div className="mt-8 md:mt-12 ml-4 md:ml-8 flex md:flex-col">
        <CiLinkedin className="max-md:mr-8 md:mb-8 text-2xl" />
        <FaXTwitter className="max-md:mr-8 md:mb-8 text-2xl" />
        <FaGithub className="max-md:mr-8 md:mb-8 text-2xl" />
        <div className="w-20 h-0 max-md:mt-2.5 md:h-32 md:w-0 md:ml-2.5  border  border-paper" />
      </div>
      <div className="max-md:hidden text-paper rotate-270 mb-12 ml-6 text-sm">
        © 2025
      </div>
    </div>
  );
}
