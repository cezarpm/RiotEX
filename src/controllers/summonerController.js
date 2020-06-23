const riot = require("../services/riotSummoner");

const summonerController = {
  async getSummonnerByName(req, res) {
    const { name } = req.params;
    const invocador = await riot.getSummonnerByName(name);
    res.send(invocador);
  },
};

module.exports = summonerController;
