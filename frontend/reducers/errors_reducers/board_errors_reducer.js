import merge from 'lodash/merge';

import {RECEIVE_BOARD_ERRORS} from '../../actions/board_actions';

export const boardErrorsReducer = (boardErrorsSlice ={}, action) => {
  Object.freeze(boardErrorsSlice);
  let newSlice;

  switch(action.type) {
    case RECEIVE_BOARD_ERRORS:
      return action.boardErrors;

    default:
      return boardErrorsSlice;
  }
};
