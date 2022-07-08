import { Request, Response } from "express";
import { ImageRecord } from "../records/image.record";
import { ProductRecord } from "../records/product.record";
import { decodeEmbedded } from "../utils/embeddedQueryDecoder";

export async function getProducts(req: Request, res: Response) {
  const offset = Number(req.query.offset) || 0;
  const limit = Number(req.query.limit) || 20;
  const embed = decodeEmbedded(req.query.embed as string) || [];

  const products = await ProductRecord.getProducts(offset, limit);

  if (embed.includes('images')) {
    for (const product of products) {
      product.images = await ImageRecord.getProductImages(product.id);
    }
  }

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