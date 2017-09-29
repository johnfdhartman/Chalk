import merge from 'lodash/merge';

import {
  RECEIVE_USER
} from '../actions/user_actions.js';

export const usersReducer = (usersSlice = {}, action) => {
  Object.freeze(usersSlice);
  let newSlice;

  switch(action.type) {
    case RECEIVE_USER:
      newSlice = merge({}, usersSlice);
      newSlice[action.user.id] = action.user;
      return newSlice;

    default:
      return usersSlice;
  }
};
