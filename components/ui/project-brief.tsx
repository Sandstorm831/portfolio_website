export default function ProjectBrief({
  brief,
  responsibilities,
  webLink,
  githubLink,
}: {
  brief: string;
  responsibilities: string;
  webLink: string;
  githubLink?: string;
}) {
  return (
    <>
      <div className="w-full flex justify-center mt-24">
        <div className="w-4/5 md:w-3/5 xl:w-1/2 text-5xl text-paper font-cormorant">
          {brief}
        </div>
      </div>
      <div className="w-full flex justify-center mt-16 mb-16">
        <div className="w-4/5 md:w-3/5 xl:w-1/2 flex max-md:flex-col justify-between">
          <div className="w-full md:w-3/5 xl:w-2/4 text-md text-paper font-raleway flex flex-col mr-5">
            <div className="font-bold">RESPONSIBILITIES</div>
            <div>{responsibilities}</div>
          </div>
          <div className="w-full md:w-1/5 xl:w-1/4 text-md text-paper font-raleway flex flex-col">
            <div className="font-bold flex md:justify-end max-md:mt-8">URL</div>
            <a
              href={webLink}
              className="flex md:justify-end underline underline-offset-4"
            >
              Website
            </a>
            {githubLink ? (
              <a
                href={githubLink}
                className="flex md:justify-end underline underline-offset-4"
              >
                Gitub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
