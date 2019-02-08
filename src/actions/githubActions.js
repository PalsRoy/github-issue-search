import axios from 'axios';
import  * as apiActions from './apiActions';
import * as actionTypes from '../constants/githubConstants';

//Keep it configurable
const url = actionTypes.GITHUB_ISSUE_SEARCH_API;

export const getIssues = (queryParameters) =>
  (dispatch,getState) => {

  dispatch(
    apiActions.updateFetchPhraseStart()
  );

  const apiUrl = `${url}+${queryParameters}`;
  console.log(apiUrl);
  axios.get(apiUrl)
  .then(({data}) => {
   console.log(data);
    const issuesData = data.items;
      dispatch(
        apiActions.updateFetchPhraseSuccess({ issuesData })
    );
  })
  .catch(() =>{
    dispatch(
      apiActions.updateFetchPhraseFailure()
    );
  });
};

export const getLabels = () =>
  (dispatch,getState) => {

dispatch(
  apiActions.updateFetchLabelStart()
);

  axios.get('https://api.github.com/repos/uber/react-vis/labels')
  .then(({data}) => {
  //  console.log(data);
    const issueLabels = data.map(item => {
      return { value: item.name, label: item.name };
    });
    dispatch(
      apiActions.updateFetchLabelSuccess({ issueLabels })
  );

  })
  .catch(() =>{
    dispatch(
      apiActions.updateFetchLabelFailure()
    );
  });
};

export const getUsers = () =>
  (dispatch,getState) => {
    axios.get('https://api.github.com/repos/uber/react-vis/issues')
    .then(({data}) => {

     const usersData = data.map(each => {
        return { value: each.user.login, label: each.user.login };
     });

    dispatch(apiActions.updateUsers({usersData}));

  })
  .catch((err) => {
    throw err;
  });
};

export const getMilestones = () =>
  (dispatch,getState) => {

    axios.get('https://api.github.com/repos/uber/react-vis/milestones')
    .then(({data}) => {

      const milestoneData = data.map(milestone => {
        return { value: milestone.title, label: milestone.title };
      });

    dispatch(apiActions.updateMilestones({milestoneData}));

  })
  .catch((err) => {
    throw err;
  });
};
