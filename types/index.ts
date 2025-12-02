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
