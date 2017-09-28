import merge from 'lodash/merge';

import {RECEIVE_BOARD_ERRORS} from '../../actions/board_actions';

export const boardsErrorsReducer = (boardsErrorsSlice ={}, action) => {
  Object.freeze(boardsErrorsSlice);
  let newSlice;

  switch(action.type) {
    case RECEIVE_BOARD_ERRORS:
      newSlice = merge({}, boardsErrorsSlice);
      newSlice.push(action.boardErrors);
      return newSlice;

    default:
      return boardsErrorsSlice;
  }
};
