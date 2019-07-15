const Joi = require('@hapi/joi');

const userName = Joi.string()
  .description('username')
  .example('foobar');

const accountNumber = Joi.string()
  .description('Account Number')
  .example('abc');

const emailAddress = Joi.string()
  .description('Account Number')
  .example('abc@def.ghi');

const identityNumber = Joi.string()
  .description('Identity Number')
  .example('111111');

module.exports = Joi.object().keys({
  userName,
  accountNumber,
  emailAddress,
  identityNumber
});
