wechat-card
========================

> 警告：本库使用接口已经与微信当前接口版本相差过多，不能保证可以正常使用，请在正式使用前对各个功能进行严格测试，确认无误后再生产环境使用。由于个人原因导致本库无法继续维护，深感抱歉。

[![NPM](https://nodei.co/npm/wechat-card.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/wechat-card/)

[![Build Status](https://travis-ci.org/kenticny/wechat-card.svg?branch=master)](https://travis-ci.org/kenticny/wechat-card)

#### [English ReadMe](README-EN.md)

微信卡券API接口NODEJS版

> 目前版本仅支持以下几种类型的卡券: `CASH`, `GIFT`, `GROUPON`, `DISCOUNT`, `GENERAL_COUPON`, `LUCK_MONEY`。

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

[卡券详细文档](docs/zh-CN/index.md)

## License

MIT
