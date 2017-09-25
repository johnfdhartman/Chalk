import merge from 'lodash/merge';

import {RECEIVE_BOARD_ERRORS} from '../actions/board_actions';

export const createBoardErrorsReducer = (createBoardErrorsSlice ={}, action) => {
  Object.freeze(createBoardErrorsSlice);
  let newSlice;

  switch(action.type) {
    case RECEIVE_BOARD_ERRORS:
      return action.createBoardErrors;

    default:
      return createBoardErrorsSlice;
  }
};
