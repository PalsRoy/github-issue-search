import * as actionTypes from '../constants/githubConstants';

export const updateFetchPhraseStart = () => ({
  type: actionTypes.UPDATE_FETCH_PHRASE__START,
});

export const updateFetchPhraseSuccess = ({ issuesData }) => ({
  type: actionTypes.UPDATE_FETCH_PHRASE__SUCCESS,
  payload: {issuesData}
});

export const updateFetchPhraseFailure = () => ({
  type: actionTypes.UPDATE_FETCH_PHRASE__FAILURE,
});

export const updateFetchLabelStart = () => ({
  type: actionTypes.UPDATE_FETCH_LABEL__START,
});

export const updateFetchLabelSuccess = ({ issueLabels }) => ({
  type: actionTypes.UPDATE_FETCH_LABEL__SUCCESS,
  payload: {issueLabels}
});

export const updateFetchLabelFailure = () => ({
  type: actionTypes.UPDATE_FETCH_LABEL__FAILURE,
});

export const updateUsers = ({ usersData }) => ({
  type: actionTypes.UPDATE_FETCH_USERS__SUCCESS,
  payload: {usersData}
});

export const updateMilestones = ({ milestoneData }) => ({
  type: actionTypes.UPDATE_FETCH_MILESTONES__SUCCESS,
  payload: {milestoneData}
});
