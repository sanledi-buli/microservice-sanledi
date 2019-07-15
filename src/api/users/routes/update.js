const Joi = require('@hapi/joi');
const {
  userSchema,
  badRequestErrorSchema,
  internalErrorSchema,
  idSchema
} = require('../schemas');

module.exports = {
  method: 'PUT',
  path: '/users/{id}',
  config: {
    tags: ['api'],
    auth: false,
    description: 'Update user',
    notes: 'Update user',
    plugins: {
      'hapi-swagger': {
        responses: {
          200: { description: 'OK', schema: userSchema },
          400: { description: 'Bad Request', schema: badRequestErrorSchema },
          500: { description: 'Internal Error', schema: internalErrorSchema }
        }
      }
    },
    validate: {
      params: idSchema,
      payload: userSchema
    }
  },
  handler: async (req, h) => {
    const { UserModel } = req.server.app;
    try {
      const attributes = {};

      if (req.payload.emailAddress) {
        Object.assign(attributes, { emailAddress: req.payload.emailAddress });
      }

      if (req.payload.identityNumber) {
        Object.assign(attributes, {
          identityNumber: req.payload.identityNumber
        });
      }

      const user = await UserModel.findByIdAndUpdate(
        req.params.id,
        attributes,
        { new: true }
      );
      return h.response(user).code(200);
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
