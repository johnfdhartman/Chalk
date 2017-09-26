export const RECEIVE_BOARD_THUMBS = 'RECEIVE_BOARD_THUMBS';

export const receiveBoardThumbs = boardThumbs => ({
  type: RECEIVE_BOARD_THUMBS,
  boardThumbs
});

export const requestUserBoardThumbs = (userId, page) => (dispatch) => (
  Api.fetchUserBoardThumbs(userId, page).then(
    boardThumbs => dispatch(receiveBoardThumbs(boardThumbs))
  )
);
