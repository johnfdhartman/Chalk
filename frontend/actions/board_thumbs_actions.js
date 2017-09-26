import * as Api from '../util/board_thumbs_util';

export const RECEIVE_BOARD_THUMBS = 'RECEIVE_BOARD_THUMBS';
export const RECEIVE_BOARD_THUMBS_ERRORS = 'RECEIVE_BOARD_THUMBS_ERRORS';

export const receiveBoardThumbs = boardThumbs => ({
  type: RECEIVE_BOARD_THUMBS,
  boardThumbs
});

export const receiveBoardThumbsErrors = boardThumbsErrors => ({
  type: RECEIVE_BOARD_THUMBS_ERRORS,
  boardThumbsErrors
});

export const requestUserBoardThumbs = (userId, page) => (dispatch) => (
  Api.fetchUserBoardThumbs(userId, page).then(
    boardThumbs => dispatch(receiveBoardThumbs(boardThumbs)),
    errors => dispatch(receiveBoardThumbsErrors(errors.responseJSON.errors))
  )
);
