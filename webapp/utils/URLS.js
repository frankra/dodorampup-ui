sap.ui.define([
], function () {
    "use strict";

    var mURLS = {
        DESTINATION: '/destinations/dodorampupBackend',

        COUNT_REVIEW_BY_EMPLOYEE_AND_YEAR: "/api/Review/count?owner=#&year=#",
        COUNT_COMMITMENT_BY_EMPLOYEE: "/api/Commitment/count?owner=#",

        MY_USER: '/SFSF/Proxy/MyUser?$select=defaultFullName,title,userId,manager/userId,manager/title,manager/defaultFullName&$expand=manager',
        MY_DIRECT_REPORTS: '/SFSF/Proxy/MyDirectReports',
        USER_DETAIL: "/SFSF/Proxy/User('#')?$select=defaultFullName,title,userId,manager/userId,manager/defaultFullName,directReports/userId&$expand=manager,directReports",

        USERS_BASE: "/SFSF/Proxy/User?$select=defaultFullName,userId,username",
        
        ATTACHMENTS_REVIEW_UPLOAD: "/api/Attachment/review/#",
        ATTACHMENTS_COMMITMENT_UPLOAD: "/api/Attachment/commitment/#",
        ATTACHMENTS_DOWNLOAD: "/api/Attachment/download/#",
        ATTACHMENTS_DELETE: "/api/Attachment/delete/#",

        REVIEW_LIST: "/api/Review?owner=#&year=#&size=#",

        REVIEW_BY_ID: "/api/Review/#",
        REVIEW: "/api/Review",
        VERTICAL_REVIEW_YEARS: "/api/Review/years",

        COMMITMENT_BY_ID: "/api/Commitment/#",
        COMMITMENT_BY_OWNER: "/api/Commitment?owner=#",
        COMMITMENT_BY_OWNER_AND_STATE: "/api/Commitment?owner=#&filterStatus=#&size=#",
        COMMITMENT_BY_REVIEW: "/api/Commitment/review/#?size=#",
        COMMITMENT_BY_REVIEW_AND_STATE_ALL: "/api/Commitment/review/all/#?filterStatus=#&size=#",
        COMMITMENT_BY_ACTION_PLAN: "/api/Commitment/actionPlan/#?size=#",
        COMMITMENT_BY_GOAL: "/api/Commitment/goal/#?size=#",

        COMMENT_BY_COMMITMENT: "/api/Comment/commitment/#",
        COMMENT_BY_ACTION_PLAN: "/api/Comment/actionPlan/#",
        COMMENT_LIST_BY_COMMITMENT: "/api/Comment/commitment/#?size=#",
        COMMENT_LIST_BY_ACTION_PLAN: "/api/Comment/actionPlan/#?size=#",

        ACTION_PLAN_BY_REVIEW: "/api/ActionPlan/review/#?size=#",
        ACTION_PLAN_BY_ID: "/api/ActionPlan/#",

        ACTION_PLAN_BY_GOAL: '/api/ActionPlan/goal/#?size=#',
        
        CHANGE_LOG_BY_REVIEW: "/api/ChangeLog/review/#?size=#",
        CHANGE_LOG_BY_COMMITMENT: "/api/ChangeLog/commitment/#?size=#",
        CHANGE_LOG_BY_ACTION_PLAN: "/api/ChangeLog/actionPlan/#?size=#",

        AVATARS_BASE: "/SFSF/Proxy/Photo?$select=userId,photo,mimeType",
        
        TEAM_REVIEWS: "/api/TeamReview?year=#&filterStatus=#&size=#",
        TEAM_REVIEWS_BY_USER: "/api/TeamReview?year=#&employeeId=#&filterStatus=#&size=#",

        TEAM_REVIEW_YEARS: "/api/TeamReview/years",

        GOALS_TABLE_INDEX: "/api/GoalsTableIndex",
        GOALS: "/SFSF/Goal?year=#&userId=#",
        GOALS_CATEGORIZED: "/SFSF/Goal/Categories?year=#&userId=#",
        GOAL_DETAIL_BY_YEAR: "/SFSF/Goal/#?year=#",
        GOAL_MILESTONE_DETAIL: "/SFSF/Goal/#/Milestone/#?year=#",
        GOAL_MILESTONE_HISTORICAL_LIST: "/api/GoalMilestoneHistorical?goalId=#&milestoneId=#&year=#",
        GOAL_MILESTONE_HISTORICAL: "/api/GoalMilestoneHistorical?year=#&formula=#",
        GOAL_CALCULATE_MILESTONE_HISTORICAL: "/api/GoalMilestoneHistorical/calculate?year=#&formula=#",

        GOAL_MILESTONE_MONTHLY_CHART_DATA: "/api/Graph/Monthly?milestoneId=#&year=#&lastYear=#&average=#&regression=#",
        GOAL_MILESTONE_ACCUMULATED_CHART_DATA: "/api/Graph/Accumulated?milestoneId=#&year=#&lastYear=#&average=#&regression=#"
    };

    return Object.freeze(mURLS);
});