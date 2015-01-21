var config = require("../config");
var request = require("../utils/request");
var error = require("../utils/errors");

/**
 * get current access token (获取当前的access token)
 * @param  {Function} callback(error, accessToken)
 */
exports.getAccessToken = function(callback) {
  callback = callback || function() {};
  config.getAccessToken(callback);
};

/**
 * get current api ticket (获取当前api ticket，用于JSAPI计算签名)
 * @param  {Function} callback(error, ticket)
 */
exports.getApiTicket = function(callback) {
  callback = callback || function() {};
  config.getApiTicket(callback);
};

/**
 * get wechat card colors (获取创建卡券允许使用的颜色列表)
 * @param  {Function} callback(error, colors)
 */
exports.getColorList = function(callback) {
  callback = callback || function() {};
  request.get(config.api.COLORS, function(err, result) {
    if(err) {return callback(err); }
    callback(null, result.colors);
  });
};

/**
 * set test whitelist with wechat username (用微信号来设置测试白名单)
 * @param {Array}   usernames [username list 微信号列表]
 * @param {Function} callback(error)
 */
exports.setWhiteListWithUsername = function(usernames, callback) {
  if(!usernames instanceof Array || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  request.post(config.api.SET_WHITELIST, {
    form: JSON.stringify({
      username: usernames
    })
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null);
  });
};

/**
 * set test whitelist with wechat openid (使用微信openid设置测试白名单)
 * @param {Array}   openids  [openid list 用户openid列表]
 * @param {Function} callback(error)
 */
exports.setWhiteListWithOpenId = function(openids, callback) {
  if(!openids instanceof Array || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  request.post(config.api.SET_WHITELIST, {
    form: JSON.stringify({
      openid: openids
    })
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null);
  });
};