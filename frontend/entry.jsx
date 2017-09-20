import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';
import {login, logout, signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

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
