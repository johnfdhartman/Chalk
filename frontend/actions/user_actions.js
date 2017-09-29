import * as Api from '../util/user_util';
import merge from 'lodash/merge';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_USER_UPDATE = 'RECEIVE_USER_UPDATE';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveUserErrors = (userErrors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    userErrors
  };
};

export const requestUser = id => dispatch => (
  Api.fetchUser(id).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors))
  )
);

export const updateUser = (id, field, value) => dispatch => (
  Api.updateUser(id, field, value).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors))
  )
);
