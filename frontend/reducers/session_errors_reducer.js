import merge from 'lodash/merge';
import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

export const sessionErrorsReducer = (sessionErrorsSlice ={}, action) => {
  Object.freeze(sessionErrorsSlice);
  let newSlice;
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
    console.log(action);
      return action.sessionErrors;

    default:
      return sessionErrorsSlice;
  }
};
