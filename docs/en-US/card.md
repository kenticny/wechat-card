Wechat Card Document
======================

### Guide

- [createCard(card, callback)](#createcardcard-callback)

- [getCardDetail(cardId, callback)](#getcarddetailcardid-callback)

- [getCardIdList(offset, count, callback)](#getcardidlistoffset-count-callback)

- [modifyCard(card, callback)](#modifycardcard-callback)

- [deleteCard(cardId, callback)](#deletecardcardid-callback)

- [modifyCardStock(cardId, number, callback)](#modifycardstockcardid-number-callback)

- [createCardQRCode(cardId, options, callback)](#createcardqrcodecardid-options-callback)


### Document

##### createCard(card, callback)

Create a new card. You need to wait until the audit is completed. During this period, you can set whitelist to test the card.

- **parameters:**

    - ***card***: `Object` 

      the card information. contains card type, base info, special info. See [Card Fields](createcard.md)

    - ***callback***(error, cardId): `Function`

        ***error***: `Object` contains error code and error message

        ***cardId***: `String` the id of card.

- **example:**

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

Get card details by card id.

- **parameters:**

    - ***cardId***: `String`

      the id of card.

    - ***callback***(error, card): `Function`

        ***error***: `Object` contains error code and error message

        ***card***: `Object` the card details.

- **example:**

    ```javascript

      // this card id just a demo, does not exist in fact
      var cardId = "p1Pj9jr90_SQRaVqYI239Ka1erkI";

      wxCard.card.getCardDetail(cardId, function(err, card) {
        // do something ...
      });
    ```

======


##### getCardIdList(offset, count, callback)

Get the list of card id. Don't contains card details, just id.

- **parameters:**

    - ***offset***: `Number`

      the coordinates of the first element. the list start at offset.

    - ***count***: `Number`

      the size of list.

    - ***callback***(error, ids): `Function`

        ***error***: `Object` contains error code and error message.

        ***ids***: `Array` the id list.


- **example:**

    ```javascript
      wxCard.card.getCardIdList(0, 10, function(err, ids) {
        // do something ...
      });
    ```

======


##### modifyCard(card, callback)

Modify the part card base info.

- **parameters:**

    - ***card***: `Object`

      the new card information. See [Modify Card Fields](modifycard.md)

    - ***callback***(error): `Function`

        ***error***: `Object` contains error code and error message.

- **example:**

    ```javascript

      // this card id does not exist in fact
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

Delete a card by card id. 

- **parameters:**

    - ***cardId***: `String`

      the id of card.

    - ***callback***(error): `Function`

        ***error***: `Object` contains error code and error message.

- **example:**

    ```javascript
      // this card id just a demo, does not exist in fact
      var cardId = "p1Pj9jr90_SQRaVqYI239Ka1erkI";

      wxCard.card.deleteCard(cardId, function(err) {
        // do something ..
      });
    ```

======


##### modifyCardStock(cardId, number, callback)

Modify card stock(base_info.sku.quantity). 

- **parameters:**

    - ***cardId***: `String`

      the id of card.

    - ***number***: `Number`

      the stock value to be modified. the positive number indicates increase, and the negative number indicates reduce

    - ***callback***(error): `Function`

        ***error***: `Object` contains error code and error message


- **example:**

    ```javascript
      // this card id just a demo, does not exist in fact
      var cardId = "p1Pj9jr90_SQRaVqYI239Ka1erkI";

      // reduce
      wxCard.card.modifyCardStock(cardId, -10, function(err) {
        // do something ...
      });

      // increase
      wxCard.card.modifyCardStock(cardId, 10, function(err) {
        // do something ...
      });
    ```

======


##### createCardQRCode(cardId, options, callback)

Create a QR code to collcet code of card.

- **parameters:**

    - ***cardId***: `String`

      the id of card

    - ***options***: `Object(Optional)`

      the options of qrcode. 

      options: 

      - expire_seconds: `Number` the expiration time(second).

      - is_unique_code: `Boolean` disposable qrcode.

      - outer_id: `Number` the custom flag.

      - balance: `Number` the balance of LUCK_MONEY card. just work in `LUCK_MONEY`.

      - code: `String` the code of card. custom code required.

      - openid: `String` the specified user openid. bind openid required.

    - ***callback***(error, url): `Function`

        ***error***: `Object` contains error code and error message

        ***url***: `String` the url of qrcode

- **example:**

    ```javascript
      // this card id just a demo, does not exist in fact
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

