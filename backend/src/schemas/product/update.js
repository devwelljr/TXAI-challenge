const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});
