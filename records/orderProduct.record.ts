import { pool } from "../utils/db";
import { ResultSetHeader } from "mysql2";

import { OrderProduct } from "../types";

export class OrderProductRecord implements OrderProduct {
  productId: string;
  count: number;

  constructor(orderProduct: OrderProduct) {
    this.productId = orderProduct.productId;
    this.count = orderProduct.count;
  }

  async insert(orderNumber: number) {
    await pool.query<ResultSetHeader>('INSERT INTO `order_products`(`orderNumber`, `productId`, `count`) VALUES(:orderNumber, :productId, :count)', {
      orderNumber,
      productId: this.productId,
      count: this.count,
    });
  }
}