import axios from 'axios';

// eslint-disable-next-line import/no-unresolved
import { APP_API_URL } from '@env';

const api = axios.create({
  baseURL: APP_API_URL,
});

export default api;
