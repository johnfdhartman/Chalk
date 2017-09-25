import merge from 'lodash/merge';

import {
  UPDATE_CREATE_BOARD_STAGE,
  SUCCESSFUL_SAVE_BOARD
  } from '../actions/board_actions.js';

export const boardReducer = (boardSlice = {}, action) => {
  Object.freeze(boardSlice);
  let newSlice;
  switch(action.type) {
    case UPDATE_CREATE_BOARD_STAGE:
      newSlice = merge({}, boardSlice);
      newSlice.createBoardStage = action.createBoardStage;
      return newSlice;

    case SUCCESSFUL_SAVE_BOARD:
      newSlice = merge({}, boardSlice);
      newSlice.successData = action.successData;
      return newSlice;

    default:
      return boardSlice;
  }
};
