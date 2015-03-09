Wechat Code Document
======================

### 向导

- [consumeCode(code, callback)](#consumecodecode-callback)

- [getCodeDetail(code, callback)](#getcodedetailcode-callback)

- [modifyCode(code, cardid, newcode, callback)](#modifycodecode-cardid-newcode-callback)

- [codeDecrypt(encryptCode, callback)](#codedecryptencryptcode-callback)

- [setCodeExpire(code, callback)](#setcodeexpirecode-callback)

- [modifyLuckMoneyBalance(code, balance, callback)](#modifyluckmoneybalancecode-balance-callback)


### 文档

##### consumeCode(code, [cardId ], callback)

使用卡券code

- **参数:**

    - ***code***: `String`

      卡券code

    - ***cardId***: `String(可选)`

      卡券ID, code为自定义code时为必填

    - ***callback***(error, consumeInfo): `Function`

        ***error***: `Object` 包含错误代码和错误信息

        ***consumeInfo***: `Object` 包含用户openid和卡券id

- **示例:**

    ```javascript
      // 下面的code仅用于demo，实际中不存在
      var code = "882077290937";

      wxCard.code.consumeCode(code, function(err, consumeInfo) {
        // do something ...
      });
    ```

======


##### getCodeDetail(code, callback)

查询卡券code的详细信息

- **参数:**

    - ***code***: `String`

      卡券code

    - ***callback***(error, details): `Function`

        ***error***: `Object` 包含错误代码和错误信息

        ***details***: `Object` 包含用户openid，卡券id和卡券有效时间


- **示例:**

    ```javascript
      // 下面的code仅用于demo，实际中不存在
      var code = "882077290937";

      wxCard.code.getCodeDetail(code, function(err, details) {
        // do something ...
      });

    ```

======

##### modifyCode(code, cardid, newcode, callback)

修改Code

使用场景：在自定义SN时，当卡券转增后建议修改Code.

- **参数:**

    - ***code***: `String`

      原始Code

    - ***cardid***: `String`

      code所属的卡券ID

    - ***newcode***: `String`

      新的Code

    - ***callback***(error): `Function`

        ***error***: `Object` 包含错误代码和错误信息

- **实例:**

    ```javascript

      // 下面的卡券id和code仅用于demo，实际中不存在
      var code = "882077290937";
      var cardId = "p1Pj9jr90_SQRaVqYI239Ka1erkI";
      var newcode = "883920048827";

      wxCard.code.modifyCode(code, cardId, newcode, function(err) {
        // do something ...
      });
    ```

======

##### codeDecrypt(encryptCode, callback)

解码code

使用场景: 通过JSAPI拉取卡券列表时需要解码code; 在卡券内跳转第三方链接是需要解码得到真实code.

- **参数:**

    - ***encryptCode***: `String`

      加密的code

    - ***callback***(error, code): `Function`

        ***error***: `Object` 包含错误代码和错误信息

        ***code***: `String` 真实code

- **示例:**

    ```javascript
      var encryptCode = "XXIzTtMqCxwOaawoE91+VJdsFmv7b8g0VZIZkqf4GWA60Fzpc8ksZ/5ZZ0DVkXdE";

      wxCard.code.codeDecrypt(encryptCode, function(err, code) {
        // do something ...
      });
    ```

======

##### setCodeExpire(code, callback)

是一个卡券code

- **参数:**

    - ***code***: `String`

      卡券code

    - ***callback***(error): `Function`

        ***error***: `Object` 包含错误代码和错误信息

- **示例:**

    ```javascript
      // 下面的code仅用于demo，实际中不存在
      var code = "882077290937";

      wxCard.code.setCodeExpire(code, function(err) {
        // do something ...
      });
    ```

##### modifyLuckMoneyBalance(code, balance, callback)

修改红包余额

- **参数:**

    - ***code***: `String`

      卡券code

    - ***balance***: `Number`

      要修改的红包余额，必须为正数

    - ***callback***(error): `Function`

        ***error***: `Object` 包含错误代码和错误信息

- **示例:**

    ```javascript
      // 下面的code仅用于demo，实际中不存在
      var code = "882077290937";

      wxCard.code.modifyLuckMoneyBalance(code, 100, function(err) {
        // do something ...
      });
    ```