export interface Recipient {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  postalCode: string;
  city: string;
  address: string;
}

export interface RecipientError extends Required<Recipient> { }

export interface Payment {
  name: string;
  fullName: string;
}

export interface OrderProduct {
  productId: string;
  count: number;
}

export interface OrderToPlace extends Recipient {
  shipmentName: string;
  paymentName: string;
  orderProducts: OrderProduct[];
}

export interface Order extends Omit<OrderToPlace, 'orderProducts'> {
  number?: number;
  status?: OrderStatus;
  amount?: number
}

export enum OrderStatus {
  FRESH = "fresh",
  IN_PROGRESS = "in-progress",
  SENT = "sent",
  FINISHED = "finished",
}