微信卡券Nodejs版API更新日志
========================

### V1.0.7

- 支持方法提供access token

### V1.0.6

- 增加支持创建自定义Code卡券和核销自定义code卡券
- 增加支持指定领取卡券用户接口
- 增加修改卡券Code接口
- 修复config异常

### V1.0.5

- 增加获取JSAPI Ticket方法
- 增加支持创建自定义Code卡券和核销自定义code卡券
- 增加支持指定领取卡券用户接口

### V1.0.4

- 增加JSAPI计算签名方法

### V1.0.3

- 修正了获取Wechat Card TICKET获取不正常的bug

### V1.0.2

- 增加了模块各部分功能的文档（中文/英文）

### V1.0.1

- 修复了AccessToken托管的bug
- 提供了模块接入文档

### V1.0.0

- 支持`礼品券(GIFT)`, `现金券(CASH)`, `折扣券(DISCOUNT)`, `团购券(GROUPON)`, `红包(LUCK_MONEY)`和`通用券(GENERAL_COUPON)`
- 支持以上类型卡券的`创建`, `投放`, `使用`, `修改`, `删除`和`查询`等操作
- 仅支持以上类型卡券非自定义CardId和Code卡券操作
- 支持通过第三方提供AccessToken