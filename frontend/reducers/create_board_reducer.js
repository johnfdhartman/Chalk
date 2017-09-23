import merge from 'lodash/merge';

import {UPDATE_CREATE_BOARD_STAGE} from '../create_board_actions.js';

export const createBoardReducer = (createBoardSlice = {}, action) => {
  Object.freeze(createBoardSlice);
  let newSlice;
  switch(action.type) {
    case UPDATE_CREATE_BOARD_STAGE:
      newSlice = merge({}, createBoardSlice);
      newSlice.createBoardStage = action.createBoardStage;
      return newSlice;

    default:
      return createBoardSlice;
  }
};
