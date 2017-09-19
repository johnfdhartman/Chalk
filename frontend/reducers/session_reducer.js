import merge from 'lodash-merge';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

export const sessionReducer = (sessionSlice, action) => {
  Object.freeze(sessionSlice);
  let newSlice;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newSlice = merge({}, sessionSlice);
      newSlice.currentUser = action.currentUser;
      return newSlice;
    default:
      return sessionSlice;
  }
};
