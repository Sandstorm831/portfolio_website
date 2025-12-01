import { MapItem } from "@/types";
import RootMapper from "./root-mapper";

export default function WorkMapper({ textColor }: { textColor: string }) {
  const mapItems: MapItem[] = [
    {
      title: "NWTL",
      link: "/work/nwtl",
      delay: 150,
      subtitle: "NextJS",
    },
    {
      title: "CHESSDOM",
      link: "/work/chessdom",
      delay: 200,
      subtitle: "NextJS, ExpressJS, SocketIO",
    },
  ];
  return (
    <RootMapper textColor={textColor} mapItems={mapItems} direction="top" />
  );
}
