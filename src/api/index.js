import axios from 'axios';
import auth from './auth';
import _session from './session';
import _feed from './feed';

const _client = axios.create({
  baseURL: process.env.VUE_APP_REST_API_URL,
});

_client.interceptors.request.use(async (config) => {
  const authState = await auth.getAuthState();

  const headers = {
    ...config.headers,
    Authorization:
      authState && authState.idToken
        ? `Bearer ${authState.idToken}`
        : undefined,
  };

  return { ...config, headers };
});
export const session = _session(_client);
export const feed = _feed(_client);

export { auth };
const api = { auth, session, feed };
export { api as default };
