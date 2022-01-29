const jwt = require("jsonwebtoken");
const { User, Product } = require("../database/models");

/* Cria produto do usuário */
const createMyProduct = async ({ name, price, quantity, email }) => {
  const user = await User.findOne({ where: { email } });

  const newProduct = await Product.create({
    name,
    price,
    quantity,
    userId: user.id,
  });

  return newProduct;
};

/* Lista produtos do usuário depois de verificar o jwt */
const listMyProducts = async (token) => {
  const secret = process.env.JWT_SECRET || 'shhh';

  const { email } = jwt.verify(token, secret);

  const { id } = await User.findOne({ where: { email } });

  const products = await Product.findAll({ where: { userId: id } });

  return products;
};

module.exports = { listMyProducts, createMyProduct };
