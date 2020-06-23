const riotSummoner = require("./riotSummoner");
const riotService = require('./riot')

const RiotMatch = {
  async getMatchHistoryByName(name) {
    const { accountId } = await riotSummoner.getSummonnerByName(name);
    return await riotService.get(`/lol/match/v4/matchlists/by-account/${accountId}`)
  },
  async getMatchBymatchID(matchId) {
     return await riotService.get(`/lol/match/v4/matches/${matchId}`)
  },
};

module.exports = RiotMatch;
