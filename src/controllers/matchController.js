const riot = require("../services/riotMatch");

const MatchController = {
  async getMatchHistoryByName(req, res) {
    const { name } = req.params;
    const matchHistory = await riot.getMatchHistoryByName(name);
    res.send(matchHistory);
  },
  async getMatchBymatchID(req, res) {
    const { matchId } = req.params;
    const match = await riot.getMatchBymatchID(matchId);
    res.send(match);
  },
};

module.exports = MatchController;
