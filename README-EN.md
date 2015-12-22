wechat-card
========================

> Warning: this repo is too old that compared with the wechat official api, Please do the full test before use in production environment.

[![NPM](https://nodei.co/npm/wechat-card.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/wechat-card/)

[![Build Status](https://travis-ci.org/kenticny/wechat-card.svg?branch=master)](https://travis-ci.org/kenticny/wechat-card)

Wechat Card API for NodeJS 

> **Just support card type: CASH, DISCOUNT, GIFT, GROUPON, GENERAL_COUPON, LUCK_MONEY in this verison**

## Install

    npm install wechat-card

## Usage

```javascript
  var wxCard = require("wechat-card");

  wxCard.setConfig({
    appId: "YOUR APP ID",
    appSecret: "YOUR APP SECRET"

    // or config access token service
    // accessTokenService: "http://url"

  });

  wxCard.card.createCard(cardinfo, function(error, cardid) {
    // do something
  });
```

## Documentation

[Wechat Card API](docs/en-US/index.md)

## License

MIT
