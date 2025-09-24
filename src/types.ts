export type CardId = "tool" | "exchange" | "boardgame" | "pos" | "about" | "contact";

export type Item = {
  id: CardId;
  title: string;
  subtitle?: string;
  href?: string;
  body: JSX.Element;
};
