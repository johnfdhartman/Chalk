import * as Api from '../util/auth_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
});

export const receiveSessionErrors = (sessionErrors) => ({
  type: RECEIVE_SESSION_ERRORS,
  sessionErrors
});

export const signup = (user) => (dispatch) => (
  Api.signup(user).then(
    outUser => dispatch(receiveCurrentUser(outUser)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON.errors))
  )
);


export const login = (user) => (dispatch) => (
  Api.login(user).then(
    outUser => dispatch(receiveCurrentUser(outUser)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON.errors))
  )
);

export const logout = () => (dispatch) => (
  Api.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveSessionErrors(errors))
  )
);
