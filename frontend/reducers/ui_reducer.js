import {
  OPEN_BIO_EDITOR,
  CLOSE_BIO_EDITOR,
  OPEN_USER_PROFILE
} from '../actions/ui_actions.js';
import merge from 'lodash/merge';

export const uiReducer = (uiSlice = {}, action) => {
  Object.freeze(uiSlice);
  let newSlice;
  switch(action.type) {
    case OPEN_BIO_EDITOR:
      newSlice = merge({}, uiSlice);
      newSlice.profile = newSlice.profile || {};
      newSlice.profile.bio = newSlice.profile.bio || {};
      newSlice.bio.editing = true;
      return newSlice;

    case CLOSE_BIO_EDITOR:
      newSlice = merge({}, uiSlice);
      newSlice.profile = newSlice.profile || {};
      newSlice.profile.bio = newSlice.profile.bio || {};
      newSlice.bio.editing = false;
      return newSlice;

    case OPEN_USER_PROFILE:
      newSlice = merge({}, uiSlice);
      newSlice.profile = newSlice.profile || {};
      newSlice.profile.userId = action.userId;
      newSlice.profile.editing = false;
      return newSlice;

    default:
      return uiSlice;
  }
};
