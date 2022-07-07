import { Router } from "express";
import { getShipments } from "../controllers/shipment.controller";

const shipmentRouter = Router();

shipmentRouter.get('/', getShipments);

export { shipmentRouter }