import RootNavbar from "./root-navbar";
import Link from "next/link";

export default function WorkNavbar() {
  return (
    <RootNavbar backgroundColor="#EAE0D5" textColor="charcol">
      <Link href="/">
        <div className="text-charcol mb-8 mr-2 ml-4 md:ml-5.5 whitespace-nowrap text-sm font-raleway font-medium">
          <div className="md:rotate-270">HOME</div>
        </div>
      </Link>
    </RootNavbar>
  );
}
