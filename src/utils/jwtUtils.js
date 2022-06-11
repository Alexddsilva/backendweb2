const jwt = require("jsonwebtoken");
module.exports = {
  verify: (payload) => jwt.verify(payload, "12345"),
};
