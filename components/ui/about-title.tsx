import BlurText from "./BlurText";

export default function AboutTitle({ title }: { title: string }) {
  return (
    <div className="text-7xl ssm:text-9xl md:text-[150px] xlg:text-[180px] text-charcol font-cormorant ml-8 md:mt-32 md:ml-12 xl:ml-28">
      <BlurText text={title} />
    </div>
  );
}
