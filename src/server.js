const hapiAuthJWT = require('hapi-auth-jwt2');
const Config = require('../config');
const db = require('../config/database').db;
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');
const users = require('./api/users');
const auth = require('./api/auth');

(async () => {
  const server = await new Hapi.Server({
    host: Config.get('/host'),
    port: Config.get('/port')
  });

  await server.register(hapiAuthJWT);

  const swaggerOptions = {
    info: {
      title: Pack.description,
      version: Pack.version
    }
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: auth,
      select: ['api', 'docs'],
      options: { Config }
    },
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    },
    {
      plugin: users,
      select: ['api', 'docs'],
      options: { Config }
    }
  ]);

  try {
    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
  }
})();
