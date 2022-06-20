import { RowDataPacket } from "mysql2";

import { Product } from "../types/product";
import { pool } from "../utils/db";

interface ProductEntity extends Product, RowDataPacket { }

export class ProductRecord {

  static async getProducts(): Promise<Product[]> {
    const [products] = await pool.query<ProductEntity[]>('SELECT * FROM `products`', []);
    return products;
  }

  static async getProduct(id: string): Promise<Product | null> {
    const [products] = await pool.query<ProductEntity[]>('SELECT * FROM `products` WHERE `id` = :id', { id });
    return products.length === 1 ? products[0] : null;
  }
}