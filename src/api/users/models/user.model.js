const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: String,
  accountNumber: String,
  emailAddress: String,
  identityNumber: String
});

module.exports = mongoose.model('UserModel', UserSchema);
