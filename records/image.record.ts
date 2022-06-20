import { RowDataPacket } from "mysql2";

import { Image } from "../types/image";
import { pool } from "../utils/db";

interface ImageEntity extends Image, RowDataPacket { }

export class ImageRecord {

  static async getImages(): Promise<Image[]> {
    const [images] = await pool.query<ImageEntity[]>('SELECT * FROM `images`', []);
    return images;
  }

  static async getProductImages(productId: string): Promise<Image[]> {
    const [images] = await pool.query<ImageEntity[]>('SELECT * FROM `images` WHERE `productId` = :productId', { productId });
    return images;
  }
}