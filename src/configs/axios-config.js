import { create } from 'axios';

const config = {
  headers: { 'X-Riot-Token': process.env.API_KEY },
  baseURL: process.env.BASE_URL,
};

const axiosInstance = create(config);

export default axiosInstance;
