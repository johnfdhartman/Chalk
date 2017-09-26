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

export const fetchUserBoards = (user,page) => {
  return $.ajax({
    url: `api/users/${user.id}/boards/${page}`,
    method: 'GET'
  });
};
