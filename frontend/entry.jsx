import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import {fetchUserBoards} from './util/board_util';
import Root from './components/root';
document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState = {};
  preloadedState.errors = {
    sessionErrors: [],
    boardsErrors: [],
  };
  if (window.currentUser) {
    preloadedState.session = {currentUser: window.currentUser};
    delete window.currentUser;
  }
  store = configureStore(preloadedState);

  //For testing purposes only
  window.fetchUserBoards = fetchUserBoards;
  window.store = store;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
