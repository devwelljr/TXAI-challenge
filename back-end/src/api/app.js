const express = require('express');
const cors = require('cors');

const userRouter = require('../routers/userRouter');
const productRouter = require('../routers/productRouter');

/* Criação do app */
const app = express();

app.use(express.json());

app.use(cors());

/* Rotas usando router para cada rota principal */
app.use('/users', userRouter);

app.use('/products', productRouter);

module.exports = app;
