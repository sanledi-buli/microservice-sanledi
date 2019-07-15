const JWT = require('jsonwebtoken');

const roles = {
  1: {
    id: 1,
    name: 'Basic Access'
  }
};

const createToken = secret => {
  return JWT.sign(roles[1], secret);
};

const validate = async function(decoded, request, h) {
  if (!roles[decoded.id]) {
    return { isValid: false };
  }
  return { isValid: true };
};

module.exports = { createToken, validate };
