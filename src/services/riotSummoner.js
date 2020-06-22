const axios = require("../configs/axios-config");

const RiotService = {
  async getSummonnerByName(name) {
    const data = axios
      .get(`lol/summoner/v4/summoners/by-name/${name}`)
      .then((res) => res.data)
      .then((data) => data);
    return data;
  },
};

module.exports = RiotService;
