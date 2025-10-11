import { ReactNode } from 'react';

export type CardId = "tool" | "exchange" | "boardgame" | "pos" | "about" | "contact";

export type Language = "en" | "sv";

export type Localized<T> = Record<Language, T>;

export type InfoCard = {
  title?: string;
  body: string;
};

export type Item = {
  id: CardId;
  title: Localized<string>;
  subtitle?: Localized<string>;
  href?: string;
  body: Localized<ReactNode>;
  infoCards?: Localized<InfoCard[]>;
};
