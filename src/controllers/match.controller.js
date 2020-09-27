import { getMatchBymatchID, getMatchHistoryByName } from '../services/riotMatch.service';

const MatchController = {
  async getMatchHistoryByName(req, res) {
    const { name } = req.params;
    return await getMatchHistoryByName(name) |> res.send;
  },
  async getMatchBymatchID(req, res) {
    const { matchId } = req.params;
    return await getMatchBymatchID(matchId) |> res.send;
  },
};

export default MatchController;
