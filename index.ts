import express from 'express';
import cors from 'cors';
require('express-async-errors');

import { config } from './config/config';
import { handleError, handleNotFound } from './utils/helpers';
import { Log } from './utils/log';

import { productRouter } from './routes/product.route';
import { imageRouter } from './routes/image.route';
import { orderRouter } from './routes/order.route';
import { logRequest } from './middleware/log-request';

const app = express();
const port: number = 3001;

app.use(cors({
  origin: config.appUrl,
}));
app.use(express.static(config.publicPath));

app.use(logRequest);
app.use('/products', productRouter);
app.use('/images', imageRouter);
app.use('/orders', orderRouter);

app.use(handleNotFound);
app.use(handleError);

app.listen(port, () => {
  Log.action(`Eshop-backend is running at http://localhost:${port}`);
})
