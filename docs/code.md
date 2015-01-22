Wechat Code Document
======================

### Guide

- [consumeCode(code, callback)](#consumecodecode-callback)

- [getCodeDetail(code, callback)](#getcodedetailcode-callback)

- [codeDecrypt(encryptCode, callback)](#codedecryptencryptcode-callback)

- [setCodeExpire(code, callback)](#setcodeexpirecode-callback)

- [modifyLuckMoneyBalance(code, balance, callback)](#modifyluckmoneybalancecode-balance-callback)


### Document

##### consumeCode(code, callback)

Consume a code of card.

- **parameters:**

    - ***code***: `String`

      the code of card

    - ***callback***(error, consumeInfo): `Function`

        ***error***: `Object` contains error code and error message

        ***consumeInfo***: `Object` contains openid and card id

- **example:**

    ```javascript
      // this code does not exist in fact, just a demo
      var code = "882077290937";

      wxCard.code.consumeCode(code, function(err, consumeInfo) {
        // do something ...
      });
    ```

======


##### getCodeDetail(code, callback)

Get code details.

- **parameters:**

    - ***code***: `String`

      the code of card

    - ***callback***(error, details): `Function`

        ***error***: `Object` contains error code and error message

        ***details***: `Object` contains openid, card id, and times


- **example:**

    ```javascript
      // this code does not exist in fact, just a demo
      var code = "882077290937";

      wxCard.code.getCodeDetail(code, function(err, details) {
        // do something ...
      });

    ```

##### codeDecrypt(encryptCode, callback)

Decrypt a code.

Scene: get card list with jsapi need decrypt code, and redirect a url in card need decrypt code.

- **parameters:**

    - ***encryptCode***: `String`

      encrypt code.

    - ***callback***(error, code): `Function`

        ***error***: `Object` contains error code and error message

##### setCodeExpire(code, callback)

##### modifyLuckMoneyBalance(code, balance, callback)