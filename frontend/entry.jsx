import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';
import {requestUserBoardThumbs} from './actions/board_thumbs_actions';
import {requestBoard} from './actions/board_actions';
document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState = {};
  preloadedState.errors = {
    sessionErrors: [],
    boardErrors: [],
    boardThumbsErrors: []
  };
  if (window.currentUser) {
    preloadedState.session = {currentUser: window.currentUser};
    delete window.currentUser;
  }
  console.log('preloadedState', preloadedState);
  store = configureStore(preloadedState);

  //For testing purposes only
  window.store = store;
  window.requestUserBoardThumbs = requestUserBoardThumbs;
  window.requestBoard = requestBoard;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
