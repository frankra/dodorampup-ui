sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  var data = {
    busy: false,
    busyIndicatorDelay: 0
  }

  return new JSONModel(data);
});
