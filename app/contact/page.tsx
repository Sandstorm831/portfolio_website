"use client";

import PageTransition from "@/components/ui/page-transition";
import ToWorkNavbar from "@/components/ui/to-work-navbar";
import ContactLinks from "@/components/ui/contact-links";
import ContactText from "@/components/ui/contact-text";
import ContactTitle from "@/components/ui/contact-title";

export default function About() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <PageTransition baseColor={"bg-paper"} direction="top" />
      <ToWorkNavbar />
      <div className="z-10 flex flex-col h-full w-full overflow-y-scroll no-scrollbar pb-32">
        <div className="w-full flex flex-col">
          <ContactTitle title="Hello." />
          <ContactText text="Good design needn't be complicated — let's talk about yours." />
          <ContactLinks
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
