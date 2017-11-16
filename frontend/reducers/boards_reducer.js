import merge from 'lodash/merge';

import {
  UPDATE_BOARD_STAGE,
  SUCCESSFUL_SAVE_BOARD,
  RECEIVE_BOARD,
  RECEIVE_BOARDS,
  CLEAR_BOARD
  } from '../actions/board_actions.js';

import {
  START,
  RUNNING,
  FINISHED,
  POST_FINISHED
} from '../components/board/board_stages';


export const boardsReducer = (boardsSlice = {}, action) => {
  Object.freeze(boardsSlice);
  let newSlice;
  let newBoard;
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
      newBoard = merge({}, action.board);
      newBoard.stage = START;
      newSlice[action.board.id] = newBoard;
      return newSlice;

    case RECEIVE_BOARDS:
      newSlice = {};
      action.boards.forEach( (board) => {
        newBoard = merge({}, board);
        newBoard.stage = START;
        newSlice[board.id] = newBoard;
      });
      return newSlice;

    case CLEAR_BOARD:
      newSlice = merge({}, boardsSlice);
      delete newSlice[action.boardId];
      return newSlice;

    default:
      return boardsSlice;
  }
};
