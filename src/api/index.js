import axios from 'axios';
import _users from './users';
import _photos from './photos';

const _client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

_client.interceptors.request.use(async (config) => {

  const headers = {
    ...config.headers
  };

  return { ...config, headers };
});

export const users = _users(_client)
export const photos = _photos(_client)

const api = { users, photos };
export { api as default };
