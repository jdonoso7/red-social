export default (_client) => {
  const getUsers = async () => {
    const { data } = await _client.get(`users`);
    return data;
  };

  return {
    getAll: getUsers,
  };
};
