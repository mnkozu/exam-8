export interface Quote {
  id: string;
  author: string;
  text: string;
  category: string;
}

export type QuoteApi = Omit<Quote, 'id'>;

export interface QuoteList {
  [id: string]: Quote;
}

export interface Categories {
  title: string;
  id: string;
}