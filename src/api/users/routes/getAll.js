const Joi = require('@hapi/joi');
const {
  userSchema,
  badRequestErrorSchema,
  internalErrorSchema
} = require('../schemas');

module.exports = {
  method: 'GET',
  path: '/users',
  config: {
    tags: ['api'],
    auth: false,
    description: 'Get users',
    notes: 'Get users',
    plugins: {
      'hapi-swagger': {
        responses: {
          200: { description: 'Success', schema: userSchema },
          400: { description: 'Bad Request', schema: badRequestErrorSchema },
          500: { description: 'Internal Error', schema: internalErrorSchema }
        }
      }
    },
    validate: {
      query: {
        accountNumber: Joi.string()
          .description('Account Number')
          .example('12345588'),
        identityNumber: Joi.string()
          .description('Identity Number')
          .example('12345588')
      }
    }
  },
  handler: async (req, h) => {
    const { UserModel } = req.server.app;
    try {
      const query = {};
      if (req.query.accountNumber) {
        Object.assign(query, { accountNumber: req.query.accountNumber });
      }

      if (req.query.identityNumber) {
        Object.assign(query, { identityNumber: req.query.identityNumber });
      }

      const users = await UserModel.find(query);
      return h.response(users).code(200);
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
