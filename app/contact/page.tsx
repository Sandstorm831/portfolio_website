"use client";

import BlurChild from "@/components/ui/BlurChild";
import PageTransition from "@/components/ui/page-transition";
import ToWorkNavbar from "@/components/ui/to-work-navbar";
import { SocialType } from "@/types";
import { motion } from "motion/react";
import BlurText from "@/components/ui/BlurText";
import { RevealText } from "@/components/ui/reveal-text";

export default function About() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <PageTransition baseColor={"bg-paper"} direction="top" />
      <ToWorkNavbar />
      <div className="z-10 flex flex-col h-full w-full overflow-y-scroll no-scrollbar pb-32">
        <div className="w-full flex flex-col">
          <ContactTitle title="Hello." />
          <ContactText text="Good design needn't be complicated — let's talk about yours." />
          <ContactMailAndSocials
            email="gargrohan831@gmail.com"
            socials={[
              {
                name: "Linkedin",
                link: "https://www.linkedin.com/in/rohan-garg-1b6b40200/",
              },
              { name: "X(Twitter)", link: "https://x.com/Rodes30947083" },
              { name: "GitHub", link: "https://github.com/Sandstorm831" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export function ContactTitle({ title }: { title: string }) {
  return (
    <div className="text-[100px] leading-none sm:text-[150px] md:text-[180px] xl:text-[225px] 2xl:text-[250px] text-charcol font-cormorant ml-8 md:ml-24 lg:ml-36 xl:ml-52 2xl:ml-64 md:mt-32 lg:mt-40 xl:mt-48 2xl:mt-64 overflow-hidden">
      <RevealText duration={0.6} delay={0.3}>
        {title}
      </RevealText>
    </div>
  );
}

export function ContactText({ text }: { text: string }) {
  return (
    <div className="ml-8 md:ml-24 lg:ml-36 xl:ml-52 2xl:ml-64 mt-8 mr-8 md:mr-24 font-raleway text-lg text-charcol">
      <BlurText text={text} delay={250} />
    </div>
  );
}

export function ContactMailAndSocials({
  email,
  socials,
}: {
  email: string;
  socials: SocialType[];
}) {
  return (
    <div className="flex flex-col ml-8 md:ml-24 lg:ml-36 xl:ml-52 2xl:ml-64 mt-8 mr-8 md:mr-24 font-raleway text-lg text-charcol">
      <div>
        <BlurChild delay={300}>
          Email :&nbsp;
          <a
            className="underline underline-offset-2 hover:cursor-pointer hover:underline-offset-6 origin-bottom duration-200"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </BlurChild>
      </div>
      <div className="mt-1">
        <BlurChild delay={350}>
          Socials :&nbsp;
          {socials.map((social, idx) => {
            return (
              <span key={idx}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:cursor-pointer hover:underline-offset-4 origin-bottom duration-200"
                >
                  {social.name}
                </a>
                {idx === socials.length - 1 ? null : <span>,&nbsp;</span>}
              </span>
            );
          })}
        </BlurChild>
      </div>
    </div>
  );
}
