import BlurText from "./BlurText";

export default function ContactText({ text }: { text: string }) {
  return (
    <div className="ml-8 md:ml-24 lg:ml-36 xl:ml-52 2xl:ml-64 mt-8 mr-8 md:mr-24 font-raleway text-lg text-charcol">
      <BlurText text={text} delay={250} />
    </div>
  );
}
