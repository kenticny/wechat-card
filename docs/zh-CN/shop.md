Wechat Shop Document
======================

### 向导

- [batchAddShops(shops, callback)](#batchaddshopsshops-callback)

- [batchGetShops(offset, count, callback)](#batchgetshopsoffset-count-callback)

### 文档

##### batchAddShops(shops, callback)

批量注册门店到 [MP](https://mp.weixin.qq.com/) .

- **参数:**

    - ***shops***: `Array` 门店信息数组

    - ***callback***(error, shopids): `Function`

        - ***error***: `Object` 包含错误代码和错误信息，详情查看[门店信息字段](createshop.md)

        - ***shopids***: `Array` 门店ID， 如果门店添加失败，则id为-1

- **示例:**
  
    ```javascript 
      // demo数据来自于微信卡券官方文档
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

批量获取门店信息

- **参数:**

    - ***offset***: `Number`

      列表第一个元素的位置

    - ***count***: `Number`

      列表的大小

    - ***callback***(error, shops): `Function`

        ***error***: `Object` 包含错误代码和错误信息

        ***shops***: `Array` 门店列表

- **示例:**

    ```javascript
      wxCard.shop.batchGetShops(0, 10, function(err, shops) {
        // do something ...
      });
    ```