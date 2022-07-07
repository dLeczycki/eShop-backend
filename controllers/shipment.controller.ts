import { Request, Response } from "express";
import { ShipmentRecord } from "../records/shipment.record";

export async function getShipments(req: Request, res: Response) {
  const shipments = await ShipmentRecord.getShipments();
  return res.json(shipments);
}