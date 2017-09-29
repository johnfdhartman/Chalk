
export const fetchUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  });
};

export const updateUser = (id, field, value) => {
  let data = {};
  data[field] = value;
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'PATCH',
    data
  });
};
