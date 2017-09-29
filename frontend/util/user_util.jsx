
export const fetchUserInfo = (id) => {
  return $.ajax({
    url: '/api/users/show',
    data: {
      id
    }
  });
};
