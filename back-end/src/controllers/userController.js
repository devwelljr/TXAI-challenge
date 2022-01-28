const { loginService, registerService } = require('../services/userService');

const login = async (req, res, next) => {
  try {
    const { user, password } = req.body;

    const token = await loginService({ user, password });

    if (token.status) return res.status(token.status).json({ message: token.message });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    next(error)
  }
};

const register = async (req, res, next) => {
  try {
    const { user, password, email } = req.body;

    const newUser = await registerService({ user, password, email });

    return res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
    next(error)
  }
};

module.exports = { login, register };
