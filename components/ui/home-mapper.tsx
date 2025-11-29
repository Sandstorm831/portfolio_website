import { MapItem } from "@/types";
import RootMapper from "./root-mapper";

export default function HomeMapper({ textColor }: { textColor: string }) {
  const mapItems: MapItem[] = [
    { title: "WORK", link: "/work", delay: 150 },
    { title: "ABOUT", link: "/", delay: 200 },
    { title: "CONTACT", link: "/", delay: 250 },
    { title: "BLOGS", link: "/", delay: 300 },
  ];
  return (
    <RootMapper textColor={textColor} mapItems={mapItems} direction="bottom" />
  );
}
