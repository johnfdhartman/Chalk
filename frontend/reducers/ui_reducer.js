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
<<<<<<< HEAD
      newSlice.profile.bio.editing = true;
=======
      newSlice.bio.editing = true;
>>>>>>> ce4e64391407da1ac2c80571f2d48a42f464278d
      return newSlice;

    case CLOSE_BIO_EDITOR:
      newSlice = merge({}, uiSlice);
      newSlice.profile = newSlice.profile || {};
      newSlice.profile.bio = newSlice.profile.bio || {};
<<<<<<< HEAD
      newSlice.profile.bio.editing = false;
=======
      newSlice.bio.editing = false;
>>>>>>> ce4e64391407da1ac2c80571f2d48a42f464278d
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
