import {
  OPEN_BIO_EDITOR,
  CLOSE_BIO_EDITOR
} from '../actions/ui_actions.js';
import merge from 'lodash/merge';

export const uiReducer = (uiSlice = {}, action) => {
  Object.freeze(uiSlice);
  let newSlice;
  switch(action.type) {
    case OPEN_BIO_EDITOR:
      newSlice = merge({}, uiSlice);
      newSlice.bio = newSlice.bio || {};
      newSlice.bio.editing = true;
      return newSlice;

    case CLOSE_BIO_EDITOR:
      newSlice = merge({}, uiSlice);
      newSlice.bio = newSlice.bio || {};
      newSlice.bio.editing = false;
      return newSlice;

    default:
      return uiSlice;
  }
};
