export default function ProjectTextBlock({ text }: { text: string }) {
  return (
    <div className="w-full flex justify-center mt-16 mb-8">
      <div className="w-4/5 2xl:w-1/2 text-lg text-paper font-raleway">
        {text}
      </div>
    </div>
  );
}
