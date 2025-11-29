import Link from "next/link";
import BlurText from "./BlurText";

export default function HomeMapper() {
  return (
    <div className="2xl:h-full max-2xl:w-full z-10 text-paper flex 2xl:flex-col 2xl:justify-start">
      <div className="flex flex-col font-cormorant mb-12 2xl:mb-32 mt-8 mx-8 2xl:mx-24">
        <Item title="WORK" link="/work" delay={150} />
        <Item title="ABOUT" link="/" delay={200} />
        <Item title="CONTACT" link="/" delay={250} />
        <Item title="BLOGS" link="/" delay={300} />
      </div>
    </div>
  );
}

function Item({
  title,
  link,
  delay,
}: {
  title: string;
  link: string;
  delay: number;
}) {
  return (
    <Link
      href={link}
      className="font-medium text-6xl sm:text-8xl md:text-[120px] lg:text-[180px] xl:text-[220px] cursor-pointer origin-[0%_85%] hover:scale-y-110 duration-300 leading-none hover:duration-150"
    >
      <BlurText text={title} delay={delay} direction="bottom" />
    </Link>
  );
}
