const Joi = require("joi");

module.exports = Joi.object({
  user: Joi.string().min(4).required(),
  password: Joi.string().min(6).required(),
});
