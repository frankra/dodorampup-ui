sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'com/sap/CloudSCAME/dodorampup/model/UsersModel'
], function (Controller, JSONModel, UsersModel) {
    "use strict";

    return Controller.extend("com.sap.CloudSCAME.dodorampup.view.master.Master", {

        _oUserCreationDialog: null,
        _oUserDataModel: null,
        
        onInit: function () { 
            this._oUserDataModel = new JSONModel();
            this.getView().setModel(this._oUserDataModel, "UserModel");
            this._oUserCreationDialog = this.getView().byId('creationDialog');
        },

        onNewTaskClicked: function () {
            this._oUserCreationDialog.open();
        },

        handleCancelPress: function(){
            this._oUserCreationDialog.close();
        },

        handleSavePress: function(){
            //Persist
            var oUserData = this._oUserDataModel.getData();

            //To be removed once we connect to the backend
            var aUsers = UsersModel.getData();
            oUserData.id = aUsers.length + 1;
            aUsers.push(oUserData);
            UsersModel.setData(aUsers);
            //end

            this._oUserCreationDialog.close();
        },

        onUserSelected: function(oEvent){
            var oBindingContext = oEvent.getSource().getBindingContext('Users');
            var oUser = oBindingContext.getObject();
            
            this.getOwnerComponent().getRouter().navTo("viewDetail", {
                id: oUser.id
            })
        }
    });
});