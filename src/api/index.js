import axios from 'axios';
import _users from './users';

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
const api = { users };
export { api as default };
