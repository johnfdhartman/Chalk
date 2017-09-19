import merge from 'lodash-merge';
import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

export const sessionErrorsReducer = (sessionErrorsSlice, action) => {
  Object.freeze(sessionErrorsSlice);
  let newSlice;
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      newSlice = merge(action.sessionErrors, sessionErrorsSlice);
      return newSlice;

    default:
      return sessionErrorsSlice;
  }
};
