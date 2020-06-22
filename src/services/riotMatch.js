const axios = require("../configs/axios-config");
const riotSummoner = require("./riotSummoner");

const RiotService = {
  async getMatchHistoryByName(name) {
    const { accountId } = await riotSummoner.getSummonnerByName(name);
    const data = axios
      .get(`/lol/match/v4/matchlists/by-account/${accountId}`)
      .then((res) => res.data)
      .then((data) => data);
    return data;
  },
};

module.exports = RiotService;
