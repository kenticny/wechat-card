var config = require("../config");
var request = require("../utils/request");
var error = require("../utils/errors");

/**
 * create a wechat card (创建卡券)
 * @param  {object}   card     [card info 卡券信息]
 * @param  {Function} callback(error, cardid)
 */
exports.createCard = function(card, callback) {
  if(typeof card !== "object" || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  
  var card_type = card.card_type;
  var base_info = card.base_info;
  var special_info = card.special_info;

  // check the necessary parameters
  if(!card_type || typeof card_type !== "string" || !base_info) {
    return callback(error.MISSING_CARD_OPTION());
  }

  // assembling create card request data
  var cardData = {};
  cardData["card_type"] = card_type;
  cardData[card_type.toLowerCase()] = {};
  cardData[card_type.toLowerCase()]["base_info"] = base_info;

  if(special_info && typeof special_info === "object") {
    for(var i in special_info) {
      cardData[card_type.toLowerCase()][i] = special_info[i];
    }
  }

  request.post(config.api.CREATE_CARD, {
    form: JSON.stringify({card: cardData })
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null, result.card_id);
  });
};

/**
 * get card detail info by card id (通过cardid获取卡券详细信息)
 * @param  {string}   cardId   [card id 卡券id]
 * @param  {Function} callback(error, card)
 */
exports.getCardDetail = function(cardId, callback) {
  if(typeof cardId !== "string" || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }

  request.post(config.api.GET_CARD_DETAIL, {
    form: JSON.stringify({card_id: cardId })
  }, function(err, result) {
    if(err) {return callback(err); }

    // assembling format card information
    var cardData = {};
    cardData["card_type"] = result.card.card_type;
    var cardInfo = result.card[result.card.card_type.toLowerCase()];
    cardData["base_info"] = cardInfo.base_info;
    delete cardInfo.base_info;
    cardData["special_info"] = cardInfo;

    callback(null, cardData);
  });
};

/**
 * get card id list, just ids (获取卡券id列表, 仅有卡券id)
 * @param  {number}   offset   [the id list start at offset 列表的起始位置]
 * @param  {number}   count    [the quantity of list 列表数量]
 * @param  {Function} callback(error, ids)
 */
exports.getCardIdList = function(offset, count, callback) {

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

  request.post(config.api.GET_CARD_ID_LIST, {
    form: JSON.stringify({offset: offset, count: count })
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null, result.card_id_list);
  });

};

/**
 * modify card info (修改卡券信息)
 * @param  {object}   card     [new card info 卡券信息]
 * @param  {Function} callback(error)
 */
exports.modifyCard = function(card, callback) {
  if(typeof card !== "object" || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }

  var cardId = card.card_id;
  var baseInfo = card.base_info;
  var specialInfo = card.special_info;

  if(!cardId || typeof cardId !== "string") {
    return callback(error.MISSING_CARD_OPTION());
  }

  // get the card type
  exports.getCardDetail(cardId, function(err, currentCard) {
    var card_type = currentCard.card_type;

    // set card update info
    var updateData = {};
    updateData["card_id"] = cardId;
    updateData[card_type.toLowerCase()] = {};
    updateData[card_type.toLowerCase()]["base_info"] = baseInfo;

    if(specialInfo && typeof specialInfo === "object") {
      for(var i in specialInfo) {
        updateData[card_type.toLowerCase()][i] = specialInfo[i];
      }
    }

    request.post(config.api.MODIFY_CARD, {
      form: JSON.stringify(updateData)
    }, function(err, result) {
      if(err) {return callback(err); }
      callback(null);
    });
  });

};

/**
 * delete card by card id (通过cardid删除卡券)
 * @param  {string}   cardId   [card id 卡券id]
 * @param  {Function} callback(error)
 */
exports.deleteCard = function(cardId, callback) {
  if(typeof cardId !== "string" || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }
  request.post(config.api.DELETE_CARD, {
    form: JSON.stringify({card_id: cardId })
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null);
  });
};

/**
 * modify card stock (base_info.sku.quantity) (修改卡券库存)
 * @param  {string}   cardId   [card id 卡券id]
 * @param  {number}   number   [value to be modified 修改的数量]
 *                             positive number -> increase (正数表示增加)
 *                             negative number -> reduce (负数表示减少)
 * @param  {Function} callback(error)
 */
exports.modifyCardStock = function(cardId, number, callback) {
  if(typeof cardId !== "string" || typeof number !== "number" 
    || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }

  // set modify parameters
  var params = {};
  params["card_id"] = cardId;
  var field = number > 0 ? "increase_stock_value" : "reduce_stock_value";
  params[field] = Math.abs(number);

  request.post(config.api.MODIFY_CARD_STOCK, {
    form: JSON.stringify(params)
  }, function(err, result) {
    if(err) {return callback(err); }
    callback(null);
  });

};

/**
 * create card qrcode  (创建卡券二维码，用于领取卡券)
 * @param  {string}   cardId   [cardid 卡券id]
 * @param  {object}   options  [qrcode options 二维码配置信息]
 * @param  {Function} callback(error, qrcodeurl)
 */
exports.createCardQRCode = function(cardId, options, callback) {

  // set options optional
  if(typeof options === "function" && !callback) {
    callback = options; options = {};
  }
  if(typeof cardId !== "string" || typeof options !== "object" 
    || typeof callback !== "function") {
    return callback(error.MISSING_PARAMS());
  }

  // qrcode options
  var qrcodeOptions = {
    action_name: "QR_CARD",
    action_info: { 
      card: {
        card_id: cardId
      } 
    }
  };
  
  // optional parameters
  if(options.expire_seconds) {
    qrcodeOptions.action_info.card.expire_seconds = options.expire_seconds;
  }
  if(options.is_unique_code) {
    qrcodeOptions.action_info.card.is_unique_code = options.is_unique_code;
  }
  if(options.outer_id) {
    qrcodeOptions.action_info.card.outer_id = options.outer_id;
  }

  // balance option need card type luck money
  if(options.balance) {
    qrcodeOptions.action_info.card.balance = options.balance;
  }

  // custom code
  if(options.code) {
    qrcodeOptions.action_info.card.code = options.code;
  }

  // bind user
  if(options.openid) {
    qrcodeOptions.action_info.card.openid = options.openid;
  }

  // generate card qrcode ticket 
  // and get qrcode url by ticket
  request.post(config.api.CREATE_CARD_QR_CODE_TICKET, {
    form: JSON.stringify(qrcodeOptions)
  }, function(err, result) {
    if(err) {return callback(err); }
    var qrcodeUrl = config.api.SHOW_CARD_QR_CODE + "?ticket=" + encodeURI(result.ticket);
    callback(null, qrcodeUrl);
  });
};