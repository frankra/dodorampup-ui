sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
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
            
            console.log(oUserData)

            this._oUserCreationDialog.close();
        }
    });
});