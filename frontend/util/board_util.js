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
