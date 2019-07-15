const Joi = require('@hapi/joi');

const id = Joi.string()
  .required()
  .description('ID')
  .example('1');

module.exports = Joi.object().keys({
  id
});
