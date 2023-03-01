import { Client, Product } from "../types";

export const products: Product[] = [
  {
    name: "Smartwatch",
    description:
      "A wearable device that provides a range of features, including fitness tracking, smartphone notifications, and voice control.",
    price: 199.99,
    image: "https://example.com/smartwatch.jpg",
  },
  {
    name: "Wireless Earbuds",
    description:
      "Earbuds with noise-cancelling technology and long battery life.",
    price: 99.99,
    image: "https://example.com/earbuds.jpg",
  },
];

export const initialStateClient: Client = {
  userName: "",
  isLogged: true,
};
