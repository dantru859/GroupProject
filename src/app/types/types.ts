export interface Product {
  id: number;
  name: string;
  type: string;
}

export interface Character {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}
