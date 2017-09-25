import merge from 'lodash/merge';

import {
  UPDATE_BOARD_STAGE,
  SUCCESSFUL_SAVE_BOARD,
  RECEIVE_BOARD
  } from '../actions/board_actions.js';

export const boardReducer = (boardSlice = {}, action) => {
  Object.freeze(boardSlice);
  let newSlice;
  switch(action.type) {
    case UPDATE_BOARD_STAGE:
      newSlice = merge({}, boardSlice);
      newSlice.boardStage = action.boardStage;
      return newSlice;

    case SUCCESSFUL_SAVE_BOARD:
      newSlice = merge({}, boardSlice);
      newSlice.successData = action.successData;
      return newSlice;

    case RECEIVE_BOARD:
      return action.board;

    default:
      return boardSlice;
  }
};
