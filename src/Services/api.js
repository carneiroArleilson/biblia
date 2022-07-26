import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.scripture.api.bible/v1/',
  headers: {
    accept: 'application/json',
    'api-key': '8bc2f79ed2f1f3b43b5fc70bb2926690',
  },
});

export default api;
