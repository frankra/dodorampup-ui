sap.ui.define([
    'sap/m/Button',
    'sap/m/Dialog',
    'sap/m/Text'
], function (Button, Dialog, Text) {
    "use strict";
    //Private vars
    var _oModel = new sap.ui.model.resource.ResourceModel({
        bundleName:"com.sap.CloudSCAME.dodorampup.i18n.i18n"
    });  
    var _oBundle = _oModel.getResourceBundle();
    
    function _showSimpleDialog(sState, mParams) {
        var _oDialog = new Dialog({
            title: mParams.title,
            type: 'Message',
            state: sState,
            content: new Text({
                text: mParams.text
            }),
            beginButton: new Button({
                text: _oBundle.getText("OK"),
                press: function () {
                    if(mParams.confirm){
                        mParams.confirm(arguments);
                    }
                    _oDialog.close();
                }
            }),
            afterClose: function () {
                _oDialog.destroy();
            }
        });
        _oDialog.open();
    }
    
    function _showPromptDialog(mParams){
        var _oDialog = new Dialog({
            title: _oBundle.getText(mParams.title),
            type: 'Message',
            state: 'Warning',
            content: new sap.m.Text({
                text: _oBundle.getText(mParams.text)
            }),
            beginButton: new sap.m.Button({
                text: _oBundle.getText(mParams.beginButtonText || 'Yes'),
                press: function (oEvent) {
                    oEvent.getSource().setEnabled(false); //Avoid double click
                    if(mParams.confirm){
                        mParams.confirm(arguments);
                    }
                    _oDialog.close();
                }
            }),
            endButton: new sap.m.Button({
                text: _oBundle.getText(mParams.endButtonText || 'No'),
                press: function (oEvent) {
                    oEvent.getSource().setEnabled(false); //Avoid double click
                    if(mParams.cancel){
                        mParams.cancel(arguments);
                    }
                    _oDialog.close();
                }
            }),
            afterClose: function () {
                _oDialog.destroy();
            }
        });
        _oDialog.open();
    }

    //Public functions
    return {
        showErrorDialog: function (mParameters) {
            var mParams = {
                title: mParameters && mParameters.title ? _oBundle.getText(mParameters.title) : _oBundle.getText("errorDialog.title"),
                text: mParameters && mParameters.text ? _oBundle.getText(mParameters.text) : _oBundle.getText("errorDialog.unknownErrorMessage")
            };
            _showSimpleDialog('Error', mParams);
        },

        showWarningDialog: function (mParameters) {
            var mParams = {
                title: mParameters && mParameters.title ? _oBundle.getText(mParameters.title) : _oBundle.getText("warningDialog.title"),
                text: _oBundle.getText(mParameters.text)
            };
            _showSimpleDialog('Warning', mParams);
        },
        
        showPromptDialog: function (mParams) {
            _showPromptDialog(mParams);
        }
    };
});