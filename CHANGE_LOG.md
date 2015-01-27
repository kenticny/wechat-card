微信卡券Nodejs版API更新日志
========================

### V1.0.3

- 修正了获取JS API TICKET获取不正常的bug

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