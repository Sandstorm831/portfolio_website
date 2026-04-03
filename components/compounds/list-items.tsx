import { InlineCodeBlock } from "@/components/ui/inline-code-block";
import { cn } from "@/lib/utils";
import { ListItemArrayProps, ListItemProps } from "@/types";
import { BulletList } from "./bullet-list";


// ─── Sub-components ───────────────────────────────────────────────────────────

function TermListItem({
  index,
  code,
  label,
  imageSrc,
  imageAlt,
  bullets,
  textColor,
}: ListItemProps) {
  return (
    <li className={cn("text-md lg:text-lg gap-x-1", textColor)}>
      <div className="flex">
        {index}.
        <div className="w-full pl-3">
          <InlineCodeBlock>{code}</InlineCodeBlock> :&nbsp;{label}
        </div>
      </div>

      {imageSrc && (
        <img
          src={imageSrc}
          className="rounded-lg px-1 py-1"
          alt={imageAlt ?? code}
        />
      )}

      <BulletList bullets={bullets ?? []} textColor={textColor} />
    </li>
  );
}

export function ListItem({
  listItemProps,
  textColor,
}: {
  listItemProps: ListItemArrayProps;
  textColor: string;
}) {
  return (
    <ol className="pl-2 pt-4 flex flex-col gap-y-4">
      {listItemProps.map((term, i) => (
        <TermListItem
          key={term.code}
          index={i + 1}
          textColor={textColor}
          {...term}
        />
      ))}
    </ol>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
