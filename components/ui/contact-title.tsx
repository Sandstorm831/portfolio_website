import { RevealText } from "./reveal-text";

export default function ContactTitle({ title }: { title: string }) {
  return (
    <div className="text-[100px] leading-none sm:text-[150px] md:text-[180px] xl:text-[225px] 2xl:text-[250px] text-charcol font-cormorant ml-8 md:ml-24 lg:ml-36 xl:ml-52 2xl:ml-64 md:mt-32 lg:mt-40 xl:mt-48 2xl:mt-64 overflow-hidden">
      <RevealText duration={0.6} delay={0.3}>
        {title}
      </RevealText>
    </div>
  );
}
