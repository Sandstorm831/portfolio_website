import BlurChild from "./BlurChild";
import BlurText from "./BlurText";
import RootIntro from "./root-intro";

export default function HomeIntro() {
  return (
    <RootIntro textColor="paper">
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
        <BlurChild delay={250} direction="bottom">
          <span>
            <a
              href="https://iitr.ac.in"
              rel="noopener noreferer"
              target="_blank"
              className="underline underline-offset-4"
            >
              IIT Roorkee
            </a>{" "}
            2024 Grauate
          </span>
        </BlurChild>
      </div>
      <div className="font-normal text-md mb-1">
        <BlurChild delay={300} direction="bottom">
          <span>
            Currently working as a Technical Advisor at &nbsp;
            <a
              href="https://nwtl.in"
              rel="noopener noreferer"
              target="_blank"
              className="underline underline-offset-4"
            >
              NWTL
            </a>
          </span>
        </BlurChild>
      </div>
    </RootIntro>
  );
}
