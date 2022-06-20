import { Request, Response } from "express";
import { ImageRecord } from "../records/image.record";
import { ProductRecord } from "../records/product.record";

export async function getProducts(req: Request, res: Response) {
  const products = await ProductRecord.getProducts();
  return res.json(products);
}

export async function getProductImages(req: Request, res: Response) {
  const { productId } = req.params;

  const images = await ImageRecord.getProductImages(productId as string);
  return res.json(images);
}