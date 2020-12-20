import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  baseURL: process.env.URL,
  //baseURL: 'http://localhost:3333',
});

export default api;