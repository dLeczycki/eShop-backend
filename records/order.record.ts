import { pool } from "../utils/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Order, OrderStatus, OrderToPlace } from "../types";
import { ProductRecord } from "./product.record";
import { ShipmentRecord } from "./shipment.record";

interface OrderEntity extends Order, RowDataPacket { }

export class OrderRecord implements Order {
  number?: number;
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  postalCode: string;
  city: string;
  address: string;
  status?: OrderStatus;
  amount?: number;
  shipmentName: string;
  paymentName: string;

  constructor(order: OrderToPlace) {
    this.firstname = order.firstname;
    this.lastname = order.lastname;
    this.email = order.email;
    this.phone = order.phone;
    this.postalCode = order.postalCode;
    this.city = order.city;
    this.address = order.address;
    this.shipmentName = order.shipmentName;
    this.paymentName = order.paymentName;
    this.status = OrderStatus.FRESH;
  }

  async insert() {
    const response = await pool.query<ResultSetHeader>('INSERT INTO `orders`(`firstname`, `lastname`, `email`, `phone`, `postalCode`, `city`, `address`, `shipmentName`, `paymentName`, `status`, `amount`) VALUES(:firstname, :lastname, :email, :phone, :postalCode, :city, :address, :shipmentName, :paymentName, :status, :amount)', {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      postalCode: this.postalCode,
      city: this.city,
      address: this.address,
      shipmentName: this.shipmentName,
      paymentName: this.paymentName,
      status: this.status,
      amount: this.amount,
    });

    this.number = response[0].insertId;
  }


  async calculateOrderAmount(orderToPlace: OrderToPlace): Promise<void> {
    let amount = 0;

    for (const orderProduct of orderToPlace.orderProducts) {
      const product = await ProductRecord.getProduct(orderProduct.productId);
      amount += product.price * orderProduct.count;
    }

    const shipment = await ShipmentRecord.getShipment(orderToPlace.shipmentName);
    amount += shipment.price;

    this.amount = amount;
  }
}