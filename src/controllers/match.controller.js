import { getMatchBymatchID, getMatchHistoryByName } from '../services/riotMatch.service';

const MatchController = {
  async getMatchHistoryByName(req, res) {
    const { name } = req.params;
    const matchHistory = await getMatchHistoryByName(name);
    res.send(matchHistory);
  },
  async getMatchBymatchID(req, res) {
    const { matchId } = req.params;
    const match = await getMatchBymatchID(matchId);
    res.send(match);
  },
};

export default MatchController;
