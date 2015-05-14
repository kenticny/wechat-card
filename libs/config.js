var request = require("request");

var error = require("./utils/errors");

var config = {
  _token: true
};

var privateConfig = {
  access_token: {},
  jsapi_ticket: {}
};

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
  MODIFY_CODE: "https://api.weixin.qq.com/card/code/update",
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

function setPrivateConfig(key, value) {
  if(typeof key === "string") {
    privateConfig[key] = value;
  }
}

/**
 * check the token is expire or not (检查token是否过期)
 * @param  {string}  type [access_token or jsapi_ticket]
 * @return {Boolean}      [true or false]
 */
function isNotExpire(type, expireTime) {
  var op = privateConfig[type];
  if(Date.now() - op.expireTime > (expireTime || 3600000)) {
    return false;
  }
  return true;
}

/**
 * get access token
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function getAccessToken(callback) {

  // parse response and return access token
  var returnsFunc = function(body, isNew, callback) {
    var token = (typeof body === "string") ? 
          JSON.parse(body).access_token : body.access_token;
    if(isNew) {
      setPrivateConfig("access_token", {cred: token, expireTime: Date.now() });
    }
    callback(null, token);
    return;
  };

  // get access token from wechat server or configure server
  if(config._token) {

    // from wechat server
    if(privateConfig.access_token.cred && isNotExpire("access_token")) {
      return returnsFunc({access_token: privateConfig.access_token.cred }, false, callback);
    }
    var accessTokenUrl = api.ACCESS_TOKEN + "&appid=" + config.appId + "&secret=" + config.appSecret;
    request.post(accessTokenUrl, function(err, res, body) {
      if(err) {
        return callback(error.REQUEST_ERROR(err));
      }
      returnsFunc(body, true, callback);
    });
  }else {

    // from custom server
    request.get(config.accessTokenService, function(err, res, body) {
      if(err) {
        return callback(error.REQUEST_ERROR(err));
      }
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = null;
      }
      if(!body || !body.access_token) {
        return callback(error.TOKEN_SERVICE_FORMAT_ERROR());
      }
      returnsFunc(body, false, callback);
    });
  }
}

/**
 * get ticket
 * @param {String} type [ticket type]
 * @param  {Function} callback(error, ticket)
 */
function getTicket(type, callback) {

  // parse the response object and return ticket
  var returnsFunc = function(body, isNew, callback) {
    var token = (typeof body === "string") ? 
          JSON.parse(body).ticket : body.ticket;
    if(isNew) {
      setPrivateConfig(type + "_ticket", {cred: token, expireTime: Date.now() });
    }
    callback(null, token);
    return;
  };

  // get ticket if not expire
  if(privateConfig.jsapi_ticket.cred && isNotExpire(type + "_ticket", 7200000)) {
    return returnsFunc({ticket: privateConfig.jsapi_ticket.cred }, false, callback);
  }

  // request jsapi ticket if it expired
  formatUrl(api.API_TICKET, function(err, url) {
    if(err) {return callback(err); }
    request.get(url + "&type=" + type, function(err, res, body) {
      if(err) {
        return callback(error.REQUEST_ERROR(err));
      }
      returnsFunc(body, true, callback);
    });
  });
}

/**
 * get url with access token (获得带有access token的url)
 * @param  {String}   url      [api key]
 * @param  {Function} callback(error, url)
 */
function formatUrl(url, callback) {
  getAccessToken(function(err, token) {
    if(err) {return callback(err); }
    callback(null, url + "?access_token=" + token);
  });
}

module.exports = {
  getConfig: getConfig,
  setConfig: setConfig,
  getTicket: getTicket,
  getAccessToken: getAccessToken,
  getUrl: formatUrl,
  api: api
};