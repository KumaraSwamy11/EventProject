const Joi = require("joi");

const createEventSchema = Joi.object({
  title: Joi.string().min(5).max(50).required(),
  date: Joi.date().required(),
  location: Joi.string().min(5).required(),
});

module.exports = {
  createEventSchema,
};
