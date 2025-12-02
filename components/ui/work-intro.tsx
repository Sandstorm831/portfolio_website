import BlurChild from "./BlurChild";
import BlurText from "./BlurText";
import RootIntro from "./root-intro";

export default function WorkIntro() {
  return (
    <RootIntro textColor="charcol">
      <div className="font-medium mb-6 text-md">
        <BlurText text="WORK" delay={150} direction="top" />
      </div>
      <div className="font-normal text-md mb-6">
        <BlurText
          text="Here is a showcase of my best work in Full-Stack Web Development."
          delay={200}
          direction="top"
        />
      </div>
      <div className="font-normal text-md mb-6">
        <BlurChild delay={250} direction="top">
          <span>Technologies I&apos;ve used and am Proficient in</span>
        </BlurChild>
      </div>
      <div className="font-normal text-md mb-2">
        <BlurChild delay={300} direction="top">
          <div>Frontend : ReactJS, NextJS, Tailwind CSS, Framer-Motion</div>
        </BlurChild>
      </div>
      <div className="font-normal text-md mb-2">
        <BlurChild delay={300} direction="top">
          <div>Backend : NodeJS, ExpressJS, Prisma, SocketIO</div>
        </BlurChild>
      </div>
    </RootIntro>
  );
}
