import merge from 'lodash/merge';

import {RECEIVE_USER_ERRORS} from '../../actions/user_actions';

export const usersErrorsReducer = (userErrorsSlice = {}, action) => {
  Object.freeze(userErrorsSlice);
  let newSlice;

  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      newSlice = merge({}, userErrorsSlice);
      newSlice.push(action.userErrors);
      return newSlice;

    default:
      return userErrorsSlice;
  }
};
