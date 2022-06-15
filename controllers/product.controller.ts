import { Request, Response } from "express";
import { ProductRecord } from "../records/product.record";

export async function getProducts(req: Request, res: Response) {
  const products = await ProductRecord.getProducts();
  return res.json(products);
}