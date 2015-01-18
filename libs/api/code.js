var config = require("../config");
var request = require("../utils/request");
var error = require("../utils/errors");

exports.consumeCode = function(code, callback) {
  if(typeof code !== "string" || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  request.post(config.api.CONSUME_CODE, {
    form: JSON.stringify({code: code })
  }, function(err, result) {
    if(err) {return callback(err); }
    var consumeInfo = result.card;
    consumeInfo.openid = result.openid;
    callback(null, consumeInfo);
  });
};

exports.getCodeDetail = function(code, callback) {
  if(typeof code !== "string" || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  request.post(config.api.GET_CODE_DETAIL, {
    form: JSON.stringify({code: code })
  }, function(err, result) {
    if(err) {return callback(err); }
    var codeDetail = result.card;
    codeDetail.openid = result.openid;
    callback(null, codeDetail);
  });
};

exports.codeDecrypt = function(encryptCode, callback) {
  if(typeof encryptCode !== "string" || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  request.post(config.api.CODE_DECRYPT, {
    form: JSON.stringify({encrypt_code: encryptCode })
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null, result.code);
  });
};

exports.setCodeExpire = function(code, callback) {
  if(typeof code !== "string" || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  request.post(config.api.SET_CODE_EXPIRE, {
    form: JSON.stringify({code: code })
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null);
  });
};

exports.modifyLuckMoneyBalance = function(code, balance, callback) {
  if(typeof code !== "string" || typeof balance !== "number" 
    || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  if(balance < 0) {
    return callback(error.LUCK_MONEY_BALANCE_ERROR());
  }
  request.post(config.api.MODIFY_LUCK_MONEY_BALANCE, {
    form: JSON.stringify({code: code, balance: balance})
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null);
  });
};
