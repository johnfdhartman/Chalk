import merge from 'lodash/merge';

import {RECEIVE_BOARD_ERRORS} from '../../actions/board_actions';

export const boardsErrorsReducer = (boardsErrorsSlice =[], action) => {
  Object.freeze(boardsErrorsSlice);
  let newSlice;

  switch(action.type) {
    case RECEIVE_BOARD_ERRORS:
      newSlice = JSON.parse(JSON.stringify(boardsErrorsSlice));
      newSlice.push(action.boardErrors);
      return newSlice;

    default:
      return boardsErrorsSlice;
  }
};
