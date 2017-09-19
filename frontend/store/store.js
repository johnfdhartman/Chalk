import React from 'react';
import {createStore, applyMiddleware} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

export const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);
