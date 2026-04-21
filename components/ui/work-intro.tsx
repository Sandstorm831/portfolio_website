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
        <BlurChild delay={200} direction="top">
          <span>
            A brief summary of my Work and Technologies am proficient in
          </span>
        </BlurChild>
      </div>
      <div className="font-normal text-md mb-2">
        <BlurChild delay={300} direction="top">
          <div>
            Backend : NodeJS, ExpressJS, Web-Sockets, PostgreSQL, SocketIO
          </div>
        </BlurChild>
      </div>
      <div className="font-normal text-md mb-2">
        <BlurChild delay={300} direction="top">
          <div>Frontend : ReactJS, NextJS, Tailwind CSS, Framer-Motion</div>
        </BlurChild>
      </div>
    </RootIntro>
  );
}
