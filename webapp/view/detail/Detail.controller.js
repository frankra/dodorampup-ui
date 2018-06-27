sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'com/sap/CloudSCAME/dodorampup/model/UsersModel'
], function (Controller, JSONModel, UsersModel) {
    "use strict";

    return Controller.extend("com.sap.CloudSCAME.dodorampup.view.detail.Detail", {

        _oUserDataModel: null,

        onInit: function () {
            this._oUserDataModel = new JSONModel();
            this.getView().setModel(this._oUserDataModel, "UserModel");

            this.getOwnerComponent().getRouter().getRoute("viewDetail").attachPatternMatched(this.handlePatternMatched.bind(this));
        },

        handlePatternMatched: function (oEvent) {
            var sUserId = oEvent.getParameters().arguments.id;
            
            this.getView().setBusy(true);

            this._getUserById_FakeUserService(sUserId)
                .then(function (oUser) {

                    this.getView().setBusy(false);
                    this._oUserDataModel.setData(oUser);

                }.bind(this))
                .catch(function (oError) {
                    //Show error dialog
                });

        },

        _getUserById_FakeUserService: function (sUserId) {
            return new Promise(function (fnResolve, fnReject) {
                setTimeout(function () {
                    var aUsers = UsersModel.getData();

                    for (var i = 0, ii = aUsers.length; i < ii; i++) {
                        if (aUsers[i].id === parseInt(sUserId, 10)) {
                            fnResolve(aUsers[i]);
                            return;
                        }
                    }

                    fnResolve(null);

                }, 300);
            })
        }



    });
});
