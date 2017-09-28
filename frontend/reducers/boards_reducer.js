import merge from 'lodash/merge';

import {
  UPDATE_BOARD_STAGE,
  SUCCESSFUL_SAVE_BOARD,
  RECEIVE_BOARD,
  RECEIVE_BOARDS
  } from '../actions/board_actions.js';

export const boardsReducer = (boardsSlice = {}, action) => {
  Object.freeze(boardsSlice);
  let newSlice;
  switch(action.type) {
    case UPDATE_BOARD_STAGE:
      newSlice = merge({}, boardsSlice);
      if (newSlice[action.boardId]) {
        newSlice[action.boardId].stage = action.stage;
      } else {
        newSlice[action.boardId] = {stage: action.stage};
      }

      return newSlice;

    case SUCCESSFUL_SAVE_BOARD:
      newSlice = merge({}, boardsSlice);
      newSlice.successData = action.successData;
      return newSlice;

    case RECEIVE_BOARD:
      newSlice = merge({}, boardsSlice);
      let newBoard = merge({}, action.board);
      newBoard.stage = 'start';
      newSlice[action.board.id] = newBoard;
      return newSlice;

    case RECEIVE_BOARDS:
      return action.boards;

    default:
      return boardsSlice;
  }
};
