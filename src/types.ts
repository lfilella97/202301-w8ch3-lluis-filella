export interface Client {
  userName: string;
  isLogged: boolean;
}

export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

export type Order = Product[];
