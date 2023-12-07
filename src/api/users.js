export default (_client) => {
  const getUsers = async () => {
    const { data } = await _client.get(`users`);
    return data;
  };

  const getUserDetails = async (id) => {
    const { data } = await _client.get(`users/${id}`);
    return data;
  };

  const getUserAlbums = async (id) => {
    const { data } = await _client.get(`users/${id}/albums`);
    return data;
  };

  return {
    getAll: getUsers,
    getDetails: getUserDetails,
    getAlbums: getUserAlbums
  };
};
