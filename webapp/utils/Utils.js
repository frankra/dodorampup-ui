sap.ui.define([
], function () {
    "use strict";

    return {
        updateArrayLength: function (oArray, iNewLength) {
            if(!(oArray instanceof Array)){
                return oArray;
            }
        
            var iOldLength = oArray.length;
        
            if(iOldLength < iNewLength){
                var iMaxIter = iNewLength - iOldLength;

                for(var i = 0; i < iMaxIter; i++){
                    oArray.push(null);
                }
            }
        
            return oArray;
        },
        
        handlePageableResponse: function(oModel, oResponse){
            var oData = this.updateArrayLength(oResponse.content, oResponse.totalElements);
            oModel.setSizeLimit(oResponse.totalElements);
            oModel.setData(oData);
        }
    };
});