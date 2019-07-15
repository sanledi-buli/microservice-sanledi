const authRoute = require('./routes/auth');
const { createToken, validate } = require('./utils');

exports.register = (server, opts) => {
  const { Config } = opts;
  server.auth.strategy('jwt', 'jwt', {
    key: Config.get('/jwtSecret'),
    validate,
    verifyOptions: { ignoreExpiration: true }
  });

  server.auth.default('jwt');
  server.route([authRoute]);
  Object.assign(server.app, { createToken, validate });
};

exports.name = 'Auth plugin';
