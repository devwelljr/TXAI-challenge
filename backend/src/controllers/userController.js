const {
  loginService,
  registerService,
  updateService,
  deleteService,
} = require("../services/userService");

/* Controller responsável pelo login */
const login = async (req, res, next) => {
  try {
    const { user, password } = req.body;

    const token = await loginService({ user, password });

    if (token.status)
      return res.status(token.status).json({ message: token.message });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/* Controller responsável pelo registro */
const register = async (req, res, next) => {
  try {
    const { user, password, email } = req.body;

    const newUser = await registerService({ user, password, email });

    return res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/* COntroller responsável pr atualizar usuário */
const updateUser = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const token = req.headers.authorization;

    const user = await updateService(id, body, token);

    if (!user || user.length === 0)
      return res.status(404).json({ message: "Nenhum usuário encontrado." });

    if (user.message) {
      return res.status(user.status).json({ message: user.message });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/* Controller responsável por deletar usuário */
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;

    const deleteUser = await deleteService(id, token);

    if (deleteUser.status)
      return res.status(deleteUser.status).json({ message: deleteUser.message });

    return res.status(200).json({ userDeleted: deleteUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { login, register, updateUser, deleteUser };
