import merge from 'lodash/merge';

import {
  RECEIVE_BOARD_THUMBS
} from '../actions/board_thumbs_actions';

export const boardThumbsReducer = (action, boardThumbsSlice) => {
  Object.freeze(boardThumbsSlice);
  let newSlice;
  switch(action.type) {
    case RECEIVE_BOARD_THUMBS:
      newSlice = action.boardThumbs;
      return newSlice;

    default:
      return boardThumbsSlice;
  }
};
