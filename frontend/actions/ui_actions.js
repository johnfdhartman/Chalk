export const OPEN_BIO_EDITOR = 'OPEN_BIO_EDITOR';
export const CLOSE_BIO_EDITOR = 'CLOSE_BIO_EDITOR';
export const OPEN_USER_PROFILE = 'OPEN_USER_PROFILE';
export const UPDATE_CURRENT_PAGE_NUM = 'UPDATE_CURRENT_PAGE_NUM';
export const ASSIGN_BOARDS_TO_PAGE = 'ASSIGN_BOARDS_TO_PAGE';

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

export const updateCurrentPageNum = (pageNum) => ({
  type: UPDATE_CURRENT_PAGE_NUM,
  pageNum
});

export const assignBoardsToPage = (boards, page) => ({
  //Receives a some boards and a page number, to save in the state
  //for pagination
  type: ASSIGN_BOARDS_TO_PAGE,
  boards,
  page
});
