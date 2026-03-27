/* eslint-disable @next/next/no-img-element */
export default function BlogImageBlock({
  src,
  alt,
  description,
}: {
  src: string;
  alt: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-2 w-full items-center pb-8">
      <img src={src} className="w-11/12 lg:w-4/5 rounded-lg" alt={alt} />
      {description && (
        <div className="w-5/6 lg:w-3/4 flex justify-center">
          <p className="text-paper/80 text-lg font-raleway w-fit">{description}</p>
        </div>
      )}
    </div>
  );
}
