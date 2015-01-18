var config = require("../config");
var request = require("../utils/request");
var error = require("../utils/errors");

exports.batchAddShops = function(shops, callback) {
  if(!shops instanceof Array || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  if(shops.length < 1) {
    return callback(error.SHOPS_LIST_CANNOT_NULL());
  }
  request.post(config.api.CREATE_SHOP, {
    form: JSON.stringify({location_list: shops })
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null, result.location_id_list);
  });
};

exports.batchGetShops = function(offset, count, callback) {

  // set the default parameters
  if(arguments.length < 3) {
    if(typeof offset === "function") {
      callback = offset;
    }
    if(typeof count === "function") {
      callback = count;
    }
    callback = callback || function(){};
    offset = 0; count = 5;
  }

  request.post(config.api.GET_SHOP_LIST, {
    form: JSON.stringify({offset: offset, count: count })
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null, result.location_list);
  });
};