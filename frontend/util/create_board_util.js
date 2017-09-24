export const saveBoard = (board) => (
  $.ajax({
    url: 'api/boards',
    method: 'POST',
    data: board
  })
);
