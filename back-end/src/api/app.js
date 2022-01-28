const express = require('express');
const cors = require('cors');

const userRouter = require('../routers/userRouter');

/* Criação do app */
const app = express();

app.use(express.json());

app.use(cors());

/* Rotas usando router para cada rota principal */
app.use('/users', userRouter);

module.exports = app;
