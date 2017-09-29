
export const fetchUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  });
};

export const updateUser = (id, field, newVal) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'PATCH',
    data: {
      field,
      newVal
    }
  });
};
