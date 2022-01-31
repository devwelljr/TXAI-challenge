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
};

/* Service do update de usuário */
const updateService = async (id, body, token) => {
  const secret = process.env.JWT_SECRET || "shhh";

  const { email } = jwt.verify(token, secret);

  const user = await User.findOne({ where: { email } });

  if (user.id == id) {
    const { user, email } = body;

    await User.update({ user, email }, { where: { id: id } });

    return User.findOne({ where: { id } });
  }

  return errors.UNAUTHORIZED;
}

/* Service do delete de usuário */
const deleteService = async (id, token) => {
  const secret = process.env.JWT_SECRET || "shhh";

  const { email } = jwt.verify(token, secret);

  const { userId } = await User.findOne({ where: { email } });

  if (userId == id) {
    const deleted = await User.destroy({ where: { id: id } });

    return deleted;
  }
  
  return errors.UNAUTHORIZED;
};

module.exports = { loginService, registerService, updateService, deleteService };
