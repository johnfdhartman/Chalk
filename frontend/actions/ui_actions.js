export const OPEN_BIO_EDITOR = 'OPEN_BIO_EDITOR';
export const CLOSE_BIO_EDITOR = 'CLOSE_BIO_EDITOR';
export const OPEN_USER_PROFILE = 'OPEN_USER_PROFILE';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
export const ASSIGN_BOARDS_TO_PAGE = 'ASSIGN_BOARDS_TO_PAGE';
export const UPDATE_BOARD_STAGE = 'UPDATE_BOARD_STAGE';
export const CLEAR_BOARD = 'CLEAR_BOARD';

export const openBioEditor = () => ({
  type: OPEN_BIO_EDITOR
});

export const closeBioEditor = () => ({
  type: CLOSE_BIO_EDITOR
});

export const openUserProfile = (userId) => ({
  type: OPEN_USER_PROFILE,
  userId
});

export const updateCurrentPage = (pageNum) => ({
  type: UPDATE_CURRENT_PAGE,
  pageNum
});

export const assignBoardsToPage = (boards, page) => ({
  //Receives a some boards and a page number, to save in the state
  //for pagination
  type: ASSIGN_BOARDS_TO_PAGE,
  boards,
  page
});

export const updateBoardStage = (stage, boardId) => {
  return {
    type: UPDATE_BOARD_STAGE,
    stage,
    boardId
  };
};

export const clearBoard = (id) => {
  return {
    type: CLEAR_BOARD,
    boardId: id
  };
};
