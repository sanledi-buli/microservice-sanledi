const Joi = require('@hapi/joi');

const responseCode = Joi.number()
  .required()
  .example(500)
  .description('HTTP Status Code');
const error = Joi.string()
  .required()
  .example('Internal Server')
  .description('HTTP Error Description');
const code = Joi.string()
  .optional()
  .example('INTERNAL_ERROR')
  .description('Error Code');
const message = Joi.string()
  .optional()
  .example('Internal server error')
  .description('Error Message');

module.exports = Joi.object().keys({
  responseCode,
  error,
  code,
  message
});
