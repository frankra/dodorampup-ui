sap.ui.define([
    'sap/ui/core/UIComponent',
    'com/sap/CloudSCAME/dodorampup/utils/Polyfills'
], function(UIComponent) {
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
        
            //Initialize the router
            this.getRouter().initialize();
        }
    });
});
