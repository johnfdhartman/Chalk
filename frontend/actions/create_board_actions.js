import * as Api from '../util/create_board_util';

export const UPDATE_CREATE_BOARD_STAGE = 'UPDATE_CREATE_BOARD_STAGE';
export const SUCCESSFUL_SAVE_BOARD = 'SUCCESSFUL_SAVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

export const updateCreateBoardStage = (createBoardStage) => ({
  type: UPDATE_CREATE_BOARD_STAGE,
  createBoardStage
});

export const successfulSaveBoard = successData => ({
  type: SUCCESSFUL_SAVE_BOARD,
  successData
});

export const receiveBoardErrors = createBoardErrors => ({
  type: RECEIVE_BOARD_ERRORS,
  createBoardErrors
});

export const saveBoard = (board) => (dispatch) => (
  Api.saveBoard(board).then(
    (successData) => dispatch(successfulSaveBoard(successData)),
    (errors) => dispatch(receiveBoardErrors(errors.responseJSON.errors))
  )
);
