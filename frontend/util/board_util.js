export const saveBoard = (board) => {
  return $.ajax({
    url: 'api/boards',
    method: 'POST',
    data: board
  });
};

export const fetchBoard = (id) => {
  return $.ajax({
    url: `api/boards/${id}`,
    method: 'GET'
  });
};

export const fetchUserBoards = (userId,page) => {
  return $.ajax({
    url: `api/users/${userId}/boards/${page}`,
    method: 'GET'
  });
};

export const fetchRecentBoards = (page) => {
  return $.ajax({
    url: `api/boards/recent/${page}`
  });
};
