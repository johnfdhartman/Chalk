export const fetchUserBoardThumbs = (userId,page) => {
  console.log('typeof(userId)', typeof(userId));
  return $.ajax({
    url: `api/users/${userId}/boards/${page}`,
    method: 'GET'
  });
};
