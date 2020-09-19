import { getSummonnerByName } from '../services/riotSummoner.service';

const SummonerController = {
  async getSummonnerByName(req, res) {
    const { name } = req.params;
    const invocador = await getSummonnerByName(name);
    res.send(invocador);
  },
};

export default SummonerController;
