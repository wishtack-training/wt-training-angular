export enum Order {
  Newest = 'newest',
  Relevance = 'relevance'
}

export enum Language {
  English = 'en',
  French = 'fr'
}

export interface BookQuery {
  keywords: string;
  language?: Language;
  order?: Order;
}
