import { Image } from "./image";

export interface Product {
  id: string;
  name: string;
  price: number;
  images?: Image[];
}

export interface ProductWithImages extends Product {
  images: Image[];
}