Wechat Card
======================

Wechat card api for NodeJS. 


## Notice

> Just support `CASH`, `GIFT`, `GROUPON`, `DISCOUNT`, `GENERAL_COUPON`, `LUCK_MONEY`

We will provide a full support in next version.


## Install

    npm install wechat-card


## Usage

```javascript
  var wxCard = require("wechat-card");

  wxCard.setConfig({
    appId: "YOUR APP ID",
    appSecret: "YOUR APP SECRET"

    // or config url to provide access token service
    // accessTokenService: "http://url"

  });

  // get access token
  wxCard.basic.getAccessToken(function(err, accessToken) {
    // do something ...
  });

```

## Configuration

In first, you need to set appid and appsecret. call `setConfig` to complete the configuration. 

```javascript
  var wxCard = require("wechat-card");

  // config with appid and appsecret
  wxCard.setConfig({
    appId: "YOUR APP ID",
    appSecret: "YOUR APP SECRET"
  });

```

If you want to manage the access token on the other server, you should set `accessTokenServer` to provide the access token.

```javascript
  var wxCard = require("wechat-card");

  // config with the access token service
  wxCard.setConfig({
    accessTokenService: "http://url"
  });

```

> **notice: the url returned data format must be `{access_token: 'ACCEESS_TOKEN'}`**

## API Document

- [Basic](basic.md)

- [Shop](shop.md)

- [Card](card.md)

- [Code](code.md)