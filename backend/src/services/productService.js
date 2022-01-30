const jwt = require("jsonwebtoken");
const { User, Product } = require("../database/models");
const errors = require("../errors/errors");

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
  const secret = process.env.JWT_SECRET || "shhh";

  const { email } = jwt.verify(token, secret);

  const { id } = await User.findOne({ where: { email } });

  const products = await Product.findAll({ where: { userId: id } });

  return products;
};

/* Deleta o produto passado por parametro */
const deleteMyProduct = async (id, token) => {
  const secret = process.env.JWT_SECRET || "shhh";

  const { email } = jwt.verify(token, secret);

  const user = await User.findOne({ where: { email } });

  const product = await Product.findOne({ where: { id } });

  if (user.id === product.userId) {
    const deleted = await Product.destroy({ where: { id } });
    return deleted;
  }

  return errors.UNAUTHORIZED;
};

module.exports = { listMyProducts, createMyProduct, deleteMyProduct };
