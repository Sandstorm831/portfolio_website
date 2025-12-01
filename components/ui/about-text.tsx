import { motion } from "motion/react";

export default function AboutText({
  paras,
  imgStr,
}: {
  paras: string[];
  imgStr: string;
}) {
  return (
    <div className="flex max-lg:flex-col w-full justify-between mt-2">
      <div className="text-md text-charcol font-raleway w-full max-md:px-8 md:ml-12 xl:ml-28 md:w-4/5 xl:w-3/5 mr-4 max-md:mb-8 flex flex-col">
        {paras.map((para, idx) => {
          return (
            <span key={idx} className="mt-6">
              {para}
            </span>
          );
        })}
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-[300px]">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <img src={imgStr} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
