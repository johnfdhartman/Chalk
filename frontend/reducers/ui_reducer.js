import {
  OPEN_BIO_EDITOR,
  CLOSE_BIO_EDITOR,
  OPEN_USER_PROFILE,
  ASSIGN_BOARDS_TO_PAGE,
  UPDATE_CURRENT_PAGE,
  UPDATE_BOARD_STAGE,
  CLEAR_BOARD,
  INITIALIZE_BOARDS
} from '../actions/ui_actions.js';

import {
  RECEIVE_BOARD,
  RECEIVE_BOARDS
} from '../actions/board_actions.js';

import {
  START,
  RUNNING,
  FINISHED,
  POST_FINISHED
} from '../components/board/board_stages';


import _ from 'lodash';

export const uiReducer = (uiSlice = {}, action) => {
  Object.freeze(uiSlice);
  let newSlice;
  switch(action.type) {
    case OPEN_BIO_EDITOR:
      newSlice = _.merge({}, uiSlice);
      newSlice.profile = newSlice.profile || {};
      newSlice.profile.bio = newSlice.profile.bio || {};
      newSlice.profile.bio.editing = true;
      return newSlice;

    case CLOSE_BIO_EDITOR:
      newSlice = _.merge({}, uiSlice);
      newSlice.profile = newSlice.profile || {};
      newSlice.profile.bio = newSlice.profile.bio || {};
      newSlice.profile.bio.editing = false;
      return newSlice;

    case OPEN_USER_PROFILE:
      newSlice = _.merge({}, uiSlice);
      newSlice.profile = newSlice.profile || {};
      newSlice.profile.userId = action.userId;
      newSlice.profile.editing = false;
      return newSlice;

    case ASSIGN_BOARDS_TO_PAGE:
      //assigns an array of board IDs to a page number
      newSlice = _.merge({}, uiSlice);
      newSlice.pages = newSlice.pages || {};
      newSlice.pages[action.page] = action.boards.map(
        board => board.id
      );
      return newSlice;

    case UPDATE_CURRENT_PAGE:
      newSlice = _.merge({}, uiSlice);
      newSlice.currentPage = action.pageNum;
      return newSlice;

    case UPDATE_BOARD_STAGE:
      newSlice = _.merge({}, uiSlice);
      if (newSlice.boardStages[action.boardId]) {
        newSlice.boardStages[action.boardId] = action.stage;
      } else {
        console.log('this should not be happening');
        newSlice.boardStages[action.boardId] = action.stage;
      }
      return newSlice;

    case CLEAR_BOARD:
      newSlice = _.merge({}, uiSlice);
      delete newSlice.boardStages[action.board.id];
      return newSlice;

    case INITIALIZE_BOARDS:
      newSlice = _.merge({}, uiSlice);
      const newStages = {};
      _.keys(newSlice.boardStages).forEach(boardId => {
        newStages[boardId] = START;
      });
      newSlice.boardStages = newStages;
      return newSlice;

    // case RECEIVE_BOARD:
    //   newSlice = _.merge({}, uiSlice);
    //   newSlice.boardStages[action.board.id] = START;
    //   return newSlice;
    //
    // case RECEIVE_BOARDS:
    //   newSlice = _.merge({}, uiSlice);
    //   action.boards.forEach(board => {
    //     newSlice.boardStages[board.id] = START;
    //   });
    //   return newSlice;

    default:
      return uiSlice;
  }
};
