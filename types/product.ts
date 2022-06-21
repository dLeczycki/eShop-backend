import { Image } from "./image";

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductWithImages extends Product {
  images: Image[];
}