export function BlogContentBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center pt-8 pb-8">
      <div className="w-4/5 2xl:w-1/2 ">{children}</div>
    </div>
  );
}
