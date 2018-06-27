sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  var data = [{
    "id": 1,
    "name": "Rafael Frank",
    "cpf": "123123123",
    "phone": "123123123",
    "birthdate": "1992-01-22",
    "email": "rafaelfrank@sap.com",
    "address": "Rua blabla",
    "housenumber": "311",
    "city": "Test City",
    "state": "Test State",
    "country": "Test Country",
    "cep": "9399000"
  },{
    "id": 2,
    "name": "Dodokd",
    "cpf": "213213",
    "phone": "333232",
    "birthdate": "1992-02-1",
    "email": "doodkd@sap.com",
    "address": "Rua cscs",
    "housenumber": "1231",
    "city": "Test City",
    "state": "Test State",
    "country": "Test Country",
    "cep": "9932"
  }];

  return new JSONModel(data);
});
