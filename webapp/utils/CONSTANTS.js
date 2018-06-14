sap.ui.define([
], function () {
        "use strict";


        var mCONSTANTS = {
                DEFAULT_TOP: 20,

                // Review
                REVIEW_VERTICAL_TYPE: 'VERTICAL',
                REVIEW_TEAM_TYPE: 'TEAM',
                REVIEW_PLANNED_STATUS: 'PLANNED',
                REVIEW_COMPLETED_STATUS: 'COMPLETED',

                // Commitment
                COMMITMENT_IN_PROGRESS_STATUS: 'IN_PROGRESS',
                COMMITMENT_COMPLETED_STATUS: 'COMPLETED',
                COMMITMENT_LOW_PRIORITY: 'LOW',

                // View states
                VIEW_STATE_VIEW: 'VIEW',
                VIEW_STATE_CREATE: 'CREATE',
                VIEW_STATE_CREATE_REVIEW: 'CREATE_REVIEW',
                VIEW_STATE_CREATE_ACTION_PLAN: 'CREATE_ACTION_PLAN',
                VIEW_STATE_CREATE_COMMITMENT: 'CREATE_COMMITMENT',
                VIEW_STATE_EDIT: 'EDIT',
                VIEW_STATE_EXECUTE: 'EXECUTE',
                VIEW_STATE_EDIT_EMPLOYEE: 'EDIT_EMPLOYEE',

                // Routes
                ROUTE_VIEW_COMMITMENT: 'verticalReview.ViewCommitment',
                ROUTE_ACTION_PLAN_CREATE_COMMITMENT: 'verticalReview.CreateCommitmentActionPlan',
                ROUTE_COMMITMENT_COMMENTS: 'verticalReview.CommitmentComment',
                ROUTE_EDIT_COMMITMENT: 'verticalReview.EditCommitment',
                ROUTE_EDIT_ACTION_PLAN: 'verticalReview.EditActionPlan',
                ROUTE_VIEW_ACTION_PLAN: 'verticalReview.ViewActionPlan',
                ROUTE_ACTION_PLAN_COMMENTS: 'verticalReview.ActionPlanComment',
                ROUTE_USER_DETAIL: 'verticalReview.UserDetail',
                ROUTE_CREATE_REVIEW: 'verticalReview.CreateReview',
                ROUTE_VIEW_REVIEW: 'verticalReview.ViewReview',
                ROUTE_EDIT_REVIEW: 'verticalReview.EditReview',
                ROUTE_EXECUTE_REVIEW: 'verticalReview.ExecuteReview',
                ROUTE_CREATE_COMMITMENT: 'verticalReview.CreateCommitment',
                ROUTE_REVIEW_CHANGELOG: 'verticalReview.ReviewChangeLog',
                ROUTE_COMMITMENT_CHANGELOG: 'verticalReview.CommitmentChangeLog',
                ROUTE_ACTION_PLAN_CHANGELOG: 'verticalReview.ActionPlanChangeLog',

                ROUTE_TEAM_REVIEW: 'teamReview',
                ROUTE_TEAM_REVIEW_DETAIL: 'teamReview.ReviewDetail',
                ROUTE_TEAM_REVIEW_CHANGELOG: 'teamReview.ReviewChangeLog',
                ROUTE_CREATE_TEAM_REVIEW: 'teamReview.CreateTeamReview',
                ROUTE_EDIT_TEAM_REVIEW: 'teamReview.EditTeamReview',
                ROUTE_VIEW_TEAM_COMMITMENT: 'teamReview.ViewCommitment',
                ROUTE_CREATE_TEAM_COMMITMENT: 'teamReview.CreateCommitment',
                ROUTE_EDIT_TEAM_COMMITMENT: 'teamReview.EditCommitment',
                ROUTE_COMMITMENT_TEAM_COMMENTS: 'teamReview.CommitmentComment',
                ROUTE_TEAM_COMMITMENT_CHANGELOG: 'teamReview.CommitmentChangeLog',
                ROUTE_VIEW_TEAM_ACTION_PLAN: 'teamReview.ViewActionPlan',
                ROUTE_EDIT_TEAM_ACTION_PLAN: 'teamReview.EditActionPlan',
                ROUTE_ACTION_PLAN_TEAM_COMMENTS: 'teamReview.ActionPlanComment',
                ROUTE_ACTION_PLAN_TEAM_CHANGELOG: 'teamReview.ActionPlanChangeLog',
                ROUTE_ACTION_PLAN_CREATE_TEAM_COMMITMENT: 'teamReview.CreateCommitmentActionPlan',
                ROUTE_EXECUTE_TEAM_REVIEW: 'teamReview.ExecuteReview',

                ROUTE_GOAL: 'goalFollowUp',
                ROUTE_GOAL_USER_DETAIL: 'goalFollowUp.userDetail',
                ROUTE_GOAL_DETAIL: 'goalFollowUp.goalDetail',
                ROUTE_GOAL_MILESTONE_DETAIL: 'goalFollowUp.goalMilestone',
                ROUTE_GOAL_MILESTONE_EDIT: 'goalFollowUp.EditGoalMilestone',

                ROUTE_GOAL_MILESTONE_CHART: 'goalFollowUp.goalMilestoneChart',
                ROUTE_VIEW_GOAL_COMMITMENT: 'goalFollowUp.ViewCommitment',
                ROUTE_EDIT_GOAL_COMMITMENT: 'goalFollowUp.EditCommitment',
                ROUTE_GOAL_COMMITMENT_CHANGELOG: 'goalFollowUp.CommitmentChangeLog',
                ROUTE_COMMITMENT_GOAL_COMMENTS: 'goalFollowUp.CommitmentComment',
                ROUTE_VIEW_GOAL_ACTION_PLAN: 'goalFollowUp.ViewActionPlan',
                ROUTE_EDIT_GOAL_ACTION_PLAN: 'goalFollowUp.EditActionPlan',
                ROUTE_ACTION_PLAN_GOAL_COMMENTS: 'goalFollowUp.ActionPlanComment',
                ROUTE_ACTION_PLAN_GOAL_CHANGELOG: 'goalFollowUp.ActionPlanChangeLog',
                ROUTE_ACTION_PLAN_CREATE_GOAL_COMMITMENT: 'goalFollowUp.CreateCommitmentActionPlan',


                //Objectives
                BEHAVIORS_KEY: "BEHAVIORS",
                OTHER_SUBJECTS_KEY: "OTHER_SUBJECTS",
                SKILLS_KEY: "SKILLS",
                ACTION_PLAN_KEY: "ACTION_PLAN",
                SYNERGY_KEY: "SYNERGY",

                //Formats
                DATE_FORMAT: "dd/MM/yyyy",
                DATETIME_FORMAT: "dd/MM/yyyy HH:mm",
                TIME_FORMAT: "HH:mm",

                //Icon tab key
                ATTACHMENTS: "ATTACHMENTS"
        };

        return Object.freeze(mCONSTANTS);
});