import { pool } from "../utils/db";
import { RowDataPacket } from "mysql2";
import { Shipment } from "../types";

interface ShipmentEntity extends Shipment, RowDataPacket { }

export class ShipmentRecord {
  static async getShipments(): Promise<Shipment[]> {
    const [shipments] = await pool.query<ShipmentEntity[]>('SELECT * FROM `shipments`', []);
    return shipments;
  }

  static async getShipment(shipmentName: string): Promise<Shipment> {
    const [shipments] = await pool.query<ShipmentEntity[]>('SELECT * FROM `shipments` WHERE name = :shipmentName', { shipmentName });
    return shipments[0];
  }
}