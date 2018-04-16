import merge from 'lodash/merge';

import {
  SUCCESSFUL_SAVE_BOARD,
  RECEIVE_BOARD,
  RECEIVE_BOARDS,
  } from '../actions/board_actions.js';

export const boardsReducer = (boardsSlice = {}, action) => {
  Object.freeze(boardsSlice);
  let newSlice;
  let newBoard;
  switch(action.type) {

    case SUCCESSFUL_SAVE_BOARD:
      newSlice = merge({}, boardsSlice);
      newSlice.successData = action.successData;
      return newSlice;

    case RECEIVE_BOARD:
      newSlice = merge({}, boardsSlice);
      newBoard = merge({}, action.board);
      newSlice[action.board.id] = newBoard;
      return newSlice;

    case RECEIVE_BOARDS:
      newSlice = {};
      action.boards.forEach( (board) => {
        newBoard = merge({}, board);
        newSlice[board.id] = newBoard;
      });
      return newSlice;

    default:
      return boardsSlice;
  }
};
