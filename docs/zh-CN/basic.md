Wechat Basic Document
======================

### 向导

- [getAccessToken(callback)](#getaccesstokencallback)

- [getApiTicket(callback)](#getapiticketcallback)

- [getColorList(callback)](#getcolorlistcallback)

- [setWhiteListWithUsername(usernames, callback)](#setwhitelistwithusernameusernames-callback)

- [setWhiteListWithOpenId(openids, callback)](#setwhitelistwithopenidopenids-callback)

- [getSignature(data, callback)](#getsignaturedata-callback)

- [getSignatureSync(data)](#getsignaturesyncdata)


======

### 文档

##### getAccessToken(callback)

获取当前的access token

- **参数:**

    - ***callback***(error, accessToken): `Function`

        ***error***: `Object` 包含错误码和错误信息

        ***accessToken***: `String` 当前的access token

- **示例:**

    ```javascript
      wxCard.basic.getAccessToken(function(err, accessToken) {
        // do something ...
      });
    ```

======

##### getApiTicket(callback)

获取API TICKET，用于JSAPI计算签名时使用

- **参数:**

    - ***callback***(error, ticket): `Function`

        ***error***: `Object` 包含错误码和错误信息

        ***ticket***: `String` 当前的ticket

- **示例:**

    ```javascript
      wxCard.basic.getApiTicket(function(err, ticket) {
        // do something ...
      });
    ```

======


##### getColorList(callback)

获取微信卡券允许使用的背景颜色，创建卡券时只能从其中选择

- **参数:**

    - ***callback***(error, colors): `Function`

        ***error***: `Object` 包含错误码和错误信息

        ***colors***: `Array` 颜色列表，包含颜色名称和颜色代码

- **示例:**

    ```javascript
      wxCard.basic.getColorList(function(err, colors) {
        // colors 的格式: [{name: 'Color010', value: '#55bd47' }, ...]
      });
    ```

======


##### setWhiteListWithUsername(usernames, callback)

使用微信号（非手机号）设置测试白名单，当创建的卡券未通过审核时，可以通过白名单的微信号进行测试领取等操作

- **参数:**

    - ***usernames***: `Array`

        微信号数组

    - ***callback***(error): `Function`

        ***error***: `Object` 包含错误码和错误信息

- **示例:**

    ```javascript
      var usernames = ['kenticny'];
      wxCard.basic.setWhiteListWithUsername(usernames, function(err) {
        // do something ...
      });
    ```

======


##### setWhiteListWithOpenId(openids, callback)

使用微信openid设置白名单， 作用和 `setWhiteListWithUsername`相同

- **参数:**

    - ***openids***: `Array`

        openid数组

    - ***callback***(error): `Function`

        ***error***: `Object` 包含错误码和错误信息

- **示例:**

    ```javascript
      // 这个openid仅用于demo，实际不存在
      var openids = ['c8_tmrjPEct3_9seVe8eTPSOdL3N']; 
      
      wxCard.basic.setWhiteListWithOpenId(openids, function(err) {
        // do something ...
      });
    ```


======


##### getSignature(data, callback)

计算签名，用于JSAPI. 

- **参数:**

    - ***data***: `Array`

        要签名的数据.

    - ***callback***(error, signature): `Function`

        ***error***: `Object` 包含错误码和错误信息

        ***signature***: `String` 签名

- **示例:**

  ```javascript
    var data = ['ApiTicket', 'CardId', 'timestamp'];
    wxCard.basic.getSignature(data, function(err, signature) {
      // do something ...
    });
  ```


======

##### getSignatureSync(data)

计算签名 （同步方法）.

- **参数:**

    - ***data***: `Array`

        要签名的数据.

- **返回:**

    - ***signature***: `String` 签名

- **示例:**

    ```javascript
      var data = ['ApiTicket', 'CardId', 'timestamp'];
      var signature = wxCard.basic.getSignatureSync(data);
    ```