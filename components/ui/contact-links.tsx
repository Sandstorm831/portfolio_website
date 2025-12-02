import { SocialType } from "@/types";
import BlurChild from "./BlurChild";

export default function ContactLinks({
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
