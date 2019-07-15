const badRequestErrorSchema = require('./badRequest.schema');
const internalErrorSchema = require('./internalServer.schema');
const idTokenSchema = require('./idToken.schema');

module.exports = {
  badRequestErrorSchema,
  internalErrorSchema,
  idTokenSchema
};
