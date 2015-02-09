wechat-card
========================

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