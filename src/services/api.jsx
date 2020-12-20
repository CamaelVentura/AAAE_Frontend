import axios from 'axios';

const api = axios.create({
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  baseURL: 'https://aaae-backend.herokuapp.com',
  //baseURL: 'http://localhost:3333',
});

export default api;