const Joi = require("joi");
const { schema } = require("../models/userModel");

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  } else {
    next();
  }
};

module.exports = { validate };
