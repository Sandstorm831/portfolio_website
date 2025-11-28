import BlurText from "./BlurText";

export default function Intro() {
  return (
    <div className="2xl:h-full max-2xl:w-full 2xl:w-[700px] z-10 text-paper flex 2xl:flex-col 2xl:justify-end 2xl:sticky 2xl:top-0 ">
      <div className="flex justify-end">
        <div className="flex flex-col font-raleway max-2xl:mt-16 mx-8 mb-12">
          <div className="font-medium mb-6 text-md">
            <BlurText text="Rohan Garg" delay={150} direction="bottom" />
          </div>
          <div className="font-normal text-md mb-6">
            <BlurText
              text="Full-Stack Web Developer / Start-Up Focussed Web Expert"
              delay={200}
              direction="bottom"
            />
          </div>
          <div className="font-normal text-md mb-6">
            <a
              href="https://iitr.ac.in"
              rel="noopener noreferer"
              target="_blank"
            >
              <BlurText
                text="IIT Roorkee 2024 Grauate"
                delay={250}
                direction="bottom"
              />
            </a>
          </div>
          <div className="font-normal text-md mb-1">
            <a href="https://nwtl.in" rel="noopener noreferer" target="_blank">
              <BlurText
                text="Currently working as a Technical Advisor at NWTL"
                delay={300}
                direction="bottom"
                className="underline underline-offset-4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
