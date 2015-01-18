var request = require("request");

var config = {
  _token: true
};

var privateConfig = {};

var api = {

  // BASIC
  ACCESS_TOKEN: "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential",
  API_TICKET: "https://api.weixin.qq.com/cgi-bin/ticket/getticket",

  // BATCH MANAGE SHOP
  CREATE_SHOP: "https://api.weixin.qq.com/card/location/batchadd",
  GET_SHOP_LIST: "https://api.weixin.qq.com/card/location/batchget",

  // CARD
  CREATE_CARD: "https://api.weixin.qq.com/card/create",
  GET_CARD_DETAIL: "https://api.weixin.qq.com/card/get",
  GET_CARD_ID_LIST: "https://api.weixin.qq.com/card/batchget",
  MODIFY_CARD: "https://api.weixin.qq.com/card/update",
  DELETE_CARD: "https://api.weixin.qq.com/card/delete",
  MODIFY_CARD_STOCK: "https://api.weixin.qq.com/card/modifystock",
  CREATE_CARD_QR_CODE_TICKET: "https://api.weixin.qq.com/card/qrcode/create",
  SHOW_CARD_QR_CODE: "https://mp.weixin.qq.com/cgi-bin/showqrcode",
  
  // CODE
  CONSUME_CODE: "https://api.weixin.qq.com/card/code/consume",
  GET_CODE_DETAIL: "https://api.weixin.qq.com/card/code/get",
  CODE_DECRYPT: "https://api.weixin.qq.com/card/code/decrypt",
  SET_CODE_EXPIRE: "https://api.weixin.qq.com/card/code/unavailable",
  MODIFY_LUCK_MONEY_BALANCE: "https://api.weixin.qq.com/card/luckymoney/updateuserbalance",

  // OTHER
  COLORS: "https://api.weixin.qq.com/card/getcolors",
  SET_WHITELIST: "https://api.weixin.qq.com/card/testwhitelist/set"

};

function setConfig(newConfig) {
  if(newConfig.appId && newConfig.appSecret) {
    config.appId = newConfig.appId;
    config.appSecret = newConfig.appSecret;
  } else if(newConfig.accessTokenService){
    config.accessTokenService = newConfig.accessTokenService;
    config._token = false;
  } else {
    throw new Error("an error occurred when init access token");
  }
}

function getConfig() {
  return config;
}

function isNotExpire() {
  if(Date.now - privateConfig.expireTime > 3600000) {
    return false;
  }
  return true;
}

/**
 * get url with access token
 * @param  {String}   url      [api key]
 * @param  {Function} callback(error, url)
 */
function formatUrl(url, callback) {

  // parse response and return access token
  var returnsFunc = function(b, cb) {
    var token = (typeof b === "string") ? 
          JSON.parse(b).access_token : b.access_token;
    privateConfig.accessToken = token;
    privateConfig.expireTime = Date.now;
    cb(null, url + "?access_token=" + token);
    return;
  };

  // get access token from wechat server or configure server
  if(config._token) {

    // from wechat server
    if(privateConfig.accessToken && isNotExpire()) {
      return returnsFunc({access_token: privateConfig.accessToken}, callback);
    }
    var accessTokenUrl = api.ACCESS_TOKEN + "&appid=" + config.appId + "&secret=" + config.appSecret;
    request.post(accessTokenUrl, function(err, res, body) {
      if(err) {
        return callback(err);
      }
      returnsFunc(body, callback);
    });
  }else {

    // from custom server
    request.get(config.accessTokenService, function(err, res, body) {
      if(err) {
        return callback(err);
      }
      returnsFunc(body, callback);
    });
  }
}

module.exports = {
  getConfig: getConfig,
  setConfig: setConfig,
  getUrl: formatUrl,
  api: api
};
