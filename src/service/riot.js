const axios = require('../config/axios-config');

const RiotService = {
  async getSummonnerIDByName(name) {
    const data = axios
      .get(`lol/summoner/v4/summoners/by-name/${name}`)
      .then((res) => res.data)
      .then((data) => data);
    return data;
  },
  async getMatchHistoryByName(name) {
    const { accountId } = await this.getSummonnerIDByName(name);
    const data = axios
      .get(`/lol/match/v4/matchlists/by-account/${accountId}`)
      .then((res) => res.data)
      .then((data) => data);
    return data;
  },
};

module.exports = RiotService;
