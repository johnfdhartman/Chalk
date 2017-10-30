
export const fetchUser = id => (
  $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  })
);

export const updateUser = (id, user) => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'PUT',
    data: {
      user
    }
  })
);
