var errors = {
  REQUEST_ERROR: function(err) {
    return {code: 9001, msg: "request error: " + err};
  },
  MISSING_PARAMS: function() {
    return {code: 9002, msg: "missing parameters"};
  },
  MISSING_CARD_OPTION: function() {
    return {code: 9003, msg: "missing card options parameters"};
  },
  ACCESS_TOKEN_ERROR: function() {
    return {code: 9004, msg: "get access token error"};
  },
  SHOPS_LIST_CANNOT_NULL: function() {
    return {code: 9005, msg: "shop list cannot null"};
  },
  LUCK_MONEY_BALANCE_ERROR: function() {
    return {code: 9006, msg: "luck money balance error"};
  },
  INTERFACE_ERROR: function(err) {
    return {code: err.errcode, msg: "wechat interface error: " + err.errmsg};
  }
};

module.exports = errors;