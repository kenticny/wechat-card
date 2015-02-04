Wechat Basic Document
======================

### Guide

- [getAccessToken(callback)](#getaccesstokencallback)

- [getApiTicket(callback)](#getapiticketcallback)

- [getColorList(callback)](#getcolorlistcallback)

- [setWhiteListWithUsername(usernames, callback)](#setwhitelistwithusernameusernames-callback)

- [setWhiteListWithOpenId(openids, callback)](#setwhitelistwithopenidopenids-callback)

- [getSignature(data, callback)](#getsignaturedata-callback)

- [getSignatureSync(data)](#getsignaturesyncdata)

======

### Document

##### getAccessToken(callback)

Get the current access token.

- **parameters:**

    - ***callback***(error, accessToken): `Function`

        ***error***: `Object` contains error code and error message

        ***accessToken***: `String` the current access token

- **example:**

    ```javascript
      wxCard.basic.getAccessToken(function(err, accessToken) {
        // do something ...
      });
    ```

======

##### getApiTicket(callback)

Get api ticket, for Wechat Card JSAPI signature.

- **parameters:**

    - ***callback***(error, ticket): `Function`

        ***error***: `Object` contains error code and error message

        ***ticket***: `String` the current js api ticket

- **example:**

    ```javascript
      wxCard.basic.getApiTicket(function(err, ticket) {
        // do something ...
      });
    ```

======


##### getColorList(callback)

Get wechat card background colors, you have to use color name when create card.

- **parameters:**

    - ***callback***(error, colors): `Function`

        ***error***: `Object` contains error code and error message

        ***colors***: `Array` color list, contains color name and color value

- **example:**

    ```javascript
      wxCard.basic.getColorList(function(err, colors) {
        // colors format: [{name: 'Color010', value: '#55bd47' }, ...]
      });
    ```

======


##### setWhiteListWithUsername(usernames, callback)

Set whitelist with wechat username. The wechat username in whitelist can get code of card when card does not pass the audit.

- **parameters:**

    - ***usernames***: `Array`

        the array of wechat username. (not phone number, not QQ number)

    - ***callback***(error): `Function`

        ***error***: `Object` contains error code and error message

- **example:**

    ```javascript
      var usernames = ['kenticny'];
      wxCard.basic.setWhiteListWithUsername(usernames, function(err) {
        // do something ...
      });
    ```

======


##### setWhiteListWithOpenId(openids, callback)

Set whitelist with wechat openID. see `setWhiteListWithUsername`

- **parameters:**

    - ***openids***: `Array`

        the array of wechat openid

    - ***callback***(error): `Function`

        ***error***: `Object` contains error code and error message

- **example:**

    ```javascript
      // just a demo, doesn't exist in fact
      var openids = ['c8_tmrjPEct3_9seVe8eTPSOdL3N']; 
      
      wxCard.basic.setWhiteListWithOpenId(openids, function(err) {
        // do something ...
      });
    ```

======


##### getSignature(data, callback)

Get Signature. 

- **parameters:**

    - ***data***: `Array`

        the array of data to be encrypted.

    - ***callback***(error, signature): `Function`

        ***error***: `Object` contains error code and error message

        ***signature***: `String` the signature

- **example:**

  ```javascript
    var data = ['ApiTicket', 'CardId', 'timestamp'];
    wxCard.basic.getSignature(data, function(err, signature) {
      // do something ...
    });
  ```


======

##### getSignatureSync(data)

Get Signature Synchronous.

- **paramters:**

    - ***data***: `Array`

        the array of data to be encrypted.

- **return:**

    - ***signature***: `String` 

- **example:**

    ```javascript
      var data = ['ApiTicket', 'CardId', 'timestamp'];
      var signature = wxCard.basic.getSignatureSync(data);
    ```