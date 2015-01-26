wechat-card
========================

#### [English ReadMe](README-EN.md)

微信卡券API接口NODEJS版

> 目前版本仅支持以下几种类型的卡券: `CASH`, `GIFT`, `GROUPON`, `DISCOUNT`, `GENERAL_COUPON`, `LUCK_MONEY`。

> 目前版本不支持自定义卡券ID和自定义code

我们会在之后的版本陆续推出这些功能的支持。


## 安装

    npm install wechat-card

## 使用方法

```javascript
  var wxCard = require("wechat-card");

  wxCard.setConfig({
    appId: "YOUR APP ID",
    appSecret: "YOUR APP SECRET"

    // 可以配置提供access token的服务
    // accessTokenService: "http://url"

  });

  wxCard.card.createCard(cardinfo, function(error, cardid) {
    // do something
  });
```

## 文档

[Wechat Card API Document](docs/zh-CN/index.md)

## License

MIT