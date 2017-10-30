import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';

import {requestRecentBoards} from './actions/board_actions';
import {requestUser} from './actions/user_actions';

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
  window.requestRecentBoards = requestRecentBoards;
  window.store = store;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
