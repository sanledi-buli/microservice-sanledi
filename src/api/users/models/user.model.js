const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, unique: true, required: true },
  accountNumber: { type: String, index: { unique: true }, required: true },
  emailAddress: { type: String, unique: true, required: true },
  identityNumber: { type: String, index: { unique: true }, required: true }
});

module.exports = mongoose.model('UserModel', UserSchema);
