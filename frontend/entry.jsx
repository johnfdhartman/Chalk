import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';
import {login, logout, signup} from './actions/session_actions';
import {requestUserBoardThumbs} from './actions/board_actions';
document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState = {};
  preloadedState.errors = {sessionErrors: [], boardErrors: []};
  if (window.currentUser) {
    preloadedState.session = {currentUser: window.currentUser};
    delete window.currentUser;
  }
  store = configureStore(preloadedState);

  //For testing purposes only
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.guest = {username: 'guest', password: 'password'};
  window.store = store;
  window.requestUserBoardThumbs = requestUserBoardThumbs;


  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
