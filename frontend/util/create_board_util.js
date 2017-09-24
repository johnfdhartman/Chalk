export const saveBoard = (board) => {
  console.log('board', board);
  return $.ajax({
    url: 'api/boards',
    method: 'POST',
    data: board
  });
};
