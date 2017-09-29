
export const fetchUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  });
};

export const updateUser = (id, field, value) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'PATCH',
    data: {
      field,
      value
    }
  });
};
