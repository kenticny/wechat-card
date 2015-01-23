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

        ***code***: `String` the real code

- **example:**

    ```javascript
      var encryptCode = "XXIzTtMqCxwOaawoE91+VJdsFmv7b8g0VZIZkqf4GWA60Fzpc8ksZ/5ZZ0DVkXdE";

      wxCard.code.codeDecrypt(encryptCode, function(err, code) {
        // do something ...
      });
    ```

======

##### setCodeExpire(code, callback)

Set a code expire.

- **parameters:**

    - ***code***: `String`

      the code of card.

    - ***callback***(error): `Function`

        ***error***: `Object` contains error code and error message

- **example:**

    ```javascript
      // this code does not exist in fact, just a demo
      var code = "882077290937";

      wxCard.code.setCodeExpire(code, function(err) {
        // do something ...
      });
    ```

##### modifyLuckMoneyBalance(code, balance, callback)

Modify the balance of luck money card.

- **parameters:**

    - ***code***: `String`

      the code of card.

    - ***balance***: `Number`

      the balance to be modified. Must be Positive number.

    - ***callback***(error): `Function`

        ***error***: `Object` contains error code and error message

- **example:**

    ```javascript
      // this code does not exist in fact, just a demo
      var code = "882077290937";

      wxCard.code.modifyLuckMoneyBalance(code, 100, function(err) {
        // do something ...
      });
    ```