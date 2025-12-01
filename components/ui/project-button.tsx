import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ProjectButton({
  buttonText,
  link,
}: {
  buttonText: string;
  link: string;
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="w-full flex justify-center mt-16 mb-8">
      <div className="w-4/5 2xl:w-1/2 flex justify-center text-lg text-paper font-cormorant mr-4">
        <motion.div
          ref={ref}
          initial={{ y: "40%", opacity: 0 }}
          animate={
            isVisible
              ? { y: "0%", opacity: 100, transition: { duration: 0.3 } }
              : { y: "40%", opacity: 0, transition: { duration: 0.1 } }
          }
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferer"
            className="bg-paper text-charcol rounded-full py-3 px-6 font-medium text-2xl flex hover:scale-105 hover:cursor-pointer duration-200"
          >
            {buttonText}&nbsp;{" "}
            <span className="flex flex-col justify-center font-light">
              <IoIosArrowRoundForward />
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
