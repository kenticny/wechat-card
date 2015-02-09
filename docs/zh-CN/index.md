Wechat Card
======================

微信卡券API接口NODEJS版。


## 特别提醒

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

    // 或者配置其他提供access token的服务
    // accessTokenService: "http://url"

  });

  // 获取 access token
  wxCard.basic.getAccessToken(function(err, accessToken) {
    // do something ...
  });

```

## 配置项

首先你需要调用`setConfig`配置微信APPID和APPSECRET


```javascript
  var wxCard = require("wechat-card");

  // 使用appid和appsecret配置
  wxCard.setConfig({
    appId: "YOUR APP ID",
    appSecret: "YOUR APP SECRET"
  });

```

如果你的ACCESS TOKEN是由其他的服务提供的，那么可以按照下面进行配置

```javascript
  var wxCard = require("wechat-card");

  // 使用提供access token服务进行配置
  wxCard.setConfig({
    accessTokenService: "http://url"
  });

```

> **注意：提供access token的服务返回的数据格式必须为 `{access_token: 'ACCEESS_TOKEN'}`**

## API文档

- [Basic](basic.md)

- [Shop](shop.md)

- [Card](card.md)

- [Code](code.md)