const Mongoose = require('mongoose');
const dotenv = require('dotenv').config();

process.env.NODE_ENV || dotenv;

const conn = `mongodb://${process.env.MONGO_USER}:${
  process.env.MONGO_PASSWORD
}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

//load database
Mongoose.connect(conn, { useNewUrlParser: true, useFindAndModify: false });
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log('Connection with database succeeded.');
});

exports.db = db;
