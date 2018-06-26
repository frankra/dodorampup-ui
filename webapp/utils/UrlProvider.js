sap.ui.define([
    'com/sap/CloudSCAME/dodorampup/utils/URLS'
],function(URLS){
    "use strict";
    
    return {
        _mURLS: URLS,
        
        getUrl: function(sUrlConstant, aKeys){
            var sURL = this._mURLS[sUrlConstant];
            var sDestination = this._mURLS['DESTINATION']; 
      
            if (!sURL){
                throw new Error('Url defined by Constant: ' + sUrlConstant + ' not found in UrlProvider.js');
            }
      
            if (aKeys) {
                aKeys.forEach(function(sKey){
                    sURL = sURL.replace('#', sKey);
                });
            }
        
            if(sDestination){
                sURL = sDestination + sURL;
            }
        
            return sURL;
        }
    };
});