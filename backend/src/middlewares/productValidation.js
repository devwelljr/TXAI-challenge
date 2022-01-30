const createSchema = require("../schemas/product/create");
const updateSchema = require("../schemas/product/update");

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

/* Valida Body da requisição de update */
const validateUpdate = (req, res, next) => {
  const { body } = req;
  const { error } = updateSchema.validate(body);

  if (error) {
    console.log(error);
    const { details } = error;
    const msg = details[0].message;
    return res.status(400).json({ message: msg });
  }

  next();
};

module.exports = { validateCreate, validateUpdate };
