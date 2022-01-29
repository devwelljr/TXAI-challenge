const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().min(4).required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  email: Joi.string().email().required(),
});
