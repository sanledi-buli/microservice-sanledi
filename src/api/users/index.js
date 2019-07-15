const routes = require('./routes');
const { UserModel } = require('./models');

exports.register = (server, opts) => {
  server.route([...routes]);
  Object.assign(server.app, { UserModel });
};

exports.name = 'Users plugin';
