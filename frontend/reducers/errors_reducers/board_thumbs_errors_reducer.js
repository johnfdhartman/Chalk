import merge from 'lodash/merge';

import {
  RECEIVE_BOARD_THUMBS_ERRORS
} from '../actions/board_thumbs_actions';

export const boardThumbsErrorsReducer = (action, errorsSlice) => {
  Object.freeze(errorsSlice);
  let newSlice;
  switch(action.type){
    case RECEIVE_BOARD_THUMBS_ERRORS:
      newSlice = action.boardThumbsErrors;
      return newSlice;

    default:
      return errorsSlice;
  }
};
