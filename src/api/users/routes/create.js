const Joi = require('@hapi/joi');
const {
  userSchema,
  badRequestErrorSchema,
  internalErrorSchema,
  authHeaderSchema
} = require('../schemas');

module.exports = {
  method: 'POST',
  path: '/users',
  config: {
    tags: ['api'],
    auth: 'jwt',
    description: 'Create a new user',
    notes: 'Create a new user',
    plugins: {
      'hapi-swagger': {
        responses: {
          201: { description: 'OK', schema: userSchema },
          400: { description: 'Bad Request', schema: badRequestErrorSchema },
          500: { description: 'Internal Error', schema: internalErrorSchema }
        }
      }
    },
    validate: {
      headers: Joi.object(authHeaderSchema).options({
        allowUnknown: true
      }),
      payload: userSchema
    }
  },
  handler: async (req, h) => {
    const { UserModel } = req.server.app;
    try {
      const user = new UserModel({
        userName: req.payload.userName,
        accountNumber: req.payload.accountNumber,
        emailAddress: req.payload.emailAddress,
        identityNumber: req.payload.identityNumber
      });

      const userSaved = await user.save();
      return h.response(userSaved).code(201);
    } catch (e) {
      console.log(e);
      return h
        .response({
          responseCode: 500,
          error: 'Internal Server',
          code: 'INTERNAL_ERROR',
          message: e.message
        })
        .code(500);
    }
  }
};
