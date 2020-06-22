require('dotenv').config();
const axios = require('axios');

const config = {
  headers: { 'X-Riot-Token': process.env.API_KEY },
  baseURL: process.env.BASE_URL,
};

const axiosInstance = axios.create(config);

module.exports = axiosInstance;
