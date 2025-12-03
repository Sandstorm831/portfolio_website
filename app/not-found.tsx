import Link from "next/link";

export default function NotFound() {
  return (
    <div className={`flex flex-col h-screen bg-charcol`}>
      <div className="flex max-md:flex-col md:ml-24 lg:ml-36 xl:ml-52 2xl:ml-64 mt-32 lg:mt-40 xl:mt-48 2xl:mt-64">
        <div className="max-md:flex max-md:justify-center text-[110px] xmd:text-[120px] lg:text-[150px] xlg:text-[180px] font-cormorant text-paper leading-normal">
          Oops.
        </div>
        <div className="flex flex-col md:h-full md:justify-end">
          <div className="flex max-md:justify-center overflow-hidden font-raleway text-paper md:pb-8 md:pl-8">
            This page does not exist.&nbsp;&nbsp;
            <Link
              href="/"
              className="underline underline-offset-2 hover:underline-offset-5 origin-bottom duration-200 font-bold"
            >
              GO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
