import { getSummonnerByName } from '../services/riotSummoner.service';

const SummonerController = {
  async getSummonnerByName(req, res) {
    const { name } = req.params;
    return await getSummonnerByName(name) |> res.send;
  },
};

export default SummonerController;
