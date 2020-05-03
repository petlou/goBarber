import 'reflect-metadata';

import express from 'express';

import routes from './routes';

import './database';

const app = express();
app.use(express.json());
app.use(routes);

const port = 3333;
const host = 'localhost';
app.listen(port, host, () => {
  console.log(`Server is running on Port: ${port}.`);
});
