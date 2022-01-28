const loginSchema = require('../schemas/user/login');

/* Valida Body da requisição de login */
const validateLogin = (req, res, next) => {
  const { body } = req;
  const { error } = loginSchema.validate(body);

  if (error) {
    console.log(error);
    const { details } = error;
    const msg = details[0].message;
    return res.status(400).json({ message: msg });
  }

  next();
};

/* Valida Body da requisição de register */
const validateRegister = (req, res, next) => {
  const { body } = req;
  const { error } = loginSchema.validate(body);

  if (error) {
    console.log(error);
    const { details } = error;
    const msg = details[0].message;
    return res.status(400).json({ message: msg });
  }

  next();
};

module.exports = { validateLogin, validateRegister };
