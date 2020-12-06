const jwt = require("jsonwebtoken");

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.SECRET);
}

function checkAccessToken(access_token) {
  return jwt.verify(access_token, process.env.SECRET);
}

module.exports = {
  generateAccessToken,
  checkAccessToken,
};
