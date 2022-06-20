import { Request, Response } from "express";
import { ImageRecord } from "../records/image.record";

export async function getImages(req: Request, res: Response) {
  const images = await ImageRecord.getImages();
  return res.json(images);
}