const { default: axios } = require('axios');

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
