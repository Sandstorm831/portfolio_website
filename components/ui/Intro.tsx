export default function Intro() {
  return (
    <div className="2xl:h-full max-2xl:w-full 2xl:w-[700px] z-10 text-paper flex 2xl:flex-col 2xl:justify-end 2xl:sticky 2xl:top-0 ">
      <div className="flex justify-end">
        <div className="flex flex-col font-raleway max-2xl:mt-16 mx-8 mb-12">
          <div className="font-medium mb-6 text-md">Rohan Garg</div>
          <div className="font-normal text-md mb-6">
            Full-Stack Web Developer / Start-Up Focussed Web Expert
          </div>
          <div className="font-normal text-md mb-6">
            IIT Roorkee 2024 Grauate
          </div>
          <div className="font-normal text-md mb-6">
            Currently working as a Technical Advisor at{" "}
            <a
              href="https://nwtl.in"
              rel="noopener noreferer"
              target="_blank"
              className="underline underline-offset-4"
            >
              NWTL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
