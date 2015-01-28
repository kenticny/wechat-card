var crypto = require("crypto");

exports.sha1 = function(msg) {
  var enc = crypto.createHash("sha1");
  enc.update(msg);
  return enc.digest("hex");
};