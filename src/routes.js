import { Router } from 'express';
import SummonerController from './controllers/summoner.controller';
import MatchController from './controllers/match.controller';
import StatusController from './controllers/status.controller';

const router = Router();

router.param('name', (req, res, next) => {
  const { name } = req.params;
  const encodeName = encodeURIComponent(name);
  req.params.name = encodeName;
  next();
});

router.get('/', StatusController.getStatus);

router.get('/summoner/:name', SummonerController.getSummonnerByName);

router.get('/match/matchlist/:name', MatchController.getMatchHistoryByName);
router.get('/match/:matchId', MatchController.getMatchBymatchID);

export default router;
