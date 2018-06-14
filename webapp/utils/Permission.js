sap.ui.define([
    "com/sap/CloudSCAME/dodorampup/model/MyDirectReportsModel",
    "com/sap/CloudSCAME/dodorampup/model/MyUserModel",
    "com/sap/CloudSCAME/dodorampup/model/UserDetailModel",
    "com/sap/CloudSCAME/dodorampup/utils/CONSTANTS"
], function (MyDirectReportsModel, MyUserModel, UserDetailModel, CONSTANTS) {
    "use strict";

    return {
        isCommitmentEditable: function(oCommitment){
            if(!oCommitment){
                return false;
            }
            
            var bIsMyUser = oCommitment.owner === MyUserModel.getUserId(),
                bIsReviewFinalized = oCommitment.isReviewFinalized,
                bIsCompleted = oCommitment.status === CONSTANTS.COMMITMENT_COMPLETED_STATUS,
                bIsMyDirectReport = MyDirectReportsModel.isMyDirectReport(oCommitment.owner);
        
            if(bIsCompleted){
                if(bIsMyDirectReport && !bIsMyUser){
                    return !bIsReviewFinalized;
                }else{
                    return false;
                }
            } else {
                return bIsMyDirectReport || bIsMyUser;
            }
        },
        
        isTeamReviewEditable: function(oReview){
            var isMyTeamReview = oReview.owner === MyUserModel.getUserId();
            
            return isMyTeamReview;
        },

        isMilestoneEditable: function() {
            var isMyMilestone = UserDetailModel.getUserId() === MyUserModel.getUserId();
            
            return isMyMilestone;
        },
      
        isReviewEditable: function(oReview, bEditable){
            if(!oReview){
                return false;
            }
            
            var sOwner = oReview.owner,
                bIsMyDirectReport = MyDirectReportsModel.isMyDirectReport(sOwner);
            
            return bIsMyDirectReport || !!bEditable;
        }
    };
});