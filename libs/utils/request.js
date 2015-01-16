var request = require("request");
var config = require("../config");

exports.post = function(api, options, callback) {
  config.getUrl(api, function(err, url) {
    if(err) {
      return callback("get access token error");
    }
    request.post(url, options, callback);
  });
};

exports.get = function(api, callback) {
  config.getUrl(api, function(err, url) {
    if(err) {
      return callback("get access token error");
    }
    request.get(api, callback);
  });
};