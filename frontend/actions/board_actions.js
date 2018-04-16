import * as Api from '../util/board_util';
import merge from 'lodash/merge';

import { assignBoardsToPage }  from './ui_actions';

export const UPDATE_BOARD_STAGE = 'UPDATE_BOARD_STAGE';
export const SUCCESSFUL_SAVE_BOARD = 'SUCCESSFUL_SAVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARDS_ERRORS = 'RECEIVE_BOARDS_ERRORS';
export const CLEAR_BOARD = 'CLEAR_BOARD';

export const updateBoardStage = (stage, boardId) => {
  return {
    type: UPDATE_BOARD_STAGE,
    stage,
    boardId
  };
};

export const successfulSaveBoard = successData => ({
  type: SUCCESSFUL_SAVE_BOARD,
  successData
});

const pathToArr = (path) => {
  let pathLength = Object.values(path).length;
  let pathArr = [];
  for (let i = 0; i < pathLength; i++) {
    pathArr.push(path[i]);
  }
  return pathArr;
};

export const receiveBoard = (board) => {
  let newPaths = pathsToArr(board.paths);
  return {
    type: RECEIVE_BOARD,
    board: {
      id: board.id,
      title: board.title,
      author: board.author,
      paths: newPaths
    }
  };
};

export const clearBoard = (id) => {
  return {
    type: CLEAR_BOARD,
    boardId: id
  };
};

const pathsToArr = (paths) => {
  paths = JSON.parse(paths);
  paths = pathToArr(paths);
  return paths.map( (path) => {
    path.pathCoords = pathToArr(path.pathCoords);
    path.pathCoords.forEach( (coord) => {
      coord.x = parseFloat(coord.x);
      coord.y = parseFloat(coord.y);
    });
    return path;
  });
};

export const receiveBoards = (boardsObj) => {
  return {
    type: RECEIVE_BOARDS,
    boards: boardsObj.boards.map( (board) => {
      let newPaths = pathsToArr(board.paths);
      let newBoard = merge({}, board);
      newBoard.paths = newPaths;
      return newBoard;
    })
  };
};

export const receiveBoardErrors = (boardId, boardErrors) => ({
  type: RECEIVE_BOARD_ERRORS,
  boardErrors,
  boardId
});

export const receiveBoardsErrors = (boardsErrors) => ({
  type: RECEIVE_BOARDS_ERRORS,
  boardsErrors
});


export const saveBoard = (board) => (dispatch) => (
  Api.saveBoard(board).then(
    (successData) => dispatch(successfulSaveBoard(successData)),
    (errors) => dispatch(receiveBoardErrors(
      board.id, errors.responseJSON.errors)
    )
  )
);

export const requestBoard = id => dispatch => (
  Api.fetchBoard(id).then(
    board => dispatch(receiveBoard(board)),
    errors => dispatch(receiveBoardErrors(
      id, errors.responseJSON.errors)
    )
  )
);

export const requestUserBoards = (id, page) => dispatch => (
  Api.fetchUserBoards(id, page).then(
    boards => {
      dispatch(receiveBoards(boards));
      dispatch(assignBoardsToPage(boards.boards,page));
    },
    errors => dispatch(receiveBoardsErrors(errors))
  )

);

export const requestRecentBoards = (page) => dispatch => (
  Api.fetchRecentBoards(page).then(
    boards => {
      dispatch(receiveBoards(boards));
      dispatch(assignBoardsToPage(boards.boards, page));
    },
    errors => dispatch(receiveBoardsErrors(errors))
  )
);
