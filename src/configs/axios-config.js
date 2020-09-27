import { create } from 'axios';
import env from '../../env';

const config = {
  headers: { 'X-Riot-Token': env.API_KEY || process.env.API_KEY },
  baseURL: env.BASE_URL || process.env.BASE_URL,
};

const axiosInstance = create(config);

export default axiosInstance;
