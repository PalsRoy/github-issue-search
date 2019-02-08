import * as actionTypes from '../constants/githubConstants';

var initialState = {
  issues:[],
  milestoneData:[],
  fetchFailure: false,
  labelFailure: false,
  usersData:[]
}

export default function(state = initialState,action){
  const { type, payload } = action;
  //console.log(type);
  //console.log(payload);
  switch(type){
case actionTypes.UPDATE_FETCH_PHRASE__START:
  return{...state,fetchFailure:false};
case actionTypes.UPDATE_FETCH_PHRASE__SUCCESS:
  return{...state,issues:payload.issuesData};
case actionTypes.UPDATE_FETCH_PHRASE__FAILURE:
  return{...state,fetchFailure:true};
case actionTypes.UPDATE_FETCH_LABEL__START:
    return{...state,labelFailure:false};
case actionTypes.UPDATE_FETCH_LABEL__SUCCESS:
  return{...state,issueLabels:payload.issueLabels};
case actionTypes.UPDATE_FETCH_LABEL__FAILURE:
    return{...state,labelFailure:true};
case actionTypes.UPDATE_FETCH_USERS__SUCCESS:
    return{...state,usersData:payload.usersData};
case actionTypes.UPDATE_FETCH_MILESTONES__SUCCESS:
    return{...state,milestoneData:payload.milestoneData};
default:
  return state;
}
}
