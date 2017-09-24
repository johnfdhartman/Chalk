import merge from 'lodash/merge';

import {
  UPDATE_CREATE_BOARD_STAGE,
  SUCCESSFUL_SAVE_BOARD
  } from '../actions/create_board_actions.js';

export const createBoardReducer = (createBoardSlice = {}, action) => {
  Object.freeze(createBoardSlice);
  let newSlice;
  switch(action.type) {
    case UPDATE_CREATE_BOARD_STAGE:
      newSlice = merge({}, createBoardSlice);
      newSlice.createBoardStage = action.createBoardStage;
      return newSlice;

    case SUCCESSFUL_SAVE_BOARD:
      newSlice = merge({}, createBoardSlice);
      newSlice.successData = action.successData;
      return newSlice;

    default:
      return createBoardSlice;
  }
};
