const riot = require("../services/riotSummoner");

const summonerController = {
  async getSummonnerByName(req, res) {
    const { name } = req.params;
    const invocador = await riot.getSummonnerByName(name);
    res.send(invocador);
  },
  async getMatchHistoryByName(req, res) {
    const { name } = req.params;
    const matchHistory = await riot.getMatchHistoryByName(name);
    res.send(matchHistory);
  },
};

module.exports = summonerController;
