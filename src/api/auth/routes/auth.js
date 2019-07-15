const dotenv = require('dotenv').config();
process.env.NODE_ENV || dotenv;

const Joi = require('@hapi/joi');
const {
  badRequestErrorSchema,
  internalErrorSchema,
  idTokenSchema
} = require('../schemas');

module.exports = {
  method: 'GET',
  path: '/auth',
  config: {
    tags: ['api'],
    auth: false,
    description: 'Get auth',
    notes: 'Get auth',
    plugins: {
      'hapi-swagger': {
        responses: {
          200: {
            description: 'Success',
            schema: idTokenSchema
          },
          400: { description: 'Bad Request', schema: badRequestErrorSchema },
          500: { description: 'Internal Error', schema: internalErrorSchema }
        }
      }
    }
  },
  handler: async (req, h) => {
    const { createToken } = req.server.app;
    try {
      const secret = process.env.JWT_SECRET || 'secret';
      return h.response({ idToken: createToken(secret) }).code(200);
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
