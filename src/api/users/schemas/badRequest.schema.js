const Joi = require('@hapi/joi');

const responseCode = Joi.number()
  .required()
  .example(400)
  .description('HTTP Status Code');
const error = Joi.string()
  .required()
  .example('Bad Request')
  .description('HTTP Error Description');
const code = Joi.string()
  .optional()
  .example('BAD_REQUEST')
  .description('Error Code');
const message = Joi.string()
  .optional()
  .example('Bad user input')
  .description('Error Message');

module.exports = Joi.object().keys({
  responseCode,
  error,
  code,
  message
});
