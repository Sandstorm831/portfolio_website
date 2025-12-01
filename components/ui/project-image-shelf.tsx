export default function ProjectImageShelf({ images }: { images: string[] }) {
  return (
    <>
      {images.map((imageStr, idx) => {
        return (
          <div key={idx} className="w-full flex justify-center mt-8">
            <div className="w-11/12 xl:w-4/5">
              <img src={imageStr} />
            </div>
          </div>
        );
      })}
    </>
  );
}
