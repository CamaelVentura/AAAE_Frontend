import axios from 'axios';

const api = axios.create({
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  //baseURL: 'https://camael.club',
  baseURL: 'http://localhost:3333',
});

export default api;