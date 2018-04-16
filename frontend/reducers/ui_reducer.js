import {
  OPEN_BIO_EDITOR,
  CLOSE_BIO_EDITOR,
  OPEN_USER_PROFILE,
  ASSIGN_BOARDS_TO_PAGE,
  UPDATE_CURRENT_PAGE
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
      newSlice.profile.bio.editing = true;
      return newSlice;

    case CLOSE_BIO_EDITOR:
      newSlice = merge({}, uiSlice);
      newSlice.profile = newSlice.profile || {};
      newSlice.profile.bio = newSlice.profile.bio || {};
      newSlice.profile.bio.editing = false;
      return newSlice;

    case OPEN_USER_PROFILE:
      newSlice = merge({}, uiSlice);
      newSlice.profile = newSlice.profile || {};
      newSlice.profile.userId = action.userId;
      newSlice.profile.editing = false;
      return newSlice;

    case ASSIGN_BOARDS_TO_PAGE:
      //assigns an array of board IDs to a page number
      newSlice = merge({}, uiSlice);
      newSlice.pages = newSlice.pages || {};
      newSlice.pages[action.page] = action.boards.map(
        board => board.id
      );
      return newSlice;

    case UPDATE_CURRENT_PAGE:
      newSlice = merge({}, uiSlice);
      newSlice.currentPage = action.pageNum;
      return newSlice;

    default:
      return uiSlice;
  }
};
