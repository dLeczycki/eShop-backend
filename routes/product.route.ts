import { Router } from "express";
import { getProduct, getProductImages, getProducts } from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .get('/', getProducts)
  .get('/:id', getProduct)
  .get('/:id/images', getProductImages);

export { productRouter };