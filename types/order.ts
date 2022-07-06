export interface Order {
  recipient: Recipient;
  shipment: Shipment;
  payment: Payment;
  checkoutProducts: OrderProduct[];
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

export interface Shipment {
  name: string;
  fullName: string;
  icon: any;
  price: number;
}

export interface Payment {
  name: string;
  fullName: string;
}

export interface OrderProduct {
  productId: string;
  count: number;
}