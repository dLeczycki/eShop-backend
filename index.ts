import express, { Express } from 'express';
require('express-async-errors');

import { productRouter } from './routes/product.route';
import { handleError, handleNotFound } from './utils/helpers';
import { Log } from './utils/log';

const app: Express = express();
const port: number = 3001;

app.use('/products', productRouter);

app.use(handleNotFound);
app.use(handleError);

app.listen(port, () => {
  Log.action(`Eshop-backend is running at http://localhost:${port}`);
})
