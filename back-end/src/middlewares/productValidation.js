const createSchema = require("../schemas/product/create");

/* Valida Body da requisição de create */
const validateCreate = (req, res, next) => {
  const { body } = req;
  const { error } = createSchema.validate(body);

  if (error) {
    console.log(error);
    const { details } = error;
    const msg = details[0].message;
    return res.status(400).json({ message: msg });
  }

  next();
};

module.exports = { validateCreate };
