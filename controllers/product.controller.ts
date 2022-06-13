import { Request, Response } from "express";

const products = [
  {
    id: 'aaa',
    name: 'Rower górski',
  },
  {
    id: 'bbb',
    name: 'Samochodzk mercedes',
  },
  {
    id: 'ccc',
    name: 'Lalka szmacianka',
  }
]

export async function getProducts(req: Request, res: Response) {

  return res.json(products);
}