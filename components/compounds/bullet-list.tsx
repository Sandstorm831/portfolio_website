import { cn } from "@/lib/utils";
import { BulletItem, BulletListProps } from "@/types";
import { InlineCodeBlock } from "../ui/inline-code-block";

function Bullet({ code, label, textColor }: BulletItem) {
  return (
    <li className={cn("text-md lg:text-lg  gap-x-1", textColor)}>
      <div className="flex">
        •
        <div className="w-full pl-2">
          <InlineCodeBlock>{code}</InlineCodeBlock> :&nbsp;{label}
        </div>
      </div>
    </li>
  );
}

export function BulletList({
  bullets,
  textColor,
}: {
  bullets: BulletListProps;
  textColor: string;
}) {
  return (
    bullets &&
    bullets.length > 0 && (
      <ul className="pl-5 pt-1">
        {bullets.map((bullet) => (
          <Bullet key={bullet.code} textColor={textColor} {...bullet} />
        ))}
      </ul>
    )
  );
}
