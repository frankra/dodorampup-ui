sap.ui.define([
    "com/sap/CloudSCAME/dodorampup/utils/CONSTANTS",
    "com/sap/CloudSCAME/dodorampup/utils/UrlProvider",
    "sap/ui/core/format/DateFormat",
    "sap/m/ValueColor",
    "sap/ui/core/ValueState"
], function (CONSTANTS, UrlProvider, DateFormat, ValueColor, ValueState) {
    "use strict";

    return {
        getTextFromi18n: function(sKey){
            var oResourceBundle = this.getResourceBundle();
            return oResourceBundle.getText(sKey);
        },
        
        isReviewPlanned: function(sStatus, bShowEditOptions){
            var bPlanned = sStatus === CONSTANTS.REVIEW_PLANNED_STATUS;
            
            if(bShowEditOptions != undefined){
                return bPlanned && bShowEditOptions;
            }
            return bPlanned;
        },
   
        formatVerticalReviewName: function(sDate){
            if(!sDate){
                return "";
            }
            
            var oDate = new Date(sDate),
                iMonth = oDate.getMonth(),
                oResourceBundle = this.getResourceBundle();
            return oResourceBundle.getText("VerticalReview") + " " + oResourceBundle.getText("Month_" + iMonth);
        },

        formatReviewPageTitle: function(sState, sType) {
            var sTitle = "",
                oResourceBundle = this.getResourceBundle();
            switch(sState) {
            case CONSTANTS.VIEW_STATE_CREATE:
                sTitle = sType === CONSTANTS.REVIEW_VERTICAL_TYPE ? oResourceBundle.getText("verticalReview.CreateReviewPage.Title") : oResourceBundle.getText("teamReview.CreateReviewPage.Title"); 
                break;
            case CONSTANTS.VIEW_STATE_VIEW:
                sTitle = sType === CONSTANTS.REVIEW_VERTICAL_TYPE ? oResourceBundle.getText("verticalReview.DetailPage.Title") : oResourceBundle.getText("teamReview.DetailPage.Title"); 
                break;
            case CONSTANTS.VIEW_STATE_EDIT:
            case CONSTANTS.VIEW_STATE_EDIT_EMPLOYEE:
                sTitle = sType === CONSTANTS.REVIEW_VERTICAL_TYPE ? oResourceBundle.getText("verticalReview.EditReviewPage.Title") : oResourceBundle.getText("teamReview.EditReviewPage.Title"); 
                break;
            case CONSTANTS.VIEW_STATE_EXECUTE:
                sTitle =  sType === CONSTANTS.REVIEW_VERTICAL_TYPE ? oResourceBundle.getText("verticalReview.ExecuteReviewPage.Title") : oResourceBundle.getText("teamReview.ExecuteReviewPage.Title"); 
                break;
            default:
                break;
            }
            return sTitle;
        },

        formatCommitmentPageTitle: function(sState) {
            var sTitle = "",
                oResourceBundle = this.getResourceBundle();
            switch(sState) {
            case CONSTANTS.VIEW_STATE_CREATE:
                sTitle = oResourceBundle.getText("verticalReview.CreateCommitmentPage.Title");
                break;
            case CONSTANTS.VIEW_STATE_VIEW:
                sTitle = oResourceBundle.getText("verticalReview.CommitmentPage.Title");
                break;
            case CONSTANTS.VIEW_STATE_EDIT:
                sTitle = oResourceBundle.getText("verticalReview.EditCommitmentPage.Title");
                break;
            default:
                break;
            }
            return sTitle;
        },
        
        formatActionPlanPageTitle: function(sState) {
            var sTitle = "",
                oResourceBundle = this.getResourceBundle();
            switch(sState) {
            case CONSTANTS.VIEW_STATE_VIEW:
                sTitle = oResourceBundle.getText("verticalReview.ActionPlanPage.ViewTitle");
                break;
            case CONSTANTS.VIEW_STATE_EDIT:
                sTitle = oResourceBundle.getText("verticalReview.ActionPlanPage.EditTitle");
                break;
            default:
                break;
            }
            return sTitle;
        },

        formatGoalName: function(iGoalId, aGoals) {
            if(!iGoalId || !aGoals){
                return "";
            }
            
            var oFilteredGoal = aGoals.find(function(oGoal){
                return oGoal.id == iGoalId;
            });
            
            if(oFilteredGoal){
                return oFilteredGoal.name; 
            } else {
                return "";
            }
        },

        formatDateTime: function(sDate) {
            if(!sDate){
                return "";
            }else{
                var oFormat = DateFormat.getDateInstance({pattern: CONSTANTS.DATETIME_FORMAT}),
                    oDate = new Date(sDate);
                return oFormat.format(oDate);
            }
            
        },

        formatDate: function(sDate){
            if(!sDate){
                return "";
            }else{
                var oFormat = DateFormat.getDateInstance({pattern: CONSTANTS.DATE_FORMAT}),
                    oDate = new Date(sDate);
                return oFormat.format(oDate);
            }
        },
        
        formatTime: function(sDate){
            if(!sDate){
                return "";
            }else{
                var oFormat = DateFormat.getDateInstance({pattern: CONSTANTS.TIME_FORMAT}),
                    oDate = new Date(sDate);
                return oFormat.format(oDate);
            }
        },
        
        formatAttachmentDialogTitle: function(iLength) {
            return this.getResourceBundle().getText("verticalReview.DetailPage.AttachmentDialog.Title") + " (" + (iLength || 0) + ")";
        },

        formatAttachmentUrl: function(iAttachmentId) {
            return UrlProvider.getUrl("ATTACHMENTS_DOWNLOAD", [iAttachmentId]);
        },

        formatCommitmentObjective: function(sObjective, oReview) {
            if (!sObjective) {
                return "";
            }
            return oReview[CONSTANTS[sObjective]];
        },

        formatSelectedUser: function(sUserId, sSelectedUserId) {
            return sUserId === sSelectedUserId;
        },

        formatSelectedReview: function(iReviewId, sSelectedReviewId) {
            return iReviewId == sSelectedReviewId;
        },

        formatReviewParticipantLabel: function(bViewEditable) {
            return bViewEditable ? '' : this.getResourceBundle().getText("verticalReview.ReviewFieldsFragment.GuestsLabel.Text");
        },
        
        getOwnerName: function(aUsers, sOwnerId){
            if(!aUsers){
                return sOwnerId;
            }
            var oUser = aUsers.find(function(oUser){
                return oUser.userId === sOwnerId;
            });
            if(!oUser){
                return sOwnerId;
            }
            return oUser.defaultFullName;
        },
        
        getButtonTypeByArraySize: function(aObjects) {
            return aObjects && aObjects.length > 0 ? "Accept" : "Default";
        },
        
        formatAvatar: function(sUserId, aAvatars){
            if(!aAvatars){
                return "sap-icon://employee";
            }
            var oAvatar = aAvatars.find(function(oAvatar){
                return oAvatar.userId === sUserId;
            });
            if(!oAvatar){
                return "sap-icon://employee";
            }
            return "data:" + oAvatar.mimeType + ";base64," + oAvatar.photo;
        },
        
        getGoalPlannedText: function(sSatisfactory) {
            if(!sSatisfactory){
                sSatisfactory = sSatisfactory || "-";
            } else {
                sSatisfactory = Math.round(sSatisfactory * 100) / 100;
            }
             
            return this.getResourceBundle().getText("goalFollowUp.GoalDetail.Plan") + ": " + sSatisfactory; 
        },
        
        formatGoalTileColor: function(iProbabilityOfSuccess) {
            switch(iProbabilityOfSuccess) {
            case 1:
                return ValueColor.Error;
            case 2:
                return ValueColor.Critical;
            case 3:
                return ValueColor.Good;
            default:
                return ValueColor.Neutral;
            }
        },
        
        formatGoalWeight: function(iWeight){
            return iWeight > 100 ? 100 : iWeight;
        },
        
        formatGoalMilestoneTileColor: function(iResult, iRegular, iSatisfactory) {
            if(iResult < iRegular) {
                return ValueColor.Error;
            }
            if(iResult < iSatisfactory) {
                return ValueColor.Critical;
            }
            if(iResult >= iSatisfactory) {
                return ValueColor.Good;
            }
            return ValueColor.Neutral;
        },
        
        getMonthLabel: function(iMonth) {
            var date = new Date(),
                language = sap.ui.getCore().getConfiguration().getLanguage();

            date.setDate(2); // Set day to two to avoid timezone issues
            date.setMonth(iMonth - 1);

            return date.toLocaleString(language, { month: "long" }).capitalize();
        },

        getProgressIndicatorState: function(iWeight) {
            if(iWeight < 100) {
                return ValueState.Warning;
            }
            if(iWeight === 100) {
                return ValueState.Success;
            }
            if(iWeight > 100) {
                return ValueState.Error;
            }
            return ValueState.None;
        },
        
        formatTeamReviewMasterTitle: function(sEmployeeId, sEmployeeName){
            if(!!sEmployeeId){
                return this.getResourceBundle().getText("teamReview.MasterPage.EmployeesTitle", sEmployeeName);
            } else {
                return this.getResourceBundle().getText("teamReview.MasterPage.Title");
            }
        }
    };
});