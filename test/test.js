var wxCard = require("../index");

describe("Wechat Card Basic API", function() {
  it("Get Access Token", function(done) {
    wxCard.basic.getAccessToken(function(err, res) {
      done();
    });
  });

  it("Get Api Ticket", function(done) {
    wxCard.basic.getApiTicket(function(err, res) {
      done();
    });
  });

  it("Get JsApi Ticket", function(done) {
    wxCard.basic.getJsApiTicket(function(err, res) {
      done();
    });
  });
});

describe("Wechat Card Card API", function() {
  it("Create Card", function(done) {
    wxCard.card.createCard({}, function(err, res) {
      done();
    });
  });

  it("Get Card Detail", function(done) {
    wxCard.card.createCard({}, function(err, res) {
      done();
    });
  });

  it("Get Card Id List", function(done) {
    wxCard.card.getCardIdList(function(err, res){
      done();
    });
  });

  it("Modify Card", function(done) {
    wxCard.card.modifyCard({}, function(err, res) {
      done();
    });
  });

  it("Delete Card", function(done) {
    wxCard.card.deleteCard("pyRSqjpOxaMX_nEh_wum_jUHARz8", function(err, res) {
      done();
    });
  });

  it("Modify Card Stock", function(done) {
    wxCard.card.modifyCardStock("pyRSqjpOxaMX_nEh_wum_jUHARz8", -10, function(err, res) {
      done();
    });
  });

  it("Create Card QR Code", function(done) {
    wxCard.card.createCardQRCode("pyRSqjpOxaMX_nEh_wum_jUHARz8", function(err, res) {
      done();
    });
  });

});

describe("Wechat Card Code API", function() {
  it("Consume Code", function(done) {
    wxCard.code.consumeCode("344964648644", function(err, res) {
      done();
    });
  });

  it("Get Code Detail", function(done) {
    wxCard.code.getCodeDetail("344964648644", function(err, res) {
      done();
    });
  });

  it("Decrypt Code", function(done) {
    wxCard.code.codeDecrypt("aa", function(err, res) {
      done();
    });
  });

  it("Set Code Expire", function(done) {
    wxCard.code.setCodeExpire("957871595617", function(err, res) {
      done();
    });
  });

  it("Modify Luck Money Balance", function(done) {
    wxCard.code.modifyLuckMoneyBalance("aa", 50, function(err, res) {
      done();
    });
  });

  it("Modify Code", function(done) {
    wxCard.code.modifyCode("123123123123", "pyRSqjpOxaMX_nEh_wum_jUHARz8", 
      "21123123124", function() {
        done();
      });
  });
});
