import { Router } from 'express';
import SummonerController from './controllers/summonerController';
import MatchController from './controllers/matchController';

const router = Router();

router.get('/summoner/:name', SummonerController.getSummonnerByName);

router.get('/match/matchlist/:name', MatchController.getMatchHistoryByName);
router.get('/match/:matchId', MatchController.getMatchBymatchID);

export default router;
