export default function AboutExperience({ points }: { points: string[] }) {
  return (
    <div className="flex flex-col w-full justify-between mt-8">
      <div className="text-3xl font-bold text-charcol font-cormorant w-full ml-8 max-md:mr-8 md:ml-12 xl:ml-28 md:w-4/5 xl:w-3/5 mr-4 ">
        EXPERIENCE
      </div>
      <div className="flex flex-col font-raleway mt-4 text-xl max-md:px-8 md:ml-12 xl:ml-28 w-full md:w-4/5 xl:w-3/5">
        {points.map((point, idx) => {
          return <div key={idx}>• &nbsp;&nbsp;{point}</div>;
        })}
      </div>
    </div>
  );
}
