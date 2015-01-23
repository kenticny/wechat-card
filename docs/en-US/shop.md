Wechat Shop Document
======================

### Guide

- [batchAddShops(shops, callback)](#batchaddshopsshops-callback)

- [batchGetShops(offset, count, callback)](#batchgetshopsoffset-count-callback)

### Document

##### batchAddShops(shops, callback)

Register shop to wechat [MP](https://mp.weixin.qq.com/) (BATCH).

- **parameters:**

    - ***shops***: `Array` the array of shop information

    - ***callback***(error, shopids): `Function`

        - ***error***: `Object` contains error code and error message

        - ***shopids***: `Array` the list of shop ids, if failed to add, shop id is -1

- **example:**
  
    ```javascript 
      // the demo data from wechat card official document
      var shops = [{
        "business_name":"麦当劳", 
        "branch_name":"赤岗店",
        "province":"广东省",
        "city":"广州市",
        "district":"海珠区", 
        "address":"中国广东省广州市海珠区艺苑路 11 号", 
        "telephone":"020-89772059", 
        "category":"房产小区",
        "longitude":"115.32375",
        "latitude":"25.097486" 
      }, {
        "business_name":"麦当劳", 
        "branch_name":"珠江店",
        "province":"广东省",
        "city":"广州市",
        "district":"海珠区", 
        "address":"中国广东省广州市海珠区艺苑路 12 号", 
        "telephone":"020-89772059", 
        "category":"房产小区",
        "longitude":"113.32375",
        "latitude":"23.097486"
      }];

      wxCard.shop.batchAddShops(shops, function(err, ids) {
        // do something ...
      });
    ```

##### batchGetShops(offset, count, callback)

Get list of shops information. (BATCH)

- **parameters:**

    - ***offset***: `Number`

      the coordinates of the first element. the list start at offset.

    - ***count***: `Number`

      the size of list.

    - ***callback***(error, shops): `Function`

        ***error***: `Object` contains error code and error message.

        ***shops***: `Array` the shop list.

- **example:**

    ```javascript
      wxCard.shop.batchGetShops(0, 10, function(err, shops) {
        // do something ...
      });
    ```