require("dotenv").config();

const jwt = require("jsonwebtoken");
const { User } = require("../database/models");
const errors = require("../errors/errors");

/* Service do login responsável por verificar no banco o user e password */
const loginService = async ({ user, password }) => {
  const userFound = await User.findOne({ where: { user } });

  if (!userFound) return errors.NOT_FOUND;

  if (userFound.password !== password) return errors.INCORRECT_PASSWORD;

  const payload = { user, email: userFound.email };

  const secret = process.env.JWT_SECRET || 'shhh';

  return { token: jwt.sign(payload, secret), user: userFound};
};

/* Service da criação de usuário */
const registerService = async ({ user, password, email }) => {
  await User.create({ user, password, email });

  const createUser = await User.findOne({ where: { email } });

  const payload = { user, email };

  const secret = process.env.JWT_SECRET || 'shhh';

  return { token: jwt.sign(payload, secret), user: createUser };
}

module.exports = { loginService, registerService };
