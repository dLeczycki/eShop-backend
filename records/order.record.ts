import { pool } from "../utils/db";
import { RowDataPacket } from "mysql2";
import { Order } from "../types";

interface OrderEntity extends Order, RowDataPacket { }

export class OrderRecord {
  async insertOrder() {

  }
}