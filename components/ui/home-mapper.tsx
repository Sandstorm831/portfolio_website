export default function HomeMapper() {
  return (
    <div className="2xl:h-full max-2xl:w-full z-10 text-paper flex 2xl:flex-col 2xl:justify-start">
      <div className="flex flex-col font-cormorant mb-12 2xl:mb-32 mt-16 mx-8 2xl:mx-24">
        <Item title="WORK" link="/" />
        <Item title="ABOUT" link="/" />
        <Item title="CONTACT" link="/" />
        <Item title="BLOGS" link="/" />
      </div>
    </div>
  );
}

function Item({ title, link }: { title: string; link: string }) {
  return (
    <div className="font-medium text-7xl sm:text-8xl md:text-[120px] lg:text-[180px] xl:text-[220px] cursor-pointer origin-[0%_85%] hover:scale-y-120 duration-300 leading-none hover:duration-150 mb-8">
      {title}
    </div>
  );
}
