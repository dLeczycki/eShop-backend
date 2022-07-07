import { Shipment } from "./shipment";

export interface Order {
  recipient: Recipient;
  shipment: Shipment;
  payment: Payment;
  orderProducts: OrderProduct[];
}

export interface Recipient {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  postalCode: string;
  city: string;
  address: string;
}

export interface RecipientError {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  postalCode: string;
  city: string;
  address: string;
}


export interface Payment {
  name: string;
  fullName: string;
}

export interface OrderProduct {
  productId: string;
  count: number;
}