require("dotenv").config();

const jwt = require("jsonwebtoken");
const { User } = require("../database/models");
const errors = require("../errors/errors");
/* Service do login responsável por verificar no banco o user e password */
const loginService = async ({ user, password }) => {
  const userFound = await User.findOne({ where: { user } });

  if (!userFound) return errors.NOT_FOUND;

  if (userFound.password !== password) return errors.INCORRECT_PASSWORD;

  const payload = { user, password };

  const secret = process.env.JWT_SECRET || 'shhh';

  return jwt.sign(payload, secret);
};

const registerService = async ({ user, password, email }) => {
  const createUser = await User.create({ user, password, email });

  return createUser;
}

module.exports = { loginService, registerService };
