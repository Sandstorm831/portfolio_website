import RootNavbar from "./root-navbar";
import Link from "next/link";

export default function BlogsNavbar() {
  return (
    <RootNavbar backgroundColor="#333031" textColor="paper">
      <Link href="/blogs">
        <div className="text-paper mb-8 mr-2 ml-4 md:ml-5.5 whitespace-nowrap text-sm font-raleway font-medium">
          <div className="md:rotate-270">BLOGS</div>
        </div>
      </Link>
    </RootNavbar>
  );
}
