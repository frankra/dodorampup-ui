sap.ui.define([
    'sap/ui/core/UIComponent',
    'com/sap/CloudSCAME/dodorampup/model/AppStateModel',
    'com/sap/CloudSCAME/dodorampup/model/UsersModel'
], function(UIComponent, AppStateModel, UsersModel) {
    'use strict';
    return UIComponent.extend('com.sap.CloudSCAME.dodorampup.Component', {
        metadata: {
            manifest: 'json'
        },
        /**
        * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
        * @public
        * @override
        */
        init: function() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            
            this.setModel(AppStateModel, 'AppState');
            this.setModel(UsersModel, 'Users');

            //Initialize the router
            this.getRouter().initialize();
        }
    });
});
