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

export const fetchUserBoardThumbs = (userId,page) => {
  console.log('typeof(userId)', typeof(userId));
  return $.ajax({
    url: `api/users/${userId}/boards/${page}`,
    method: 'GET'
  });
};
