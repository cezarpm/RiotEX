const riot = require('../service/riot');
const summonerController = {
  async getSummonnerByName(req, res) {
    const { name } = req.params;
    const invocador = await riot.getSummonnerIDByName(name);
    res.send(invocador);
  },
  async getMatchHistoryByName(req, res) {
    const { name } = req.params;
    const matchHistory = await riot.getMatchHistoryByName(name);
    res.send(matchHistory)
  },
};

module.exports = summonerController;
