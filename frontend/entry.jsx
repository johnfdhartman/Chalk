import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import {requestUser} from './actions/user_actions';
import Root from './components/root';
document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState = {};
  preloadedState.errors = {
    sessionErrors: [],
    boardsErrors: [],
    usersErrors: []
  };
  if (window.currentUser) {
    preloadedState.session = {currentUser: window.currentUser};
    delete window.currentUser;
  }
  store = configureStore(preloadedState);

  //For testing purposes only

  window.requestUser = requestUser;
  window.store = store;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
