import { Router } from "express";
import { postOrder } from "../controllers/order.controller";

const orderRouter = Router();

orderRouter.post('/', postOrder);

export { orderRouter }