import express, { Express } from 'express';
require('express-async-errors');

import { config } from './config/config';
import { handleError, handleNotFound } from './utils/helpers';
import { Log } from './utils/log';

import { productRouter } from './routes/product.route';
import { imageRouter } from './routes/image.route';
import { logRequest } from './middleware/log-request';

const app: Express = express();
const port: number = 3001;

app.use(express.static(config.publicPath));

app.use(logRequest);
app.use('/products', productRouter);
app.use('/images', imageRouter);

app.use(handleNotFound);
app.use(handleError);

app.listen(port, () => {
  Log.action(`Eshop-backend is running at http://localhost:${port}`);
})
