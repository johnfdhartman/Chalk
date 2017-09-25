import * as Api from '../util/board_util';

export const UPDATE_CREATE_BOARD_STAGE = 'UPDATE_CREATE_BOARD_STAGE';
export const SUCCESSFUL_SAVE_BOARD = 'SUCCESSFUL_SAVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';

export const updateCreateBoardStage = (createBoardStage) => ({
  type: UPDATE_CREATE_BOARD_STAGE,
  createBoardStage
});

export const successfulSaveBoard = successData => ({
  type: SUCCESSFUL_SAVE_BOARD,
  successData
});

export const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board
});

export const receiveBoardErrors = boardErrors => ({
  type: RECEIVE_BOARD_ERRORS,
  boardErrors
});

export const saveBoard = (board) => (dispatch) => (
  Api.saveBoard(board).then(
    (successData) => dispatch(successfulSaveBoard(successData)),
    (errors) => dispatch(receiveBoardErrors(errors.responseJSON.errors))
  )
);

export const requestBoard = id => dispatch => (
  Api.fetchBoard(id).then(
    board => dispatch(receiveBoard(board)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON.errors))
  )
);
