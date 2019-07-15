const userSchema = require('./user.schema');
const badRequestErrorSchema = require('./badRequest.schema');
const internalErrorSchema = require('./internalServer.schema');
const idSchema = require('./id.schema');

module.exports = {
  userSchema,
  badRequestErrorSchema,
  internalErrorSchema,
  idSchema
};
