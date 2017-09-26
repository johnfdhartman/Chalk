import merge from 'lodash/merge';
import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../../actions/session_actions';

export const sessionErrorsReducer = (sessionErrorsSlice ={}, action) => {
  Object.freeze(sessionErrorsSlice);
  let newSlice;
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.sessionErrors;

    case RECEIVE_CURRENT_USER:
      console.log('action', action);
      return [];
    default:
      return sessionErrorsSlice;
  }
};
