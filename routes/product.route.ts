import { Router } from "express";
import { getProductImages, getProducts } from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .get('/', getProducts)
  .get('/:productId/images', getProductImages);

export { productRouter };