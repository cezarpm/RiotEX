const riotService = require("./riot")

const RiotSummoner = {
  async getSummonnerByName(name) {
    return await riotService.get(`lol/summoner/v4/summoners/by-name/${name}`)
  },
};

module.exports = RiotSummoner;
