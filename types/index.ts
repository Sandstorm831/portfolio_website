export type MapItem = {
  title: string;
  link: string;
  delay: number;
  subtitle?: string;
};

export type NavigatorType = {
  text: string;
  link: string;
};

export type SocialType = {
  name: string;
  link: string;
};

export type Blog = {
  title: string;
  description: string;
  slug?: string;
  link?: string;
  type: "internal" | "external";
};

export type BlogStats = {
  date: Date; // ISO DateTime object in UTC
  badge: string; // all small
  timeToRead: number; // in minutes
};

export interface BulletItem {
  code: string;
  label: string;
  textColor: string;
}

export interface ListItem {
  code: string;
  label: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  bullets?: BulletListProps;
  textColor: string;
}

export interface ListItemProps extends ListItem {
  index: number;
}

export type ListItemArrayProps = Omit<ListItem, "textColor">[];
export type BulletListProps = Omit<BulletItem, "textColor">[];