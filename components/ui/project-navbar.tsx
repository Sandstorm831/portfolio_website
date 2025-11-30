import RootNavbar from "./root-navbar";
import Link from "next/link";

export default function ProjectNavbar() {
  return (
    <RootNavbar backgroundColor="#333031" textColor="paper">
      <Link href="/work">
        <div className="text-paper mb-8 mr-2 ml-4 md:ml-5.5 whitespace-nowrap text-sm font-raleway font-medium">
          <div className="md:rotate-270">WORK</div>
        </div>
      </Link>
    </RootNavbar>
  );
}
