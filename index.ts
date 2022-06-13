import express, { Express, Request, Response } from 'express';
import { productRouter } from './routes/product.route';

const app: Express = express();
const port: number = 3000;

app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`⚡️ Eshop-backend is running at http://localhost:${port}`);
})
