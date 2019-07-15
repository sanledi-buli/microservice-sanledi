const Joi = require('@hapi/joi');

const idToken = Joi.string()
  .description('idToken')
  .example('xxxxxxxxxxxxxxxxx');

module.exports = Joi.object().keys({
  idToken
});
