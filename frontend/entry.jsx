import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';
import preloadedState from './store/preloadedState.js';

import {requestRecentBoards} from './actions/board_actions';
import {requestUser, requestUpdateUser} from './actions/user_actions';
import {updateUser} from './util/user_util';
import update from 'immutability-helper';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  store = configureStore(preloadedState);
  window.requestUser = requestUser;
  window.updateUser = updateUser;
  window.requestUpdateUser = requestUpdateUser;
  window.requestRecentBoards = requestRecentBoards;
  window.update = update;
  window.store = store;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
