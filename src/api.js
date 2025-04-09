// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restaurant-menu-backend-2qio.onrender.com/api', // your backend base URL
});

export default api;
