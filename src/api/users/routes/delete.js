const Joi = require('@hapi/joi');
const {
  userSchema,
  badRequestErrorSchema,
  internalErrorSchema,
  idSchema
} = require('../schemas');

module.exports = {
  method: 'DELETE',
  path: '/users/{id}',
  config: {
    tags: ['api'],
    auth: false,
    description: 'Delete user',
    notes: 'Delete user',
    plugins: {
      'hapi-swagger': {
        responses: {
          200: {
            description: 'OK',
            schema: Joi.string()
              .description('OK')
              .example('OK')
          },
          400: { description: 'Bad Request', schema: badRequestErrorSchema },
          500: { description: 'Internal Error', schema: internalErrorSchema }
        }
      }
    },
    validate: {
      params: idSchema
    }
  },
  handler: async (req, h) => {
    const { UserModel } = req.server.app;
    try {
      await UserModel.findByIdAndRemove(req.params.id);
      return h.response('OK').code(200);
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
