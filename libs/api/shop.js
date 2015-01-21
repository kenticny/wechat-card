var config = require("../config");
var request = require("../utils/request");
var error = require("../utils/errors");

/**
 * batch add shop(location) (批量添加门店)
 * @param  {array}   shops    [shop list 门店列表]
 * @param  {Function} callback(error, ids)
 */
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

    // returns location id list, -1 is failed to add
    callback(null, result.location_id_list);
  });
};

/**
 * batch get shop information (批量获取门店信息)
 * @param  {number}   offset   [the shop list start at offset 列表起始位置]
 * @param  {number}   count    [the quantity of list 列表数量]
 * @param  {Function} callback(error, shops)
 */
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