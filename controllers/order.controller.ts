import { Request, Response } from "express";
import { OrderRecord } from "../records/order.record";
import { OrderToPlace } from "../types";
import { isOrderToPlaceValid } from "../utils/helpers";

export async function postOrder(req: Request, res: Response) {
  const orderToPlace = { ...req.body } as OrderToPlace;
  try {
    if (!isOrderToPlaceValid(orderToPlace)) return res.status(400).json({ message: "Podałeś błędne dane dla zamówienia." });

    const order = new OrderRecord(orderToPlace);
    await order.calculateOrderAmount(orderToPlace);
    await order.insert();

    //TODO: Insert orderProducts

    return res.status(201).json({ redirectUrl: 'http://localhost:3000/zamowienie/zakonczone' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}