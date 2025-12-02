export default function ProjectBrief({
  brief,
  responsibilities,
  webLink,
  githubLink,
  techStack,
}: {
  brief: string;
  responsibilities: string;
  webLink: string;
  githubLink?: string;
  techStack: string[];
}) {
  return (
    <>
      <div className="w-full flex justify-center mt-24">
        <div className="w-4/5 2xl:w-1/2 text-3xl md:text-5xl text-paper font-cormorant ">
          {brief}
        </div>
      </div>
      <div className="w-full flex justify-center mt-16 mb-3 md:mb-8">
        <div className="w-4/5 2xl:w-1/2 flex max-md:flex-col justify-between">
          <div className="w-full md:w-2/5 xl:w-2/4 text-md text-paper font-raleway flex flex-col mr-5">
            <div className="font-bold">RESPONSIBILITIES</div>
            <div>{responsibilities}</div>
          </div>
          <div className="w-full md:w-1/5 xl:w-1/4 text-md text-paper font-raleway flex flex-col mr-5">
            <div className="font-bold flex md:justify-end max-md:mt-8">URL</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={webLink}
              className="flex md:justify-end underline underline-offset-4"
            >
              Website
            </a>
            {githubLink ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={githubLink}
                className="flex md:justify-end underline underline-offset-4"
              >
                Github
              </a>
            ) : null}
          </div>
          <div className="w-full md:w-1/5 xl:w-1/4 text-md text-paper font-raleway flex flex-col">
            <div className="font-bold flex md:justify-end max-md:mt-8">
              TECH-STACK
            </div>
            {techStack.map((item, idx) => {
              return (
                <div key={idx} className="flex md:justify-end">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
