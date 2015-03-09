var config = require("../config");
var request = require("../utils/request");
var error = require("../utils/errors");

/**
 * consume a code (使用卡券)
 * @param  {string}   code     [code of card 卡券兑换码]
 * @param  {Function} callback(error, consumeinfo)
 */
exports.consumeCode = function(code, cardId, callback) {
  if(typeof cardId === "function" && !callback) {
    callback = cardId; cardId = "";
  }
  if(typeof code !== "string" || typeof cardId !== "string" 
    || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  var codeObj = {code: code};

  // custom code have to fill card id
  if(cardId) {
    codeObj["card_id"] = cardId;
  }
  request.post(config.api.CONSUME_CODE, {
    form: JSON.stringify(codeObj)
  }, function(err, result) {
    if(err) {return callback(err); }
    var consumeInfo = result.card;
    consumeInfo.openid = result.openid;
    callback(null, consumeInfo);
  });
};

/**
 * get code detail information (获取卡券兑换码的详细信息)
 * @param  {string}   code     [code of card 卡券兑换码]
 * @param  {Function} callback(error, codeinfo)
 */
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

/**
 * modify code （修改code）
 * @param  {string}   code     [code ]
 * @param  {string}   cardid   [card id]
 * @param  {string}   newcode  [new code]
 * @param  {Function} callback(error)
 */
exports.modifyCode = function(code, cardid, newcode, callback) {
  if(typeof code !== "string" || typeof cardid !== "string"
    || typeof newcode !== "string" || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  request.post(config.api.MODIFY_CODE, {
    form: JSON.stringify({
      code: code, 
      card_id: cardid,
      new_code: newcode
    })
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null);
  });
};

/**
 * decrypt code (code解码)
 * @param  {string}   encryptCode [encrypt code 加密的兑换码]
 * @param  {Function} callback(error, code)
 */
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

/**
 * set a code expire (设置卡券兑换码过期)
 * @param {string}   code     [code of card 卡券兑换码]
 * @param {Function} callback(error)
 */
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

/**
 * modify luck money balance(just work when card type is LUCK_MONEY) 
 * (修改红包余额，仅适用于卡券类型为红包)
 * @param  {string}   code     [code of card 卡券兑换码]
 * @param  {number}   balance  [the balance of luck money 红包余额]
 * @param  {Function} callback(error)
 */
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
