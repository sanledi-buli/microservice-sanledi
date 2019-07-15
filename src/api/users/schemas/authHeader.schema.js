const Joi = require('@hapi/joi');

const auth = Joi.string()
  .required()
  .description('Authorization header containing the JSON Web Token');

module.exports = {
  authorization: auth
};
