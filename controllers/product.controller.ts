import { Request, Response } from "express";
import { ImageRecord } from "../records/image.record";
import { ProductRecord } from "../records/product.record";

export async function getProducts(req: Request, res: Response) {
  const products = await ProductRecord.getProducts();
  return res.json(products);
}

export async function getProduct(req: Request, res: Response) {
  const { id } = req.params;

  const product = await ProductRecord.getProduct(id as string);
  return res.json(product);
}

export async function getProductImages(req: Request, res: Response) {
  const { id } = req.params;

  const images = await ImageRecord.getProductImages(id as string);
  return res.json(images);
}