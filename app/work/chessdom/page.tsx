"use client";

import ProjectNavbar from "@/components/ui/project-navbar";
import ProjectHero from "@/components/ui/project-hero";
import ProjectBrief from "@/components/ui/project-brief";
import ProjectImageShelf from "@/components/ui/project-image-shelf";
import ProjectTextBlock from "@/components/ui/project-text-block";
import ProjectButton from "@/components/ui/project-button";
import ProjectNavigator from "@/components/ui/project-navigator";

export default function Chessdom() {
  return (
    <div className="flex max-md:flex-col h-screen bg-charcol">
      <ProjectNavbar />
      <div className="flex flex-col h-full w-full overflow-y-scroll no-scrollbar">
        <ProjectHero title="CHESSDOM" />
        <ProjectBrief
          brief="Chessdom is a web-based chess application, whose name comes from combining Chess and Wisdom. You can play with Stockfish (Bot) as well as Online. All the games played Online are stored in a game archive called Hall Of Games"
          responsibilities="Everything, from development to deployment"
          webLink="https://chessdom.vercel.app"
          githubLink="https://github.com/Sandstorm831/chessdom"
          techStack={["NextJS", "ExpressJS", "SocketIO", "Prisma"]}
        />
        <ProjectImageShelf
          images={[
            "/work/chessdom/chessdom1.png",
            "/work/chessdom/chessdom5.png",
          ]}
        />
        <ProjectTextBlock
          text="Live chess gameplay functionalities are handled with the help of a detached Socket.IO server. The server is capable
                of banning any user for sending unexpected responses, persisting and reconciling game states for accidental disconnects,
                saving valid games to the database, handling arbitrary abandonment of the game by any player, and preparing a rematch
                if players agree."
        />
        <ProjectImageShelf
          images={[
            "/work/chessdom/chessdom2.png",
            "/work/chessdom/chessdom3.png",
            "/work/chessdom/chessdom6.png",
          ]}
        />
        <ProjectTextBlock
          text="A web-assembly-based Stockfish engine is used in the current version of the Chessdom app, which enables multi-threaded
                nature by utilizing multiple web-workers. Earlier version had a server-based Stockfish engine, but due to scaling issues
                and issues of longer response times between the moves, the WASM engine is selected."
        />
        <ProjectImageShelf
          images={[
            "/work/chessdom/chessdom4.png",
            "/work/chessdom/chessdom7.png",
          ]}
        />
        <ProjectButton
          buttonText="Checkt it out"
          link="https://chessdom.vercel.app"
        />
        <ProjectNavigator
          leftNavigator={{ text: "NWTL", link: "/work/nwtl" }}
          rightNavigator={{text: "XYZ-LAW", link: "/work/xyz-law"}}
        />
      </div>
    </div>
  );
}
