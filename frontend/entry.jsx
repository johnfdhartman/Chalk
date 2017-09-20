import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';
import {login, logout, signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //For testing purposes only
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.guest = {username: 'guest', password: 'password'};
  window.store = store;


  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
