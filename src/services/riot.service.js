import axios from '../configs/axios-config';

const RiotService = {
  async get(url) {
    return axios(url)
      .then((res) => res.data)
      .then((data) => data);
  },
};

export default RiotService;
