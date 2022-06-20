import { Router } from "express";
import { getImages } from "../controllers/image.controller";

const imageRouter = Router();

imageRouter.get('/', getImages);

export { imageRouter };