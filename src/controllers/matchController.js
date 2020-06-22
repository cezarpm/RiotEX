const riot = require("../services/riotMatch");

const MatchController = {
  async getMatchHistoryByName(req, res) {
    const { name } = req.params;
    const matchHistory = await riot.getMatchHistoryByName(name);
    res.send(matchHistory);
  },
};

module.exports = MatchController;
