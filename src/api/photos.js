export default (_client) => {
  const getPhotos = async () => {
    const { data } = await _client.get(`photos`);
    return data;
  };

  return {
    getAllPhotos: getPhotos,
  };
};