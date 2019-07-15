const Confidence = require('confidence');
const pkg = require('../package.json');
const dotenv = require('dotenv').config();

process.env.NODE_ENV || dotenv;

const config = {
  name: pkg.name,
  description: pkg.description,
  version: pkg.version,
  host: process.env.SERVICE_HOST || '0.0.0.0',
  port: process.env.SERVICE_PORT || 3000
};

const store = new Confidence.Store(config);

exports.get = key => store.get(key);
