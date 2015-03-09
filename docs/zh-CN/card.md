Wechat Card Document
======================

### 向导

- [createCard(card, callback)](#createcardcard-callback)

- [getCardDetail(cardId, callback)](#getcarddetailcardid-callback)

- [getCardIdList(offset, count, callback)](#getcardidlistoffset-count-callback)

- [modifyCard(card, callback)](#modifycardcard-callback)

- [deleteCard(cardId, callback)](#deletecardcardid-callback)

- [modifyCardStock(cardId, number, callback)](#modifycardstockcardid-number-callback)

- [createCardQRCode(cardId, options, callback)](#createcardqrcodecardid-options-callback)


### 文档

##### createCard(card, callback)

创建一个新的卡券，卡券需要通过审核后才可以领取（可通过添加白名单进行测试）

- **参数:**

    - ***card***: `Object` 

      卡券信息，包括卡券类型，基本信息和特殊信息。详细请查看 [卡券信息字段](createcard.md)

    - ***callback***(error, cardId): `Function`

        ***error***: `Object` 包含错误码和错误信息

        ***cardId***: `String` 卡券id.

- **示例:**

    ```javascript
      var card = {
        card_type: "DISCOUNT",
        base_info: {
          // ...
        },
        special_info: {
          // ...
        }
      };

      wxCard.card.createCard(card, function(err, cardId) {
        // do something ...
      });
    ```

======


##### getCardDetail(cardId, callback)

通过卡券id获取卡券详细信息

- **参数:**

    - ***cardId***: `String`

      卡券id.

    - ***callback***(error, card): `Function`

        ***error***: `Object` 包含错误码和错误信息

        ***card***: `Object` 卡券详情.

- **示例:**

    ```javascript

      // 下列卡券id仅用于demo，在实际中不存在
      var cardId = "p1Pj9jr90_SQRaVqYI239Ka1erkI";

      wxCard.card.getCardDetail(cardId, function(err, card) {
        // do something ...
      });
    ```

======


##### getCardIdList(offset, count, callback)

批量获取卡券id，不包含卡券详细信息

- **参数:**

    - ***offset***: `Number`

      列表中第一个元素的位置

    - ***count***: `Number`

      获取的数量

    - ***callback***(error, ids): `Function`

        ***error***: `Object` 包括错误码和错误信息

        ***ids***: `Array` 卡券id列表


- **示例:**

    ```javascript
      wxCard.card.getCardIdList(0, 10, function(err, ids) {
        // do something ...
      });
    ```

======


##### modifyCard(card, callback)

修改卡券部分信息

- **参数:**

    - ***card***: `Object`

      修改的卡券信息, 详情查看[修改卡券字段](modifycard.md)

    - ***callback***(error): `Function`

        ***error***: `Object` 包含错误码和错误信息

- **示例:**

    ```javascript

      // 下面的cardid仅用于demo，实际中不存在
      var card = {
        card_id: "p1Pj9jr90_SQRaVqYI239Ka1erkI",
        base_info: {
          // .. some of base info
        },
        special_info: {
          // ...
        }
      };

      wxCard.card.modifyCard(card, function(err) {
        // do something ...
      });
    ```

======


##### deleteCard(cardId, callback)

通过卡券ID删除卡券信息

- **参数:**

    - ***cardId***: `String`

      卡券ID

    - ***callback***(error): `Function`

        ***error***: `Object` 包含错误码和错误信息

- **示例:**

    ```javascript
      // 下面的cardid仅用于demo，实际中不存在
      var cardId = "p1Pj9jr90_SQRaVqYI239Ka1erkI";

      wxCard.card.deleteCard(cardId, function(err) {
        // do something ..
      });
    ```

======


##### modifyCardStock(cardId, number, callback)

修改卡券库存(base_info.sku.quantity). 

- **参数:**

    - ***cardId***: `String`

      卡券ID

    - ***number***: `Number`

      要修改的库存值，正数表示增加，负数表示减少

    - ***callback***(error): `Function`

        ***error***: `Object` 包含错误码和错误信息


- **示例:**

    ```javascript
      // 下面的cardid仅用于demo，实际中不存在
      var cardId = "p1Pj9jr90_SQRaVqYI239Ka1erkI";

      // 减少10库存
      wxCard.card.modifyCardStock(cardId, -10, function(err) {
        // do something ...
      });

      // 增加10库存
      wxCard.card.modifyCardStock(cardId, 10, function(err) {
        // do something ...
      });
    ```

======


##### createCardQRCode(cardId, options, callback)

生成一个用于领取卡券的二维码

- **参数:**

    - ***cardId***: `String`

      卡券ID

    - ***options***: `Object(Optional)`

      二维码的配置 

      options: 

      - expire_seconds: `Number` 二维码过期时间（单位/秒）.

      - is_unique_code: `Boolean` 是否为一次性

      - outer_id: `Number` 自定义标志，用于区分领取场景

      - balance: `Number` 红包余额，仅在卡券类型为`红包(LUCK_MONEY)`是生效

      - code: `String` 卡券code, 自定义卡券code时为**必填**

      - openid: `String` 指定领取用户openid, bind_openid为true时**必填**

    - ***callback***(error, url): `Function`

        ***error***: `Object` 包括错误码和错误信息

        ***url***: `String` 二维码的链接

- **示例:**

    ```javascript
      // 下面的cardid仅用于demo，实际中不存在
      var cardId = "p1Pj9jr90_SQRaVqYI239Ka1erkI";

      var options = {
        expire_seconds: 1200,
        is_unique_code: true,
        outer_id: 1
      };

      wxCard.card.createCardQRCode(cardId, options, function(err, url) {
        // do something ...
      });
    ```

