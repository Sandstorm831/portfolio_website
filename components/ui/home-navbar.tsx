import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import RootNavbar from "./root-navbar";

export default function HomeNavbar() {
  return (
    <RootNavbar backgroundColor="#333031" textColor="paper">
      <a
        href="https://www.linkedin.com/in/rohan-garg-1b6b40200/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <CiLinkedin className="max-md:mr-8 md:mb-8 text-2xl cursor-pointer ml-4 md:ml-8" />
      </a>
      <a
        href="https://x.com/Rodes30947083"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaXTwitter className="max-md:mr-8 md:mb-8 text-2xl cursor-pointer ml-4 md:ml-8" />
      </a>
      <a
        href="https://github.com/Sandstorm831"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaGithub className="max-md:mr-8 md:mb-8 text-2xl cursor-pointer ml-4 md:ml-8" />
      </a>
    </RootNavbar>
  );
}
